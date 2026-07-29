export interface Font {
  /** Display name, matches the @font-face font-family in fonts.css */
  name: string;
  /** Folder name under public/fonts/ */
  slug: string;
  /** Detailed explanation of the font's design and history */
  about: string;
}

export const fonts: { sans: Font[]; mono: Font[] } = {
  sans: [
    {
      name: "Mona Sans",
      slug: "mona-sans",
      about:
        "GitHub's own brand typeface, made with Degarism. A strong, versatile neo-grotesque with variable weight and width axes, designed to carry everything from marketing headlines to dense UI. Using it here keeps GitHub feeling like GitHub — just sharper than the system-font default.",
    },
    {
      name: "Hubot Sans",
      slug: "hubot-sans",
      about:
        "Mona Sans' robotic counterpart, also commissioned by GitHub. It shares Mona's proportions but squares off curves into more mechanical, techy forms — the personality font GitHub uses for expressive moments. Pick it when you want the interface to feel slightly more sci-fi than corporate.",
    },
    {
      name: "Inter",
      slug: "inter",
      about:
        "Rasmus Andersson's screen-first workhorse and probably the most used open-source UI font in the world. A tall x-height, open apertures and careful spacing were tuned specifically for small text on displays. The safe, professional choice — Figma, Mozilla and half of modern SaaS run on it.",
    },
    {
      name: "Source Sans 3",
      slug: "source-sans-3",
      about:
        "Adobe's first-ever open-source typeface, designed by Paul D. Hunt for user interfaces. A humanist sans in the American gothic tradition — friendlier than a grotesque, clearer than geometric fonts at small sizes. Version 3 refined spacing and added a full variable axis.",
    },
    {
      name: "IBM Plex Sans",
      slug: "ibm-plex-sans",
      about:
        "IBM's corporate typeface by Mike Abbink and Bold Monday, built to replace Helvetica after decades of use. Its 'engineered naturalness' mixes grotesque rationality with humanist detail, echoing the IBM logo's machined stripes. Crisp, slightly technical, and excellent at data-dense screens.",
    },
    {
      name: "Nunito Sans",
      slug: "nunito-sans",
      about:
        "The straight-terminal sibling of the rounded Nunito, begun by Vernon Adams. A well-balanced humanist sans with a soft, approachable rhythm that reads more friendly than corporate. A good pick if GitHub's default feels too stern.",
    },
    {
      name: "Work Sans",
      slug: "work-sans",
      about:
        "Wei Huang's open-source grotesque optimized for on-screen text at medium sizes, loosely based on early Grotesques like Stephenson Blake's. Slightly quirky terminals keep it from feeling sterile. A dependable text sans with just enough character to notice.",
    },
    {
      name: "Public Sans",
      slug: "public-sans",
      about:
        "The typeface of the United States government, developed for the U.S. Web Design System from Libre Franklin. Deliberately neutral, seriously tested for legibility and accessibility across sizes. Bureaucratic in the best sense: plain, sturdy and consistent.",
    },
    {
      name: "Figtree",
      slug: "figtree",
      about:
        "Erik Kennedy's friendly geometric sans, designed by a UI-design educator specifically for interfaces. It aims at the sweet spot between geometric cleanliness and readable warmth — rounder than Inter, tidier than Nunito. Modern product-design comfort food.",
    },
    {
      name: "DM Sans",
      slug: "dm-sans",
      about:
        "A low-contrast geometric sans by Colophon Foundry, originally commissioned by Google (the 'DM' comes from DeepMind). Version 2 added optical sizing and a huge weight range. Circular, composed and quietly fashionable — the font of countless startup landing pages.",
    },
    {
      name: "Manrope",
      slug: "manrope",
      about:
        "Mikhail Sharanda's open-source grotesque that went viral in the design community. Semi-condensed with open apertures and distinctive angled cuts, it feels modern without being trendy. Works especially well for numbers and dashboards.",
    },
    {
      name: "Rubik",
      slug: "rubik",
      about:
        "A sans with gently rounded corners by Hubert & Fischer, born from the Chrome Cube Lab project (yes, named after the Rubik's Cube). The soft corners take the edge off dense screens while the slightly condensed proportions stay space-efficient. Playful but disciplined.",
    },
    {
      name: "Geist",
      slug: "geist",
      about:
        "Vercel's brand typeface, designed with Basement Studio in the Swiss tradition. Precise, minimal and unapologetically modernist — the visual voice of Next.js documentation and the 'design engineer' aesthetic. Makes GitHub feel like a Vercel product.",
    },
    {
      name: "Space Grotesk",
      slug: "space-grotesk",
      about:
        "Florian Karsten's proportional derivative of Space Mono, keeping the monospace original's retro-futuristic quirks — the crossed R leg, the flat-topped a — in a usable text sans. Distinctive at headlines, surprisingly readable in UI. For people who want personality.",
    },
    {
      name: "Plus Jakarta Sans",
      slug: "plus-jakarta-sans",
      about:
        "Designed by Tokotype for the 'Plus Jakarta' city-branding program of Indonesia's capital. A geometric sans with humanist touches and distinctive angled terminals, it became a global favorite for product UI. Clean, contemporary, a little more stylish than the usual suspects.",
    },
    {
      name: "Outfit",
      slug: "outfit",
      about:
        "Rodrigo Fuenzalida's pure geometric sans, commissioned by the brand-automation company Outfit.io. Near-perfect circles and clean joins give it a confident, poster-like quality that still holds up in interface text. Choose it for a rounder, more branded look.",
    },
    {
      name: "Lexend",
      slug: "lexend",
      about:
        "Born from educational therapist Bonnie Shaver-Troup's research into reading proficiency, drawn by Thomas Jockin. Wide spacing and simplified shapes are designed to reduce visual crowding — studies showed measurable reading-speed gains for struggling readers. Comfort-first typography.",
    },
    {
      name: "Instrument Sans",
      slug: "instrument-sans",
      about:
        "The open-source typeface of digital design studio Instrument, a neo-grotesque with subtle width variation and crisp, contemporary detailing. It sits stylistically between Inter's neutrality and Helvetica's classicism. Studio-grade polish for everyday UI.",
    },
    {
      name: "Hanken Grotesk",
      slug: "hanken-grotesk",
      about:
        "Hanken Design Co.'s open grotesque, drawing on classic faces like Akzidenz-Grotesk but re-proportioned for screens with a generous x-height. It reads warmer than most grotesques thanks to gently curved joins. A quietly excellent body-text sans that stays out of the way.",
    },
    {
      name: "Albert Sans",
      slug: "albert-sans",
      about:
        "A geometric sans by Danish type designer Jonas Hecksher, drawing on the Scandinavian modernist lettering tradition of the early 20th century. Clean circular forms with unusually refined details for a free font. Brings a cool Nordic-design composure to the interface.",
    },
    {
      name: "Sora",
      slug: "sora",
      about:
        "Designed by Jonathan Barnbrook (of Bowie album-cover fame) for the Sora decentralized-economy project. Slightly squared, technical letterforms give it a precise, future-facing tone that suits developer tools well. Distinctive without tipping into novelty.",
    },
    {
      name: "Urbanist",
      slug: "urbanist",
      about:
        "Corey Hu's low-contrast geometric sans built from elementary shapes, inspired by Bauhaus-era modernism. Nine weights of clean, airy minimalism with open counters that keep small text legible. A crisp, fashionable choice for a lighter-feeling GitHub.",
    },
    {
      name: "Onest",
      slug: "onest",
      about:
        "A rounded-square hybrid that blends geometric structure with humanist warmth, designed for long-form reading on screens. Its name means 'honest' — the design goal was text that feels plain-spoken and comfortable over hours. Softer than Inter, more serious than Nunito.",
    },
    {
      name: "Schibsted Grotesk",
      slug: "schibsted-grotesk",
      about:
        "The corporate typeface of Scandinavian media group Schibsted, opened to the public. An editorial grotesque tuned for news products: sturdy weights, pragmatic spacing and a no-nonsense Northern European tone. Gives the UI a newspaper-grade seriousness.",
    },
    {
      name: "Atkinson Hyperlegible Next",
      slug: "atkinson-hyperlegible-next",
      about:
        "Commissioned by the Braille Institute and named for its founder, designed to maximize legibility for low-vision readers. Every letterform is exaggeratedly distinct — mirrored letters are deliberately asymmetric so b/d and p/q can't be confused. 'Next' expands the original into a full variable family.",
    },
    {
      name: "Bricolage Grotesque",
      slug: "bricolage-grotesque",
      about:
        "Mathieu Triay's exuberant open-source grotesque, inspired by British vernacular signage and faces like Bureau Grot. With optical sizes from text to poster, it's chunky and characterful at headings while staying legible in running text. The boldest personality in this list.",
    },
  ],
  mono: [
    {
      name: "JetBrains Mono",
      slug: "jetbrains-mono",
      about:
        "The default typeface of every JetBrains IDE, designed by Philipp Nurullin. Increased letter height, open forms and nearly 140 code ligatures reduce eye strain over long sessions. Arguably the modern standard for programming type — balanced, tall and highly readable.",
    },
    {
      name: "Fira Code",
      slug: "fira-code",
      about:
        "Nikita Prokopov's extension of Mozilla's Fira Mono, the font that made programming ligatures mainstream. Sequences like != and => merge into single readable glyphs, treating code as notation rather than plain text. Beloved, opinionated and still the reference point for ligature fonts.",
    },
    {
      name: "Cascadia Code",
      slug: "cascadia-code",
      about:
        "Microsoft's open-source terminal font, shipped with Windows Terminal and VS Code. Aaron Bell's design pairs a slightly playful, rounded construction with ligatures and a famously swashy cursive italic. Modern Microsoft at its most likable.",
    },
    {
      name: "Source Code Pro",
      slug: "source-code-pro",
      about:
        "Paul D. Hunt's monospaced companion to Source Sans, one of Adobe's first open-source releases. Conservative, evenly colored and extremely dependable — designed to disambiguate 0/O and 1/l/I without stylistic noise. A classic that never distracts.",
    },
    {
      name: "IBM Plex Mono",
      slug: "ibm-plex-mono",
      about:
        "The monospaced member of IBM's Plex superfamily, with details echoing the IBM Selectric typewriter era. Its italic is famously elegant for a mono. Carries the same engineered-but-human voice as Plex Sans, ideal if you use both together.",
    },
    {
      name: "Geist Mono",
      slug: "geist-mono",
      about:
        "Vercel's monospace counterpart to Geist, cut in the same Swiss-modernist spirit. Clean, geometric and deliberately restrained — no ligature theatrics, just precise forms. The font of modern deployment logs and minimalist terminal setups.",
    },
    {
      name: "Commit Mono",
      slug: "commit-mono",
      about:
        "Eigil Nikolajsen's 'anonymous' programming font: intentionally neutral so your attention goes to the code, with 'smart kerning' that subtly evens out spacing mono fonts usually can't fix. Proof that a monospace can be invisible and meticulously crafted at once.",
    },
    {
      name: "Monaspace Neon",
      slug: "monaspace-neon",
      about:
        "From GitHub Next's Monaspace superfamily — five metrics-compatible voices sharing one system. Neon is the clean neo-grotesque cut, featuring 'texture healing': variable-width alternates that relieve the cramped 'm' and wasteful 'i' problem of fixed-width type. The most technically inventive mono of recent years.",
    },
    {
      name: "Hack",
      slug: "hack",
      about:
        "A workhorse terminal font descended from Bitstream Vera and DejaVu, refined by Source Foundry with hand-hinting for small sizes. No ligatures, no fashion — just decades of pragmatic evolution aimed at 8-14px terminal text. Old-school reliability.",
    },
    {
      name: "Victor Mono",
      slug: "victor-mono",
      about:
        "Rune Bjørnerås' free mono famous for its semi-connected cursive italic — comments in Victor Mono look almost handwritten. Add thin weights and ligatures and you get one of the most stylistically daring programming fonts. Polarizing, in the best way.",
    },
    {
      name: "Red Hat Mono",
      slug: "red-hat-mono",
      about:
        "Drawn by MCKL for Red Hat's open-source brand system, matching Red Hat Display and Text. A friendly, slightly wide mono with humanist touches that reads well in documentation and code alike. Corporate type done with genuine craft.",
    },
    {
      name: "Space Mono",
      slug: "space-mono",
      about:
        "Colophon Foundry's retro-futuristic fixed-width design for Google Fonts, riffing on 1960s headline monos and sci-fi typography. The crossed R, squared punctuation and quirky details make it as much a display face as a code font. Choose it for vibe, not for eight-hour refactors.",
    },
    {
      name: "Martian Mono",
      slug: "martian-mono",
      about:
        "Evil Martians' free mono, a fixed-width re-engineering of their grotesque Martian Grotesk. Unusually, it's a variable font on both weight and width axes, so it stays sturdy from narrow terminals to wide editors. Compact, contemporary and very legible.",
    },
    {
      name: "Intel One Mono",
      slug: "intel-one-mono",
      about:
        "Commissioned by Intel from Frere-Jones Type, designed with input from low-vision and legally blind developers. Expressive, clearly differentiated glyphs aim to cut coding errors and fatigue — an accessibility-first mono from one of the world's great type studios.",
    },
    {
      name: "Roboto Mono",
      slug: "roboto-mono",
      about:
        "The monospaced member of Android's Roboto family by Christian Robertson. Inherits Roboto's pragmatic, slightly condensed skeleton, making it denser than most monos while staying clean. The default-feeling choice for anyone at home in Google's ecosystem.",
    },
    {
      name: "Google Sans Code",
      slug: "google-sans-code",
      about:
        "Google's developer-facing mono, released openly in 2025 as part of the Google Sans family used across Gemini and developer products. Balanced proportions and careful spacing tuned for AI-era code reading. The freshest take on 'big tech default mono'.",
    },
    {
      name: "Ubuntu Sans Mono",
      slug: "ubuntu-sans-mono",
      about:
        "The terminal face of the Ubuntu font family, originally by Dalton Maag, now a variable font. Its distinctive humanist curves — unusual for a mono — give Linux terminals their recognizable warmth. Carries two decades of Ubuntu identity.",
    },
    {
      name: "Sometype Mono",
      slug: "sometype-mono",
      about:
        "Dharma Type's free mono designed for code and tabular work. Narrow but airy, with crisp details that keep dense data grids readable. A tasteful, lesser-known alternative when the usual suspects feel overused.",
    },
    {
      name: "DM Mono",
      slug: "dm-mono",
      about:
        "Colophon Foundry's monospaced take on DM Sans, sharing its low-contrast geometric DNA. Ships in light, regular and medium — deliberately no true bold, favoring subtle hierarchy. Stylish and understated; the designer's choice for minimal code displays.",
    },
    {
      name: "Iosevka",
      slug: "iosevka",
      about:
        "Renzhi Li's legendary slender mono, built from a parametric system that can generate hundreds of variants. The default cut is unusually narrow, fitting dramatically more code per line while staying crisp. A decade-old open-source labor of love with a devoted following.",
    },
    {
      name: "Maple Mono",
      slug: "maple-mono",
      about:
        "A rounded open-source mono with smooth curves, cursive italics and extensive ligatures, actively developed by subframe7536. Its friendly, almost soft rendering makes terminals feel less severe without losing precision. A rising community favorite, especially in the Neovim world.",
    },
    {
      name: "Fragment Mono",
      slug: "fragment-mono",
      about:
        "Wei Huang's monospaced reinterpretation of 1950s Swiss neo-grotesques — essentially 'Helvetica for code'. Single regular and italic styles, no ligatures, maximum modernist restraint. For people who want their terminal to look like a design museum.",
    },
    {
      name: "Reddit Mono",
      slug: "reddit-mono",
      about:
        "The monospace member of Reddit Sans, the type system Stephen Hutchings drew for Reddit's 2023 rebrand. Rounded, open forms keep it approachable rather than technical. A surprisingly solid, humanist-flavored mono hiding inside a social network's brand kit.",
    },
    {
      name: "Chivo Mono",
      slug: "chivo-mono",
      about:
        "The fixed-width extension of Chivo, Omnibus-Type's Argentine grotesque family. Strong, slightly industrial letterforms across a full 100-900 weight range make it flexible for both code and display use. Latin American type design at its most confident.",
    },
    {
      name: "Spline Sans Mono",
      slug: "spline-sans-mono",
      about:
        "The code companion to Spline Sans by Eben Sorkin and Mirko Velimirović, both drawn compact on purpose for space-starved UIs. Grotesque bones with economical widths mean more code per line without feeling squeezed. Practical and quietly handsome.",
    },
    {
      name: "Kode Mono",
      slug: "kode-mono",
      about:
        "A mono designed from scratch for the developer community, with deliberately techy, squared details and clear glyph differentiation. Its name is its mission statement — this is a font that wants to look like code. Distinctive at large sizes, functional at small ones.",
    },
    {
      name: "Azeret Mono",
      slug: "azeret-mono",
      about:
        "Displaay Type Foundry's mono with an unusually large x-height and tight, display-ready spacing. It blurs the line between code font and brutalist display face — striking in headings, dense and modern in editors. For maximalists who still need a working mono.",
    },
    {
      name: "Anonymous Pro",
      slug: "anonymous-pro",
      about:
        "Mark Simonson's 2009 classic, descended from the 1990s bitmap font Anonymous 9 for the Mac. Designed explicitly for coders, with fixed-width discipline and carefully disambiguated characters long before that was fashionable. A piece of programming-font history that still holds up.",
    },
  ],
};
