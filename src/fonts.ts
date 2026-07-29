export interface Font {
  /** Display name, matches the @font-face font-family in fonts.css */
  name: string;
  /** Folder name under public/fonts/ */
  slug: string;
}

export const fonts: { sans: Font[]; mono: Font[] } = {
  sans: [
    { name: "Mona Sans", slug: "mona-sans" },
    { name: "Hubot Sans", slug: "hubot-sans" },
    { name: "Inter", slug: "inter" },
    { name: "Source Sans 3", slug: "source-sans-3" },
    { name: "IBM Plex Sans", slug: "ibm-plex-sans" },
    { name: "Nunito Sans", slug: "nunito-sans" },
    { name: "Work Sans", slug: "work-sans" },
    { name: "Public Sans", slug: "public-sans" },
    { name: "Figtree", slug: "figtree" },
    { name: "DM Sans", slug: "dm-sans" },
    { name: "Manrope", slug: "manrope" },
    { name: "Rubik", slug: "rubik" },
  ],
  mono: [
    { name: "JetBrains Mono", slug: "jetbrains-mono" },
    { name: "Fira Code", slug: "fira-code" },
    { name: "Cascadia Code", slug: "cascadia-code" },
    { name: "Source Code Pro", slug: "source-code-pro" },
    { name: "IBM Plex Mono", slug: "ibm-plex-mono" },
    { name: "Geist Mono", slug: "geist-mono" },
    { name: "Commit Mono", slug: "commit-mono" },
    { name: "Monaspace Neon", slug: "monaspace-neon" },
    { name: "Hack", slug: "hack" },
    { name: "Victor Mono", slug: "victor-mono" },
    { name: "Red Hat Mono", slug: "red-hat-mono" },
    { name: "Space Mono", slug: "space-mono" },
    { name: "Martian Mono", slug: "martian-mono" },
    { name: "Intel One Mono", slug: "intel-one-mono" },
  ],
};
