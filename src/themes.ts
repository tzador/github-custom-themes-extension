export interface Theme {
  /** Display name */
  name: string;
  /** Matches html[data-gct-theme="<slug>"] in src/themes/<slug>.css */
  slug: string;
}

export const themes: { light: Theme[]; dark: Theme[] } = {
  light: [
    { name: "Catppuccin Latte", slug: "catppuccin-latte" },
    { name: "Solarized Light", slug: "solarized-light" },
    { name: "Gruvbox Light", slug: "gruvbox-light" },
    { name: "Everforest Light", slug: "everforest-light" },
    { name: "One Light", slug: "one-light" },
    { name: "Ayu Light", slug: "ayu-light" },
    { name: "Rosé Pine Dawn", slug: "rose-pine-dawn" },
    { name: "Night Owl Light", slug: "night-owl-light" },
    { name: "Kanagawa Lotus", slug: "kanagawa-lotus" },
    { name: "Sepia", slug: "sepia" },
  ],
  dark: [
    { name: "Dracula", slug: "dracula" },
    { name: "Catppuccin Mocha", slug: "catppuccin-mocha" },
    { name: "Catppuccin Macchiato", slug: "catppuccin-macchiato" },
    { name: "Catppuccin Frappé", slug: "catppuccin-frappe" },
    { name: "Nord", slug: "nord" },
    { name: "Gruvbox Dark", slug: "gruvbox-dark" },
    { name: "Tokyo Night", slug: "tokyo-night" },
    { name: "Tokyo Night Storm", slug: "tokyo-night-storm" },
    { name: "Monokai", slug: "monokai" },
    { name: "Solarized Dark", slug: "solarized-dark" },
    { name: "One Dark", slug: "one-dark" },
    { name: "Rosé Pine", slug: "rose-pine" },
    { name: "Rosé Pine Moon", slug: "rose-pine-moon" },
    { name: "Everforest Dark", slug: "everforest-dark" },
    { name: "Kanagawa", slug: "kanagawa" },
    { name: "Night Owl", slug: "night-owl" },
    { name: "Palenight", slug: "palenight" },
    { name: "Ayu Dark", slug: "ayu-dark" },
    { name: "Ayu Mirage", slug: "ayu-mirage" },
    { name: "Synthwave '84", slug: "synthwave-84" },
  ],
};
