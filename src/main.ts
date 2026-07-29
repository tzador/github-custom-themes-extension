import "./style.css";
import "./theme.css";
import { fonts, type Font } from "./fonts.ts";
import { themes, type Theme } from "./themes.ts";
import { createPopper, type Instance } from "@popperjs/core";
import githubLogoSvg from "@phosphor-icons/core/assets/regular/github-logo.svg?raw";
import sunSvg from "@phosphor-icons/core/assets/regular/sun.svg?raw";
import moonSvg from "@phosphor-icons/core/assets/regular/moon.svg?raw";
import textAaSvg from "@phosphor-icons/core/assets/regular/text-aa.svg?raw";
import codeSvg from "@phosphor-icons/core/assets/regular/code.svg?raw";

const html = document.documentElement;

const storageKeys = {
  fontSans: "gct-font-sans",
  fontMono: "gct-font-mono",
  theme: "gct-theme",
} as const;

// localStorage can throw (privacy modes, storage disabled) — never let
// persistence break the extension.
function readStored(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStored(key: string, value: string | null) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

function applyFont(
  datasetKey: "gctFontSans" | "gctFontMono",
  slug: string,
) {
  if (slug) html.dataset[datasetKey] = slug;
  else delete html.dataset[datasetKey];
}

function restoreFont(
  datasetKey: "gctFontSans" | "gctFontMono",
  storageKey: string,
  list: Font[],
  fallback: string,
) {
  const stored = readStored(storageKey);
  // "" is a real choice (Default); null means never chosen → fallback.
  const valid = stored === "" || list.some((font) => font.slug === stored);
  applyFont(datasetKey, stored !== null && valid ? stored : fallback);
}

restoreFont("gctFontSans", storageKeys.fontSans, fonts.sans, "mona-sans");
restoreFont("gctFontMono", storageKeys.fontMono, fonts.mono, "monaspace-neon");

/*
 * GitHub picks its native palette from data-color-mode/data-*-theme on <html>.
 * When a custom theme is applied we force the matching base mode so every
 * Primer variable the engine does not override still fits, and restore the
 * user's original setup when going back to Default.
 */
const originalMode = {
  colorMode: html.getAttribute("data-color-mode"),
  lightTheme: html.getAttribute("data-light-theme"),
  darkTheme: html.getAttribute("data-dark-theme"),
};

function applyTheme(slug: string, mode: "light" | "dark") {
  if (slug) {
    html.dataset.gctTheme = slug;
    html.setAttribute("data-color-mode", mode);
    html.setAttribute("data-light-theme", mode === "light" ? "light" : "dark");
    html.setAttribute("data-dark-theme", mode === "dark" ? "dark" : "light");
  } else {
    delete html.dataset.gctTheme;
    for (const [attr, value] of [
      ["data-color-mode", originalMode.colorMode],
      ["data-light-theme", originalMode.lightTheme],
      ["data-dark-theme", originalMode.darkTheme],
    ] as const) {
      if (value === null) html.removeAttribute(attr);
      else html.setAttribute(attr, value);
    }
  }
}

function restoreTheme() {
  const stored = readStored(storageKeys.theme);
  if (!stored) return;
  try {
    const { slug, mode } = JSON.parse(stored) as {
      slug?: unknown;
      mode?: unknown;
    };
    if (
      typeof slug === "string" &&
      (mode === "light" || mode === "dark") &&
      themes[mode].some((theme) => theme.slug === slug)
    ) {
      applyTheme(slug, mode);
    }
  } catch {
    /* ignore corrupt value */
  }
}

restoreTheme();

interface Item {
  name: string;
  slug: string;
}

/*
 * A single shared popover element, repositioned next to whichever theme
 * option is hovered. Popper keeps it inside the viewport.
 */
let popoverEl: HTMLDivElement | null = null;
let popoverTitle: HTMLElement;
let popoverText: HTMLElement;
let popperInstance: Instance | null = null;
let popoverTimer: number | undefined;

function ensurePopover(): HTMLDivElement {
  if (!popoverEl) {
    popoverEl = document.createElement("div");
    popoverEl.className = "gct-popover";

    popoverTitle = document.createElement("h4");
    popoverTitle.className = "gct-popover-title";

    popoverText = document.createElement("p");
    popoverText.className = "gct-popover-text";

    const arrow = document.createElement("div");
    arrow.className = "gct-popover-arrow";
    arrow.dataset.popperArrow = "";

    popoverEl.append(popoverTitle, popoverText, arrow);
    document.body.append(popoverEl);
  }
  return popoverEl;
}

function hidePopover() {
  window.clearTimeout(popoverTimer);
  popoverEl?.classList.remove("gct-visible");
  popperInstance?.destroy();
  popperInstance = null;
}

function attachPopover(button: HTMLButtonElement, name: string, about: string) {
  const show = () => {
    window.clearTimeout(popoverTimer);
    // Small delay so skimming the list doesn't flash popovers.
    popoverTimer = window.setTimeout(() => {
      const popover = ensurePopover();
      popoverTitle.textContent = name;
      popoverText.textContent = about;
      popover.classList.add("gct-visible");
      popperInstance?.destroy();
      popperInstance = createPopper(button, popover, {
        placement: "left",
        modifiers: [
          { name: "offset", options: { offset: [0, 12] } },
          { name: "preventOverflow", options: { padding: 8 } },
          { name: "arrow", options: { padding: 8 } },
        ],
      });
    }, 250);
  };

  button.addEventListener("mouseenter", show);
  button.addEventListener("mouseleave", hidePopover);
  button.addEventListener("click", hidePopover);
}

const sectionSyncs: (() => void)[] = [];
const syncSections = () => sectionSyncs.forEach((sync) => sync());

// One entry per accordion section, so opening one can collapse the rest.
const accordionToggles: ((open: boolean) => void)[] = [];

function listSection<T extends Item>(
  label: string,
  icon: string,
  items: T[],
  api: {
    isSelected: (slug: string) => boolean;
    select: (slug: string) => void;
    decorate?: (item: T, button: HTMLButtonElement) => void;
  },
): HTMLElement {
  const section = document.createElement("section");
  section.className = "gct-section";

  const title = document.createElement("h3");
  title.className = "gct-section-title";

  const header = document.createElement("button");
  header.type = "button";
  header.className = "gct-section-header";
  header.setAttribute("aria-expanded", "false");

  const iconEl = document.createElement("span");
  iconEl.className = "gct-section-icon";
  iconEl.innerHTML = icon;

  const labelEl = document.createElement("span");
  labelEl.textContent = label;

  header.append(iconEl, labelEl);
  title.append(header);

  const listEl = document.createElement("div");
  listEl.className = "gct-font-list";
  // Scrolling moves the hovered option away from the popover's anchor.
  listEl.addEventListener("scroll", hidePopover);

  const options: Item[] = [
    { name: "GitHub Default", slug: "" },
    ...[...items].sort((a, b) => a.name.localeCompare(b.name)),
  ];
  const buttons: HTMLButtonElement[] = [];

  for (const [index, item] of options.entries()) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gct-font-option";
    button.dataset.slug = item.slug;

    const nameEl = document.createElement("span");
    nameEl.textContent = item.name;

    const indexEl = document.createElement("span");
    indexEl.className = "gct-option-index";
    indexEl.textContent = String(index);

    button.append(nameEl, indexEl);
    // The synthetic "GitHub Default" entry is a plain Item; real entries are T.
    if (item.slug) api.decorate?.(item as T, button);

    button.addEventListener("click", () => {
      api.select(item.slug);
      syncSections();
    });

    buttons.push(button);
    listEl.append(button);
  }

  sectionSyncs.push(() => {
    for (const button of buttons) {
      button.classList.toggle(
        "gct-selected",
        api.isSelected(button.dataset.slug ?? ""),
      );
    }
  });

  // Arrow keys move within the list and apply the option right away.
  listEl.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    // Start from the focused option, falling back to the selected one.
    const focused = buttons.indexOf(
      document.activeElement as HTMLButtonElement,
    );
    const start =
      focused !== -1
        ? focused
        : buttons.findIndex((b) => b.classList.contains("gct-selected"));
    const index =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? buttons.length - 1
          : Math.min(
              Math.max(start + (event.key === "ArrowDown" ? 1 : -1), 0),
              buttons.length - 1,
            );
    const target = buttons[index];
    if (!target) return;
    target.focus();
    target.scrollIntoView({ block: "nearest" });
    api.select(target.dataset.slug ?? "");
    syncSections();
  });

  const setOpen = (open: boolean) => {
    section.classList.toggle("gct-expanded", open);
    header.setAttribute("aria-expanded", String(open));
  };
  accordionToggles.push(setOpen);

  // Exactly one section stays open: clicking the open header is a no-op.
  header.addEventListener("click", () => {
    if (section.classList.contains("gct-expanded")) return;
    accordionToggles.forEach((toggle) => toggle(false));
    setOpen(true);
    hidePopover();
  });

  section.append(title, listEl);
  return section;
}

