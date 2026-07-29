# GitHub Custom Themes

Chrome extension that restyles github.com with 64 color themes ported from
popular code editor themes (Dracula, Catppuccin, Gruvbox, Tokyo Night, Rosé
Pine, VS Code Dark+, …) and 26 bundled open-source fonts.

## Usage

Click the palette button in the bottom-right corner of any GitHub page to open
the settings drawer. Pick a sans (UI) font, a mono (code) font, and a light or
dark theme. Choices apply instantly and persist across visits; "Default"
restores GitHub's native look.

## Development

```sh
bun install
bun run build   # outputs the extension to dist/
```

Load `dist/` as an unpacked extension via `chrome://extensions` (enable
Developer mode).

## How it works

- `src/main.ts` — content script: injects the drawer UI and sets
  `data-gct-font-sans`, `data-gct-font-mono`, and `data-gct-theme` attributes
  on `<html>`.
- `src/theme.css` — the theme engine. Each theme defines ~20 `--gct-*` palette
  tokens; the engine translates them into GitHub's Primer CSS variables,
  deriving muted/hover/label variants with `color-mix(in oklab, …)`. See
  `old/TOKENS.md` for the research behind the token system.
- `src/themes/*.css` — one token file per theme, listed in `src/themes.ts`.
- `src/fonts.css` — `@font-face` rules for the fonts in `public/fonts/`,
  loaded from the extension package (GitHub's CSP blocks remote fonts). Listed
  in `src/fonts.ts`.

All bundled fonts are under open licenses (mostly SIL OFL 1.1); each folder in
`public/fonts/` carries its license file.
