export interface Theme {
  /** Display name */
  name: string;
  /** Matches html[data-gct-theme="<slug>"] in src/themes/<slug>.css */
  slug: string;
  /** Detailed explanation of the theme's style and philosophy */
  about: string;
}

export const themes: { light: Theme[]; dark: Theme[] } = {
  light: [
    {
      name: "Catppuccin Latte",
      slug: "catppuccin-latte",
      about:
        "The light flavor of the community-driven Catppuccin pastel family. A cool, milky grey-white base (#eff1f5) carries a soft lavender-tinted ink (#4c4f69) and a vivid but friendly blue accent (#1e66f5), surrounded by a full rainbow of low-saturation pastels. The philosophy is warmth without noise: every color is tuned to the same perceived lightness so syntax feels playful and cozy rather than shouty.",
    },
    {
      name: "Solarized Light",
      slug: "solarized-light",
      about:
        "Ethan Schoonover's famously engineered palette. The parchment-like base (#fdf6e3) and desaturated blue-grey text (#586e75) were chosen through CIELAB math so that all sixteen colors keep fixed lightness and symmetric contrast — the same accent hues (blue #268bd2, red, green, cyan) work identically in the dark variant. The philosophy is precision over decoration: reduced brightness contrast to ease eye strain during long sessions, with hue doing the differentiating work.",
    },
    {
      name: "Gruvbox Light",
      slug: "gruvbox-light",
      about:
        "The light half of Pavel Pertsev's retro-groove palette. A warm cream base (#fbf1c7) with dark umber text (#3c3836) and earthy, slightly 'dirty' accents — the teal link color (#076678) alongside rust reds, olive greens and mustard yellows. The philosophy is deliberately analog: colors mimic faded print and vintage terminals, favoring warm temperature and medium contrast so nothing feels clinical or fluorescent.",
    },
    {
      name: "Everforest Light",
      slug: "everforest-light",
      about:
        "A green-based nature palette on a warm paper background (#fdf6e3) with soft grey-green text (#5c6a72) and a calm sky-blue accent (#3a94c5). Everforest's philosophy is comfort through desaturation: every hue is pulled toward the forest — sage greens, moss yellows, clay reds — and contrast is intentionally gentle to protect the eyes during all-day use while staying legible.",
    },
    {
      name: "One Light",
      slug: "one-light",
      about:
        "The light counterpart of Atom's One Dark. A neutral near-white base (#fafafa), balanced charcoal text (#383a42), and a confident royal-blue accent (#4078f2) with purple, green and rust syntax hues. The philosophy is pragmatic neutrality: a clean, editor-grade palette with no temperature bias, where each syntax color is distinct enough to scan but muted enough to disappear when you're reading prose.",
    },
    {
      name: "Ayu Light",
      slug: "ayu-light",
      about:
        "The bright variant of the Ayu family. A simple near-white canvas (#fafafa), soft grey ink (#5c6166), and a signature cheerful azure accent (#399ee6) supported by Ayu's trademark orange and amber highlights. The philosophy is 'simple and bright': minimum visual furniture, slightly lowered text contrast for comfort, and a few warm pops of color that keep the interface feeling sunny rather than sterile.",
    },
    {
      name: "Rosé Pine Dawn",
      slug: "rose-pine-dawn",
      about:
        "The daylight variant of Rosé Pine, 'all natural pine, faux fur and a bit of soho vibes'. A warm rosy parchment base (#faf4ed), muted violet-grey text (#575279), and a deep pine-teal accent (#286983) with rose, gold and iris pastels. The philosophy is soft minimalism with a romantic streak — low-contrast, warm-tinted surfaces that feel like morning light rather than an office fluorescent.",
    },
    {
      name: "Night Owl Light",
      slug: "night-owl-light",
      about:
        "Sarah Drasner's daytime companion to Night Owl. A clean near-white base (#fbfbfb) with dark slate-purple text (#403f53) and a clear ocean-blue accent (#288ed7). Like its dark sibling, the palette was designed with accessibility first: colors were checked for contrast and colorblind-friendliness, so distinctions rely on luminance and carefully separated hues rather than saturation alone.",
    },
    {
      name: "Kanagawa Lotus",
      slug: "kanagawa-lotus",
      about:
        "The light 'Lotus' variant of the Kanagawa theme, inspired by Hokusai's famous wave. An unusual warm lotus-paper base (#f2ecbc) — closer to aged washi paper than white — with ink-grey text (#545464) and a subdued indigo accent (#4d699b). The philosophy is traditional Japanese ink painting brought to code: muted, dusty pigments, warm paper tones, and nothing that glares.",
    },
    {
      name: "Vitesse Light",
      slug: "vitesse-light",
      about:
        "Anthony Fu's minimalist theme on a pure white canvas (#ffffff) with soft warm-grey text (#393a34) and a distinctive deep viridian-green accent (#1e754f). The philosophy is restraint: Vitesse uses fewer, quieter colors than most themes, leaning on a green-anchored palette with desaturated supporting hues so code reads like well-typeset text with just enough color to guide the eye.",
    },
    {
      name: "Flexoki Light",
      slug: "flexoki-light",
      about:
        "Steph Ango's ink-on-paper palette, built on the Material of Ink. The base is a warm 'paper' white (#fffcf0) with true-black ink (#100f0f) and a printerly navy accent (#205ea6). Flexoki's philosophy is inky physicality: accent colors are calibrated in the perceptual OKLab space to feel like real pigments soaking into paper — saturated but never neon, with consistent perceived lightness across all eight hues.",
    },
    {
      name: "Tomorrow",
      slug: "tomorrow",
      about:
        "Chris Kempson's classic base16 ancestor. Pure white background (#ffffff), pragmatic grey ink (#4d4d4c), and a restrained steel-blue accent (#4271ae) with the canonical eight-color syntax set. The philosophy — 'a bright theme with pastel colors' — was to modernize the aging default editor themes of its era: precise, minimal, and so neutral that decades of themes have been derived from it.",
    },
    {
      name: "PaperColor Light",
      slug: "papercolor-light",
      about:
        "Inspired by Google's Material Design print aesthetics. A flat light-grey paper base (#eeeeee), plain dark-grey text (#444444), and a deep material blue accent (#005f87). The philosophy is flat-design clarity: solid, unmixed color blocks with strong functional contrast — colors behave like ink swatches on paper stock rather than glowing pixels, which keeps the UI crisp and businesslike.",
    },
    {
      name: "Iceberg Light",
      slug: "iceberg-light",
      about:
        "The daytime version of the Japanese-made Iceberg theme. A cool bluish-grey base (#e8e9ec), dark blue-slate text (#33374c), and a solid cobalt accent (#2d539e). The philosophy is 'well-designed, bluish color scheme' taken literally: every neutral in the palette is tinted toward blue, producing a calm, wintry uniformity where nothing warm interrupts the cold gradient.",
    },
    {
      name: "Nord Light",
      slug: "nord-light",
      about:
        "Nord's Snow Storm palette pushed to the foreground. An arctic ice-white base (#eceff4), polar-night charcoal text (#2e3440), and the dignified frost-blue accent (#5e81ac). Nord's philosophy is north-bluish calm: a dimmed, uniform pastel palette inspired by arctic landscapes, where all colors share the same low saturation so the interface feels quiet, cold and orderly.",
    },
    {
      name: "Light+ (VS Code)",
      slug: "light-plus",
      about:
        "The stock Visual Studio Code light theme. Pure white (#ffffff), near-black text (#1f1f1f), and Microsoft's product blue accent (#005fb8). Its philosophy is invisible defaultness: maximum familiarity and WCAG-minded contrast with zero stylistic opinion — the theme millions of developers see first, tuned so nothing distracts from the code itself.",
    },
    {
      name: "Quiet Light",
      slug: "quiet-light",
      about:
        "A long-standing VS Code favorite that lives up to its name. A soft dove-grey base (#f5f5f5), gentle dark-grey text (#333333), and a muted indigo accent (#4b69c6) with lavender and moss-green syntax tones. The philosophy is understatement: keep saturation low and contrast comfortable so long writing and reading sessions feel like working on matte paper.",
    },
    {
      name: "Selenized Light",
      slug: "selenized-light",
      about:
        "Jan Warchoł's scientific refinement of Solarized. A warm ivory base (#fbf3db), blue-grey text (#53676d), and a clearer, brighter blue accent (#0072d4). Selenized's philosophy fixes Solarized's known flaws — it raises accent-color contrast and rebalances hues in perceptual color space so colors stay easy on the eyes but no longer wash out, especially for reds and blues.",
    },
    {
      name: "Gruvbox Material Light",
      slug: "gruvbox-material-light",
      about:
        "A softer remix of Gruvbox Light. The same warm cream base (#fbf1c7) but with a browner, gentler ink (#654735) and a desaturated teal accent (#45707a). The 'Material' philosophy sands off Gruvbox's harder edges: palette contrast is deliberately reduced and hues are nudged toward Material Design smoothness, trading retro punch for all-day comfort.",
    },
    {
      name: "Tokyo Night Day",
      slug: "tokyo-night-day",
      about:
        "Tokyo Night stepped into daylight. A cool periwinkle-grey base (#e1e2e7), deep indigo text (#343b58), and an electric city-blue accent (#2e7de9). The philosophy carries over from the dark variant: a palette inspired by Tokyo's neon-lit streets, but here rendered as the city at noon — blues stay dominant and slightly urban-cold, with magenta and teal accents kept crisp rather than pastel.",
    },
    {
      name: "Sepia",
      slug: "sepia",
      about:
        "A reading-first theme modeled on old paper and e-reader sepia modes. A warm tan base (#f4ecd8), brown ink (#5b4636), and a burnt sienna accent (#a0522d). The philosophy is pure eye comfort: eliminate blue light and harsh whites entirely, keep every hue in the amber-brown family, and make GitHub feel like an aged book rather than a screen.",
    },
    {
      name: "Xcode Light",
      slug: "xcode-light",
      about:
        "Apple's default editor theme, translated from Xcode. A pure white canvas (#ffffff), near-black ink (#262626), and Apple's product blue accent (#0071e3) with the unmistakable Xcode syntax voice: magenta-pink keywords (#ad3da4), red strings (#d12f1b), and indigo numbers (#272ad8). The philosophy is Cupertino restraint — a clean, familiar palette where the few strong hues carry decades of macOS developer muscle memory.",
    },
    {
      name: "Min Light",
      slug: "min-light",
      about:
        "A shiki/web-highlighting staple built on the idea that less syntax color means more focus. A plain white base (#ffffff), sober grey-black text (#24292e), and a matter-of-fact material blue accent (#1976d2). Min's signature move is fading comments to near-invisibility (#b8babd) while giving keywords a single red voice (#d32f2f) — the philosophy is minimal highlighting: color only what changes how you read the code.",
    },
    {
      name: "Snazzy Light",
      slug: "snazzy-light",
      about:
        "The daylight companion to the Hyper-terminal Snazzy theme. A cool off-white base (#fafbfc), soft slate-violet text (#565869), and a bright cerulean accent (#09a1ed) with the family's signature candy palette — teal, magenta and green — recalibrated dark enough for white backgrounds. The philosophy is cheerfulness without glare: terminal-bright personality tamed into a crisp, friendly light theme.",
    },
    {
      name: "Alabaster",
      slug: "alabaster",
      about:
        "Nikita Prokopov's contrarian classic. Pure white (#ffffff), plain black-ish text (#222222), and a steady cobalt accent (#325cc0) — but the real philosophy is what it refuses to color: keywords stay plain, while comments turn loud red (#aa3731) and only strings (green), constants (purple) and definitions (blue) get hues. The argument: keywords are noise, comments and literals are signal.",
    },
    {
      name: "Duotone Light",
      slug: "duotone-light",
      about:
        "Simurai's two-hue system that became a Prism.js classic. A warm eggshell base (#faf8f5), soft warm-grey text (#45403b), and everything painted from just two pigment families — periwinkle blue (#728fcb) for structure and burnt gold (#b75501) for literals. The philosophy is duotone printing applied to code: hue tells you the category, intensity tells you the importance, and nothing else competes.",
    },
    {
      name: "Bluloco Light",
      slug: "bluloco-light",
      about:
        "Umut Topuzoğlu's meticulously tuned light theme. A neutral porcelain base (#f9f9f9), balanced charcoal text (#383a42), and a double-blue signature — royal blue links (#275fe4) over azure keywords (#0098dd) — with jewel-toned red, green and violet accents. The philosophy is designer precision: every hue hand-balanced for equal visual weight so dense code feels organized rather than rainbow-noisy.",
    },
    {
      name: "Dayfox",
      slug: "dayfox",
      about:
        "The daylight member of EdenEast's Nightfox family. A warm linen base (#f6f2ee), espresso-brown ink (#352c24), and a grounded royal-blue accent (#2848a9) with muted brick, moss and violet support. The philosophy carries the fox family's trademark: consistent contrast and colorblind-aware hue spacing, here wrapped in a warm, paper-like light mode that avoids the clinical white of most day themes.",
    },
    {
      name: "Modus Operandi",
      slug: "modus-operandi",
      about:
        "GNU Emacs' accessibility flagship by Protesilaos Stavrou. Pure white (#ffffff), true black text (#000000), and a deep ultramarine accent (#0031a9) with dark, serious accent hues. The philosophy is radical and measurable: every foreground/background pairing conforms to WCAG AAA (7:1 contrast minimum) — legibility as a hard requirement, with aesthetics emerging from the discipline rather than preceding it.",
    },
    {
      name: "Tailwind Daylight",
      slug: "tailwind-daylight",
      about:
        "Built directly from the Tailwind CSS default palette — the color system behind half the modern web. White and slate-50/100 surfaces, slate-800 ink (#1e293b), an indigo-600 accent (#4f46e5), and the 600-level row of rose, amber, emerald, cyan, violet and pink. The philosophy is utility-class pragmatism: a scientifically stepped scale, tuned by the Tailwind team for real UI work, applied wholesale to GitHub.",
    },
    {
      name: "Open Color Light",
      slug: "open-color-light",
      about:
        "Built from Open Color, the open-source palette designed for UI optimized in terms of hue rotation and lightness stepping. Pure white over gray-0/1 surfaces (#f8f9fa), gray-9 ink (#212529), a blue-7 accent (#1c7ed6), and level-7/8 accents across red, orange, teal and violet. The philosophy is systematic harmony: every hue family is corrected to feel equally vivid at the same step, so labels and syntax read as one coherent set.",
    },
  ],
  dark: [
    {
      name: "Dracula",
      slug: "dracula",
      about:
        "One of the most popular dark themes ever made. A muted blue-grey charcoal base (#282a36), off-white text (#f8f8f2), and a signature soft purple accent (#bd93f9) flanked by vivid pink, green, cyan and yellow. The philosophy is playful vampiric contrast: a dark but never black background that lets candy-bright accents pop hard, making syntax instantly scannable and giving the UI a distinct, fun personality.",
    },
    {
      name: "Catppuccin Mocha",
      slug: "catppuccin-mocha",
      about:
        "The darkest and most iconic Catppuccin flavor. A deep espresso-indigo base (#1e1e2e), lavender-white text (#cdd6f4), and a soft periwinkle-blue accent (#89b4fa) with the full pastel rainbow. The philosophy is 'soothing pastel': high enough contrast to read, but every accent is a rounded, dessert-like pastel with matched lightness — dark mode that feels cozy rather than brooding.",
    },
    {
      name: "Catppuccin Macchiato",
      slug: "catppuccin-macchiato",
      about:
        "The medium-dark Catppuccin flavor, sitting between Mocha and Frappé. A slightly lifted navy-grey base (#24273a), the same lavender-tinted text (#cad3f5), and a milky blue accent (#8aadf4). The philosophy is gradual tonality: Macchiato exists so users can pick their exact darkness level while the pastel accent system stays identical — softness and consistency over drama.",
    },
    {
      name: "Catppuccin Frappé",
      slug: "catppuccin-frappe",
      about:
        "The lightest of Catppuccin's dark flavors. A washed slate-blue base (#303446), pale periwinkle text (#c6d0f5), and a gentle cornflower accent (#8caaee). The philosophy is low-contrast dark mode: for people who find true-dark themes harsh, Frappé lifts the background toward grey-blue so the pastel accents sit close to the base, creating the softest, haziest reading experience in the family.",
    },
    {
      name: "Nord",
      slug: "nord",
      about:
        "The arctic classic. A polar-night slate base (#2e3440), snow-white text (#e5e9f0), and the signature frost-cyan accent (#88c0d0) with a tight set of dimmed blues and aurora accent colors. Nord's philosophy is disciplined uniformity: all sixteen colors share carefully matched low saturation inspired by arctic ice and aurora skies, producing a calm, cold, almost monochrome-blue environment where color never shouts.",
    },
    {
      name: "Gruvbox Dark",
      slug: "gruvbox-dark",
      about:
        "The retro-groove standard-bearer. A warm brown-black base (#282828), cream text (#ebdbb2), and a dusty blue-teal accent (#83a598) with earthy red, olive, mustard and orange syntax colors. The philosophy is deliberately warm and analog: Gruvbox rejects cold blue-blacks in favor of tones that recall amber CRTs and worn print, with 'badass' contrast that keeps code punchy without fluorescence.",
    },
    {
      name: "Tokyo Night",
      slug: "tokyo-night",
      about:
        "Inspired by the neon glow of downtown Tokyo after dark. A deep blue-black base (#1a1b26), periwinkle text (#c0caf5), and an electric blue accent (#7aa2f7) with magenta, cyan and green neon highlights. The philosophy is cinematic urban night: cool, blue-saturated darkness as the city backdrop, with syntax colors playing the role of storefront neon — vivid, but diffused through haze.",
    },
    {
      name: "Tokyo Night Storm",
      slug: "tokyo-night-storm",
      about:
        "Tokyo Night's lighter 'storm' variant. The same neon-city palette — periwinkle text (#c0caf5), electric blue accent (#7aa2f7) — over a lifted slate-blue base (#24283b). The philosophy is the same nocturnal cityscape but under cloud cover: raising the background luminance reduces the contrast gap, making it the choice for people who love Tokyo Night's hues but want a gentler, less inky canvas.",
    },
    {
      name: "Monokai",
      slug: "monokai",
      about:
        "Wimer Hazenberg's 2006 classic that TextMate and Sublime Text made legendary. A warm olive-black base (#272822), off-white text (#f8f8f2), and cyan accent (#66d9ef) alongside the unmistakable trio of hot pink, lime green and warm yellow. The philosophy is maximal syntax vibrancy: a slightly warm dark canvas built to make a small set of highly saturated, carefully clashing colors instantly distinguishable at a glance.",
    },
    {
      name: "Solarized Dark",
      slug: "solarized-dark",
      about:
        "The dark half of Schoonover's precision-engineered palette. A deep teal-navy base (#002b36) — famously blue-green rather than black — with grey text (#93a1a1) and the same blue accent (#268bd2) shared with the light variant. The philosophy is selective contrast: CIELAB-tuned tones deliberately compress brightness range to reduce eye strain, letting the fixed sixteen-color accent set carry all the meaning.",
    },
    {
      name: "One Dark",
      slug: "one-dark",
      about:
        "Atom's iconic default that outlived the editor itself. A balanced graphite-blue base (#282c34), soft grey-blue text (#abb2bf), and a clear sky-blue accent (#61afef) with coral, violet, green and amber syntax hues. The philosophy is engineered neutrality: medium contrast, no extreme hues, and evenly weighted syntax colors — a theme designed to be unobjectionable for eight hours a day, which is exactly why it became a default everywhere.",
    },
    {
      name: "Rosé Pine",
      slug: "rose-pine",
      about:
        "'All natural pine, faux fur and a bit of soho vibes.' A deep plum-black base (#191724), pale lavender text (#e0def4), and a soft iris accent (#c4a7e7) with muted rose, gold and pine tones. The philosophy is elegant melancholy: a romantic, floral take on dark mode where saturation stays low and hues stay dusty, aiming for cozy sophistication instead of hacker-terminal edge.",
    },
    {
      name: "Rosé Pine Moon",
      slug: "rose-pine-moon",
      about:
        "The middle sibling of the Rosé Pine family. The same dusty iris accent (#c4a7e7) and lavender text (#e0def4), but over a lifted violet-navy base (#232136). The philosophy is moonlit softness: Moon keeps Main's romantic, muted palette while raising the background enough to soften contrast — for those who find the darkest variant too heavy but Dawn too bright.",
    },
    {
      name: "Everforest Dark",
      slug: "everforest-dark",
      about:
        "A comfortable green forest at dusk. A grey-green charcoal base (#2d353b), warm sand-beige text (#d3c6aa), and a sage-green accent (#a7c080) with earthy reds, aquas and yellows. Everforest's philosophy is protection of eyesight through nature: every color is desaturated toward woodland tones and contrast is intentionally soft, built for developers who stare at screens all day and want calm over drama.",
    },
    {
      name: "Kanagawa",
      slug: "kanagawa",
      about:
        "Named for Hokusai's 'The Great Wave off Kanagawa'. An ink-black base with a hint of violet (#1f1f28), old-paper beige text (#dcd7ba), and a wave-crest blue accent (#7e9cd8). The philosophy is traditional Japanese painting rendered as a colorscheme: dusty, pigment-like colors (carp yellow, wave aqua, sakura pink) that look mixed on a palette rather than picked from a color wheel — muted, warm, and painterly.",
    },
    {
      name: "Night Owl",
      slug: "night-owl",
      about:
        "Sarah Drasner's theme designed literally for working at night. A deep ocean-navy base (#011627), pale ice-blue text (#d6deeb), and a luminous cornflower accent (#82aaff). The philosophy is accessibility in darkness: colors were selected for sufficient contrast and colorblind distinguishability in low-light rooms, with a rich navy (never grey) background that keeps late-night sessions feeling immersive rather than washed out.",
    },
    {
      name: "Palenight",
      slug: "palenight",
      about:
        "The purple-tinted branch of the Material theme family. A violet-slate base (#292d3e), pale periwinkle text (#bfc7d5), and a bright material blue accent (#82aaff) with mauve, cyan and amber highlights. The philosophy is Material Design given a soft nocturnal mood: elevated, slightly purple surfaces and rounded pastel-bright accents that feel gentle and modern rather than stark.",
    },
    {
      name: "Ayu Dark",
      slug: "ayu-dark",
      about:
        "The darkest Ayu variant. A near-black navy base (#0b0e14), warm grey text (#bfbdb6), and Ayu's unmistakable amber-gold accent (#e6b450) with orange and aqua support. The philosophy is 'simple and bright' inverted: a very dark, minimal canvas where the warm gold accent provides a single strong focal color — high contrast with almost no visual clutter.",
    },
    {
      name: "Ayu Mirage",
      slug: "ayu-mirage",
      about:
        "Ayu's mid-dark variant. A soft slate-blue base (#242936), warm parchment text (#cccac2), and a mellow honey-yellow accent (#ffcc66). The philosophy is the comfortable middle path: Mirage lifts Ayu Dark's background and mutes its contrast so the trademark warm accents float on a hazy blue-grey canvas — less severe than Dark, moodier than Light.",
    },
    {
      name: "Material Ocean",
      slug: "material-ocean",
      about:
        "The deepest variant of the Material theme family. An abyssal blue-black base (#0f111a), soft blue-grey text (#babed8), and the family's bright cornflower accent (#82aaff). The philosophy is Material Design at the bottom of the sea: extremely dark, blue-saturated surfaces with luminous pastel accents floating above them, maximizing depth and focus for people who like their dark mode truly dark but never neutral grey.",
    },
    {
      name: "Oceanic Next",
      slug: "oceanic-next",
      about:
        "Designed originally around the Oceanic base16 palette. A deep teal-slate base (#1b2b34), pale grey-blue text (#d8dee9), and a steady steel-blue accent (#6699cc). The philosophy is oceanic equilibrium: cool, blue-green neutrals with evenly weighted, slightly muted syntax colors — a balanced, no-drama palette that became a staple of the Sublime/Atom era for feeling professional and easy on the eyes.",
    },
    {
      name: "Moonlight",
      slug: "moonlight",
      about:
        "A dreamy blue-violet nightscape. An indigo base (#222436), moonlit periwinkle text (#c8d3f5), and a glowing blue accent (#82aaff) with pink, teal and lavender neons. The philosophy is soft luminescence: closely related cool hues layered on a purple-navy canvas so the whole interface appears backlit by moonlight — vivid accents, but all drawn from the same nocturnal temperature.",
    },
    {
      name: "Sonokai",
      slug: "sonokai",
      about:
        "A high-contrast Monokai descendant by the Everforest author. A neutral charcoal base (#2c2e34), bright grey-white text (#e2e2e3), and a fresh cyan accent (#76cce0) with punchy pink, orange and green. The philosophy is Monokai modernized: keep the vivid, instantly scannable syntax colors but rebalance them for consistency and eye comfort — energy without the harsh clashes of the original.",
    },
    {
      name: "Vitesse Dark",
      slug: "vitesse-dark",
      about:
        "Anthony Fu's minimalist palette after dark. A soft true-black base (#121212), warm ivory text (#dbd7ca), and the signature muted jade accent (#4d9375). The philosophy is quiet restraint: instead of neon rainbows, Vitesse uses a small set of desaturated, green-anchored colors on a plain dark canvas, so code reads like calm typography with color used sparingly as a guide, not a spectacle.",
    },
    {
      name: "Horizon",
      slug: "horizon",
      about:
        "A warm, sunset-inspired theme. A dusky charcoal-plum base (#1c1e26), soft grey text (#cbced0), and a coral-rose accent (#e95678) with apricot, mint and magenta tones. The philosophy is dusk on the horizon: while most dark themes go cold and blue, Horizon leans warm — pinks and corals dominate, giving the UI the feel of the last minutes of a sunset rather than the dead of night.",
    },
    {
      name: "Andromeda",
      slug: "andromeda",
      about:
        "A dark theme with a cosmic bent. A cool graphite-blue base (#23262e), pale mauve-grey text (#d5ced9), and a striking electric teal accent (#00e8c6) with yellow and purple support. The philosophy is focused vibrancy: keep the canvas and text understated and neutral, then let one luminous, otherworldly cyan do the highlighting — a single bright star against a dim sky.",
    },
    {
      name: "Poimandres",
      slug: "poimandres",
      about:
        "A minimal, mystically named theme built on the pwind palette. A deep blue-grey base (#1b1e28), muted periwinkle text (#a6accd), and a luminous mint-teal accent (#5de4c7). The philosophy is radical reduction: Poimandres intentionally uses very few distinct hues — mostly teals, blues and soft pinks at similar intensity — betting that less syntax color means less noise and deeper focus on structure.",
    },
    {
      name: "Cobalt2",
      slug: "cobalt2",
      about:
        "Wes Bos's high-energy signature theme. A saturated cobalt-blue base (#193549), pure white text (#ffffff), and an unmissable taxi-yellow accent (#ffc600). The philosophy is bold maximal contrast: instead of muted greys, Cobalt2 commits to a rich blue canvas and screaming yellow/orange highlights — a theme built for readability on projectors and streams, and for people who want their editor to have a pulse.",
    },
    {
      name: "Zenburn",
      slug: "zenburn",
      about:
        "The granddaddy of low-contrast dark themes, born in Vim in 2002. A flat grey base (#3f3f3f), pale khaki text (#dcdccc), and a soft cyan accent (#8cd0d3). The philosophy is literally in the name — zen: every color is heavily desaturated and compressed in contrast so nothing stimulates more than necessary. Built 'for long hours in front of the screen' decades before eye-strain themes were a genre.",
    },
    {
      name: "Laserwave",
      slug: "laserwave",
      about:
        "An '80s Miami synth aesthetic without the glow abuse. A muted plum-charcoal base (#27212e), light lilac-white text (#e5e2e9), and a hot magenta accent (#eb64b9) with mint and violet support. The philosophy is retrowave restraint: take the neon-pink-and-purple language of synthwave but desaturate the canvas and limit the glow, so the vibe reads as stylish VHS-era cool rather than eye-searing arcade.",
    },
    {
      name: "Flexoki Dark",
      slug: "flexoki-dark",
      about:
        "The dark half of Steph Ango's ink-and-paper system. A true near-black 'ink' base (#100f0f), warm paper-grey text (#cecdc3), and a steady printerly blue accent (#4385be). The philosophy mirrors the light variant: colors calibrated in perceptual OKLab space to behave like physical pigments — the dark mode is paper inverted to ink, with the same eight balanced hues that saturate naturally instead of glowing.",
    },
    {
      name: "Dark+ (VS Code)",
      slug: "dark-plus",
      about:
        "The default dark theme of Visual Studio Code. A pragmatic neutral charcoal (#1e1e1e), plain light-grey text (#d4d4d4), and Microsoft's link-blue accent (#3794ff). The philosophy is deliberate unobtrusiveness: no tinting, no personality, just carefully tested contrast ratios and a familiar four-color syntax core (blue, teal, orange, green) that millions of developers have internalized as 'what code looks like'.",
    },
    {
      name: "Monokai Pro",
      slug: "monokai-pro",
      about:
        "The official successor to Monokai by its original creator's studio, Monokai Pro was redesigned from scratch. A warm grey-brown base (#2d2a2e), crisp near-white text (#fcfcfa), and a fresh cyan accent (#78dce8) with the famous pink/green/yellow trio recalibrated. The philosophy is 'beautiful functionality': the same iconic energy as 2006 Monokai, but with hues rebalanced for even perceived brightness and a calmer, more professional canvas.",
    },
    {
      name: "Gruvbox Material Dark",
      slug: "gruvbox-material-dark",
      about:
        "Gruvbox with softened edges. The same warm brown-black base (#282828) but with a gentler sand-colored text (#d4be98) and a desaturated teal accent (#7daea3). The philosophy is comfort-first retro: keep Gruvbox's warm, analog identity but reduce palette contrast and smooth the hues Material-style, so long sessions feel easier while the earthy character survives.",
    },
    {
      name: "Nightfox",
      slug: "nightfox",
      about:
        "The flagship of the Nightfox family. A deep blue-slate base (#192330), neutral fog-grey text (#cdcecf), and a composed steel-blue accent (#719cd6). The philosophy is modern balance: Nightfox aims for a middle path between vibrant and muted — colors are chosen for consistent contrast and colorblind-aware distinguishability, giving a polished, contemporary feel without committing to any extreme aesthetic.",
    },
    {
      name: "Iceberg",
      slug: "iceberg",
      about:
        "A dark blue Japanese-made colorscheme built around a single idea: everything is blue. An inky navy base (#161821), frost-grey text tinted blue (#c6c8d1), and a glacial cornflower accent (#84a0c6). The philosophy is monochromatic discipline — even the 'neutral' greys carry blue, and accents are just brighter or warmer points on the same cold spectrum, producing a serene, wintry uniformity.",
    },
    {
      name: "Tomorrow Night",
      slug: "tomorrow-night",
      about:
        "The dark half of Chris Kempson's foundational Tomorrow palette. A neutral near-black base (#1d1f21), soft grey text (#c5c8c6), and a muted powder-blue accent (#81a2be) with the classic restrained eight-color syntax set. The philosophy is timeless neutrality: moderate contrast, zero gimmicks, hues spaced evenly around the wheel — the template from which countless later dark themes descended.",
    },
    {
      name: "Snazzy",
      slug: "snazzy",
      about:
        "Born as a Hyper terminal theme 'with bright colors'. A Dracula-adjacent charcoal base (#282a36), bright off-white text (#eff0eb), and a vivid sky-cyan accent (#57c7ff) with electric green, magenta and yellow. The philosophy is exactly what the name promises: take a comfortable dark canvas and run terminal-ANSI-style colors at full brightness — cheerful, high-energy, and unapologetically colorful.",
    },
    {
      name: "Panda",
      slug: "panda",
      about:
        "A 'superminimal, dark syntax theme'. A flat neutral charcoal base (#292a2b), clean light-grey text (#e6e6e6), and a friendly azure accent (#45a9f9) with candy pink and mint highlights. The philosophy is minimalism with a wink: strip the canvas of any tint or texture, then use a small set of soft candy colors sparingly — the contrast between the plain background and playful accents is the whole aesthetic.",
    },
    {
      name: "Aura",
      slug: "aura",
      about:
        "A modern purple-forward theme. A very dark violet-black base (#15141b), soft white text (#edecee), and a glowing amethyst accent (#a277ff) with teal and pink neons. The philosophy is dark mysticism: commit fully to purple as the identity color, keep the canvas near-black so the violet accents seem to emit light, and aim at developers who want their setup to feel more like an aesthetic statement than a tool.",
    },
    {
      name: "Everblush",
      slug: "everblush",
      about:
        "A dark theme with 'beautiful pastel colors'. A deep green-tinted charcoal base (#141b1e), plain light-grey text (#dadada), and a gentle sky-blue accent (#67b0e8) with soft coral, mint and lavender. The philosophy is muted freshness: pastel accent colors at matched, moderate saturation on a cool dark canvas — vivid enough to differentiate syntax, soft enough to never fatigue, sitting somewhere between Nord's calm and Catppuccin's playfulness.",
    },
    {
      name: "Challenger Deep",
      slug: "challenger-deep",
      about:
        "Named after the deepest point of the ocean. A dark violet-navy base (#1e1c31), pale seafoam text (#cbe3e7), and a luminous ice-blue accent (#91ddff) with bright magenta and cyan. The philosophy is bioluminescence in the abyss: an extremely deep purple-blue canvas over which high-brightness cool accents glow like deep-sea creatures — dramatic contrast between darkness and light as the core aesthetic.",
    },
    {
      name: "Synthwave '84",
      slug: "synthwave-84",
      about:
        "Robb Owen's love letter to 1984 retrofuturism. A deep purple base (#2a2139), soft white text (#f0eff1), and a hot neon-pink accent (#ff7edb) with cyan, orange and yellow neons. The philosophy is full-commitment nostalgia: outrun album covers, VHS sunsets and arcade neon translated to code — saturated pinks and cyans on a synth-purple night sky, deliberately choosing vibe and personality over restraint.",
    },
    {
      name: "Darcula",
      slug: "darcula",
      about:
        "JetBrains' legendary IDE default, the dark theme an entire generation of Java, Kotlin and Python developers grew up in. A flat warm grey base (#2b2b2b), soft steel-blue text (#a9b7c6), and a clear link blue (#589df6) with the canonical IntelliJ voice: orange keywords (#cc7832), olive strings (#6a8759) and butter-yellow functions (#ffc66d). The philosophy is pragmatic muteness — low-saturation colors chosen for eight-hour refactoring sessions, not for screenshots.",
    },
    {
      name: "Oxocarbon",
      slug: "oxocarbon",
      about:
        "A theme built on IBM's Carbon Design System. A near-true-black base (#161616) straight from Carbon's gray-100, crisp white-blue text (#f2f4f8), and a Carbon blue-40 accent (#78a9ff) with sharply modern pink, mint and violet accents. The philosophy is corporate design language subverted: IBM's rigorously engineered color tokens rearranged into something cold, spacious and strikingly futuristic.",
    },
    {
      name: "Houston",
      slug: "houston",
      about:
        "Astro's official editor theme, mascot approved. A deep space-grey base (#17191e), bright starlight text (#eef0f9), and a friendly sky-blue accent (#54b9ff) with mint (#4bf3c8), periwinkle (#acafff) and peach highlights. The philosophy is approachable cosmos: dark-mode astronomy rendered in soft, rounded pastels rather than harsh neon — a theme that wants coding to feel optimistic.",
    },
    {
      name: "Vesper",
      slug: "vesper",
      about:
        "Rauno Freiberg's ultra-minimal dark theme. A true near-black base (#101010), quiet grey-white text, and a single warm peach accent (#ffc799) with mint (#99ffe4) as the only other voice — even keywords stay grey. The philosophy is radical monochrome: strip syntax color down to one warm highlight and one cool one, so structure comes from typography and the rare color moment actually means something.",
    },
    {
      name: "Min Dark",
      slug: "min-dark",
      about:
        "The dark half of the Min pair, a fixture of web code-highlighting via shiki. A flat neutral charcoal (#1f1f1f), understated grey text (#c9c9c9), and GitHub-dark-flavored accents used sparingly: rose keywords (#f97583), slate-blue strings (#9db1c5) and violet functions (#b392f0). The philosophy is minimal highlighting in the dark: most of the screen stays monochrome so the few colored tokens act as landmarks, not decoration.",
    },
    {
      name: "City Lights",
      slug: "city-lights",
      about:
        "A darling of the Atom era with a distinct blue-city-at-night identity. A deep harbor-blue base (#1d252c), fog-grey text (#b7c5d3), and a glowing signal-blue accent (#5ec4ff) with mint, gold and salmon neons. The philosophy is urban nightscape: every neutral is tinted toward cold blue like a city after rain, while the accents glow like distant windows and traffic lights.",
    },
    {
      name: "Duotone Dark",
      slug: "duotone-dark",
      about:
        "Simurai's two-hue experiment that became a Prism.js and Atom classic. A deep aubergine base (#2a2734) where almost everything is a shade of violet (#9a86fd) except literals, which glow in warm honey (#ffcc99, #ffb870). The philosophy is duotone printing for code: reduce the entire palette to one cool and one warm pigment, letting intensity — not hue — express the syntax hierarchy.",
    },
    {
      name: "Shades of Purple",
      slug: "shades-of-purple",
      about:
        "Ahmad Awais' unapologetically bold signature theme. A rich royal-purple base (#2d2b55), lavender-white text, and a screaming gold accent (#fad000) with neon green strings (#a5ff90) and hot orange keywords (#ff9d00). The philosophy is maximal personality: commit to purple as a brand, run the accents at stage-lighting intensity, and make the editor feel like a keynote — built for people who want their tools to be loud.",
    },
    {
      name: "Tailwind Midnight",
      slug: "tailwind-midnight",
      about:
        "Built directly from the Tailwind CSS default palette. Slate-900 surfaces (#0f172a) under slate-200 text, a sky-400 accent (#38bdf8), and the 400-level row of rose, amber, emerald, cyan, violet and pink — the exact colors of a thousand modern dashboards. The philosophy is design-system honesty: Tailwind's perceptually stepped scale already solved dark-mode color balance, so the theme simply applies it verbatim.",
    },
    {
      name: "Oklch Dark",
      slug: "oklch-dark",
      about:
        "A theme authored natively in the OKLCH colorspace rather than hex. All surfaces share one hue (275°) at stepped lightness; all eight accents sit in a single lightness/chroma band (~0.75 L, 0.14 C) with only hue rotating. The philosophy is perceptual uniformity as aesthetics: when every color is mathematically equal in weight, no token shouts over another — harmony is computed, not eyeballed.",
    },
  ],
};
