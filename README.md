# GitHub Custom Themes

A browser extension that restyles GitHub and GitHub Gist with 85 editor-inspired
color themes and 55 bundled open-source fonts.

Choose independent fonts for the interface and code, switch between light and
dark themes, and restore GitHub's default appearance at any time. Preferences
are applied instantly and saved locally in the browser.

## Features

- 85 light and dark themes inspired by popular editors and color palettes
- 26 sans-serif fonts for GitHub's interface
- 29 monospace fonts for source code
- Independent text and code font selection
- Support for `github.com` and `gist.github.com`
- Persistent settings using browser extension storage
- No accounts, analytics, remote fonts, or remote executable code

## Usage

Click the palette button in the bottom-right corner of a GitHub page to open
the settings drawer. Select a text font, code font, and color theme. Choosing
**Default** restores GitHub's native styling for that setting.

## Install for development

Requirements:

- [Bun](https://bun.sh/)
- A Chromium-based browser such as Chrome or Edge

Install dependencies and build the extension:

```sh
bun install
bun run build
```

Then load the generated extension:

1. Open `chrome://extensions` or `edge://extensions`.
2. Enable **Developer mode**.
3. Select **Load unpacked**.
4. Choose `dist/github-custom-themes-extension`.

Reload an existing GitHub tab after rebuilding or changing the extension.

## Package for publishing

Run:

```sh
bun pack
```

This builds the extension and creates the store-ready archive:

```text
dist/github-custom-themes-extension.zip
```

The ZIP contains `manifest.json` at its root and can be uploaded to Chromium
extension marketplaces.

## How it works

- `public/manifest.json` defines the Manifest V3 extension, permissions, content
  scripts, and supported GitHub origins.
- `src/main.ts` injects the settings interface and stores the selected options.
- `src/style.css` applies the selected interface and code fonts to GitHub.
- `src/theme.css` maps each theme's palette onto GitHub Primer design tokens.
- `src/themes/*.css` contains the individual theme palettes registered in
  `src/themes.ts`.
- `src/fonts.css` declares locally bundled fonts registered in `src/fonts.ts`.
- `vite.config.ts` builds the extension and synchronizes the manifest version
  with `package.json`.
- `scripts/pack.sh` creates the marketplace ZIP.

## Permissions and privacy

The extension requests only:

- `storage` to save theme and font preferences locally
- Access to `https://github.com/*` and `https://gist.github.com/*` to apply the
  selected appearance

The extension does not collect or transmit personal data. All themes, fonts,
scripts, and styles are included in the extension package.

## License

The extension source code is available under the [MIT License](LICENSE).
Bundled fonts remain subject to the license included in each directory under
`public/fonts`.

GitHub is a trademark of GitHub, Inc. This project is not affiliated with or
endorsed by GitHub.