function fontSection(
  label: string,
  icon: string,
  datasetKey: "gctFontSans" | "gctFontMono",
  storageKey: string,
  list: Font[],
): HTMLElement {
  return listSection(label, icon, list, {
    isSelected: (slug) => (html.dataset[datasetKey] ?? "") === slug,
    select: (slug) => {
      applyFont(datasetKey, slug);
      writeStored(storageKey, slug);
    },
    decorate: (item, button) => {
      button.style.setProperty("font-family", `"${item.name}"`, "important");
      attachPopover(button, item.name, item.about);
    },
  });
}

function themeSection(
  label: string,
  icon: string,
  mode: "light" | "dark",
  list: Theme[],
): HTMLElement {
  return listSection(label, icon, list, {
    isSelected: (slug) => {
      const current = html.dataset.gctTheme ?? "";
      // "Default" is only highlighted while no theme at all is active, so an
      // active dark theme leaves the light list fully unselected & vice versa.
      return slug ? current === slug : current === "";
    },
    select: (slug) => {
      applyTheme(slug, mode);
      writeStored(
        storageKeys.theme,
        slug ? JSON.stringify({ slug, mode }) : null,
      );
    },
    decorate: (item, button) => {
      attachPopover(button, item.name, item.about);
    },
  });
}

function injectUi() {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "gct-fab";
  button.title = "GitHub Custom Themes";
  button.setAttribute("aria-label", "Open GitHub Custom Themes");

  const icon = document.createElement("img");
  icon.src = chrome.runtime.getURL("icon.svg");
  icon.alt = "";
  button.append(icon);

  const drawer = document.createElement("aside");
  drawer.className = "gct-drawer";

  const header = document.createElement("header");
  header.className = "gct-drawer-header";

  const title = document.createElement("h2");
  title.className = "gct-drawer-title";
  title.textContent = "GitHub Custom Themes";

  const close = document.createElement("button");
  close.type = "button";
  close.className = "gct-drawer-close";
  close.setAttribute("aria-label", "Close");
  close.textContent = "×";

  header.append(title, close);

  const body = document.createElement("div");
  body.className = "gct-drawer-body";
  body.append(
    themeSection("Light themes", sunSvg, "light", themes.light),
    themeSection("Dark themes", moonSvg, "dark", themes.dark),
    fontSection(
      "Text font",
      textAaSvg,
      "gctFontSans",
      storageKeys.fontSans,
      fonts.sans,
    ),
    fontSection(
      "Code font",
      codeSvg,
      "gctFontMono",
      storageKeys.fontMono,
      fonts.mono,
    ),
  );
  syncSections();
  accordionToggles[0]?.(true);

  const footer = document.createElement("footer");
  footer.className = "gct-drawer-footer";

  const credit = document.createElement("span");
  credit.textContent = "Made with love by @tzador";

  const repoLink = document.createElement("a");
  repoLink.className = "gct-footer-link";
  repoLink.href = "https://github.com/tzador/github-custom-themes-extension";
  repoLink.target = "_blank";
  repoLink.rel = "noopener noreferrer";
  repoLink.setAttribute("aria-label", "GitHub repository");
  repoLink.innerHTML = githubLogoSvg;

  footer.append(credit, repoLink);

  drawer.append(header, body, footer);

  const setOpen = (open: boolean) => {
    drawer.classList.toggle("gct-open", open);
    if (!open) hidePopover();
  };

  button.addEventListener("click", () => {
    setOpen(!drawer.classList.contains("gct-open"));
  });
  close.addEventListener("click", () => setOpen(false));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  document.body.append(button, drawer);
}

if (document.body) {
  injectUi();
} else {
  document.addEventListener("DOMContentLoaded", injectUi);
}
