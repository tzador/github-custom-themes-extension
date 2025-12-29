// GitHub Custom Themes - Content Script
(function () {
  "use strict";

  // Light themes (left column)
  const LIGHT_THEMES = [
    { id: "snowwhite", name: "Snow White", icon: "❄️" },
    { id: "sepia", name: "Sepia", icon: "📜" },
    { id: "solarized", name: "Solarized", icon: "☀️" },
    { id: "gruvbox-light", name: "Gruvbox", icon: "🌻" },
    { id: "ayu-light", name: "Ayu", icon: "🌤" },
    { id: "nord-light", name: "Nord", icon: "🏔" },
    { id: "catppuccin-latte", name: "Catppuccin", icon: "☕" },
    { id: "highcontrast-light", name: "High Contrast", icon: "◐" },
  ];

  // Dark themes (right column)
  const DARK_THEMES = [
    { id: "solarized-dark", name: "Solarized", icon: "🌅" },
    { id: "gruvbox-dark", name: "Gruvbox", icon: "🍂" },
    { id: "nord", name: "Nord", icon: "❄️" },
    { id: "dracula", name: "Dracula", icon: "🧛" },
    { id: "monokai", name: "Monokai", icon: "🎨" },
    { id: "tokyonight", name: "Tokyo Night", icon: "🗼" },
    { id: "catppuccin", name: "Catppuccin", icon: "🐱" },
    { id: "highcontrast", name: "High Contrast", icon: "◑" },
  ];

  const ALL_THEMES = [...LIGHT_THEMES, ...DARK_THEMES];

  let currentTheme = null;
  let savedTheme = null;
  let menuOpen = false;
  let previewTheme = null;

  // Apply theme to DOM
  function applyThemeToDOM(themeId) {
    if (themeId === null) {
      document.documentElement.removeAttribute("data-custom-theme");
    } else {
      document.documentElement.setAttribute("data-custom-theme", themeId);
    }
  }

  // Apply and save theme
  function applyTheme(themeId) {
    currentTheme = themeId;
    savedTheme = themeId;
    applyThemeToDOM(themeId);
    updateToggleButton();
    updateMenuSelection();
  }

  // Preview theme (temporary, not saved)
  function previewThemeTemp(themeId) {
    previewTheme = themeId;
    applyThemeToDOM(themeId);
  }

  // End preview, revert to saved theme
  function endPreview() {
    if (previewTheme !== null || savedTheme !== null) {
      applyThemeToDOM(savedTheme);
      previewTheme = null;
    }
  }

  // Ensure theme is applied (called on navigation)
  function ensureTheme() {
    if (savedTheme !== null) {
      const currentAttr = document.documentElement.getAttribute("data-custom-theme");
      if (currentAttr !== savedTheme) {
        applyThemeToDOM(savedTheme);
      }
    }
  }

  // Load saved theme
  function loadTheme() {
    chrome.storage.sync.get(["githubCustomTheme"], (result) => {
      const theme = result.githubCustomTheme !== undefined ? result.githubCustomTheme : null;
      savedTheme = theme;
      currentTheme = theme;
      applyTheme(theme);
    });
  }

  // Save theme to storage
  function saveTheme(themeId) {
    chrome.storage.sync.set({ githubCustomTheme: themeId });
  }

  // Select a theme (save and close menu)
  function selectTheme(themeId) {
    previewTheme = null;
    applyTheme(themeId);
    saveTheme(themeId);
    closeMenu();
  }

  // Reset to default theme
  function resetToDefault() {
    selectTheme(null);
  }

  // Default theme (not in columns, used for reset)
  const DEFAULT_THEME = { id: null, name: "Default", icon: "○" };

  // Get theme data by ID
  function getThemeById(themeId) {
    if (themeId === null) return DEFAULT_THEME;
    return ALL_THEMES.find((t) => t.id === themeId) || DEFAULT_THEME;
  }

  // Get current theme data
  function getCurrentTheme() {
    return getThemeById(currentTheme);
  }

  // Update toggle button
  function updateToggleButton() {
    const button = document.getElementById("github-theme-toggle");
    if (button) {
      const theme = getCurrentTheme();
      const icon = button.querySelector(".theme-icon");
      if (icon) {
        icon.textContent = theme.icon;
      }
      button.setAttribute("title", theme.name);
    }
  }

  // Toggle menu visibility
  function toggleMenu() {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Open menu
  function openMenu() {
    const menu = document.getElementById("github-theme-menu");
    if (menu) {
      menu.classList.add("show");
      menuOpen = true;
      updateMenuSelection();
    }
  }

  // Close menu
  function closeMenu() {
    const menu = document.getElementById("github-theme-menu");
    if (menu) {
      menu.classList.remove("show");
      menuOpen = false;
      endPreview();
    }
  }

  // Update menu selection indicator
  function updateMenuSelection() {
    const menu = document.getElementById("github-theme-menu");
    if (!menu) return;

    menu.querySelectorAll(".theme-menu-item").forEach((item) => {
      const themeId = item.dataset.theme === "null" ? null : item.dataset.theme;
      if (themeId === currentTheme) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
    });
  }

  // Create theme button
  function createThemeButton(theme, isLight) {
    const item = document.createElement("button");
    item.className = "theme-menu-item" + (isLight ? " light-item" : " dark-item");
    item.dataset.theme = theme.id === null ? "null" : theme.id;
    item.innerHTML = `
      <span class="theme-menu-icon">${theme.icon}</span>
      <span class="theme-menu-name">${theme.name}</span>
      <span class="theme-menu-check">✓</span>
    `;

    // Preview on hover
    item.addEventListener("mouseenter", () => {
      previewThemeTemp(theme.id);
    });

    item.addEventListener("mouseleave", () => {
      endPreview();
    });

    // Select on click
    item.addEventListener("click", () => {
      selectTheme(theme.id);
    });

    return item;
  }

  // Create UI elements
  function createUI() {
    // Check if already created
    if (document.getElementById("github-theme-toggle")) return;

    // Toggle button
    const button = document.createElement("button");
    button.id = "github-theme-toggle";
    button.setAttribute("aria-label", "Select GitHub theme");
    button.innerHTML = `<span class="theme-icon">○</span>`;
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMenu();
    });
    document.body.appendChild(button);

    // Menu
    const menu = document.createElement("div");
    menu.id = "github-theme-menu";

    // Menu header
    const header = document.createElement("div");
    header.className = "theme-menu-header";
    header.innerHTML = `
      <button class="theme-reset-btn" id="theme-reset" title="Reset to Default">Reset to Default</button>
    `;
    menu.appendChild(header);

    // Theme columns container
    const columnsContainer = document.createElement("div");
    columnsContainer.className = "theme-columns";

    // Light column
    const lightColumn = document.createElement("div");
    lightColumn.className = "theme-column light-column";
    const lightHeader = document.createElement("div");
    lightHeader.className = "theme-col-label";
    lightHeader.textContent = "Light";
    lightColumn.appendChild(lightHeader);
    LIGHT_THEMES.forEach((theme) => {
      lightColumn.appendChild(createThemeButton(theme, true));
    });

    // Dark column
    const darkColumn = document.createElement("div");
    darkColumn.className = "theme-column dark-column";
    const darkHeader = document.createElement("div");
    darkHeader.className = "theme-col-label";
    darkHeader.textContent = "Dark";
    darkColumn.appendChild(darkHeader);
    DARK_THEMES.forEach((theme) => {
      darkColumn.appendChild(createThemeButton(theme, false));
    });

    columnsContainer.appendChild(lightColumn);
    columnsContainer.appendChild(darkColumn);
    menu.appendChild(columnsContainer);
    document.body.appendChild(menu);

    // Reset button event
    document.getElementById("theme-reset").addEventListener("click", (e) => {
      e.stopPropagation();
      resetToDefault();
    });

    // Reset button hover preview
    document.getElementById("theme-reset").addEventListener("mouseenter", () => {
      previewThemeTemp(null);
    });
    document.getElementById("theme-reset").addEventListener("mouseleave", () => {
      endPreview();
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (menuOpen && !e.target.closest("#github-theme-menu") && !e.target.closest("#github-theme-toggle")) {
        closeMenu();
      }
    });

    // Close menu on escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menuOpen) {
        closeMenu();
      }
    });

    // Update button with current theme
    updateToggleButton();
  }

  // Listen for storage changes from other tabs
  function setupStorageListener() {
    chrome.storage.onChanged.addListener((changes, areaName) => {
      if (areaName === "sync") {
        if (changes.githubCustomTheme) {
          const newTheme = changes.githubCustomTheme.newValue !== undefined 
            ? changes.githubCustomTheme.newValue 
            : null;
          
          // Only apply if not currently previewing and different from current
          if (previewTheme === null && newTheme !== savedTheme) {
            savedTheme = newTheme;
            currentTheme = newTheme;
            applyThemeToDOM(newTheme);
            updateToggleButton();
            updateMenuSelection();
          }
        }
      }
    });
  }

  // Watch for GitHub's SPA navigation and attribute changes
  function setupNavigationWatcher() {
    document.addEventListener("turbo:load", ensureTheme);
    document.addEventListener("turbo:render", ensureTheme);
    document.addEventListener("pjax:end", ensureTheme);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "attributes") {
          if (mutation.attributeName === "data-custom-theme" && savedTheme !== null && previewTheme === null) {
            const currentAttr = document.documentElement.getAttribute("data-custom-theme");
            if (currentAttr !== savedTheme) {
              setTimeout(() => applyThemeToDOM(savedTheme), 0);
            }
          }
          if (mutation.attributeName === "data-color-mode" ||
            mutation.attributeName === "data-light-theme" ||
            mutation.attributeName === "data-dark-theme") {
            setTimeout(ensureTheme, 10);
          }
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-custom-theme", "data-color-mode", "data-light-theme", "data-dark-theme"]
    });

    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = function (...args) {
      originalPushState.apply(this, args);
      setTimeout(ensureTheme, 50);
    };

    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args);
      setTimeout(ensureTheme, 50);
    };

    window.addEventListener("popstate", () => {
      setTimeout(ensureTheme, 50);
    });
  }

  // Initialize
  function init() {
    // Set up storage listener immediately (works before DOM)
    setupStorageListener();

    if (document.body) {
      loadTheme();
      createUI();
      setupNavigationWatcher();
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        loadTheme();
        createUI();
        setupNavigationWatcher();
      });
    }
  }

  // Apply theme immediately to prevent flash
  chrome.storage.sync.get(["githubCustomTheme"], (result) => {
    if (result.githubCustomTheme) {
      savedTheme = result.githubCustomTheme;
      document.documentElement.setAttribute("data-custom-theme", result.githubCustomTheme);
    }
  });

  init();
})();
