# SAGN LLC — Design System

> A design system for **SAGN LLC**, a Miami-Dade based, woman-owned small business and government contractor. Used to generate well-branded interfaces, capability statements, proposals, slide decks, and marketing assets that match the SAGN brand.

---

## Company context

SAGN LLC is a newly-established government contractor founded by **Joanne Seepersad**, headquartered in Homestead, FL. The company provides supply-chain and facility-services solutions to federal, state, and local government agencies across Florida and the Southeast U.S.

**Service lines**
- Janitorial & cleaning supplies (NAICS 423850) — *supply fulfillment only, no cleaning services performed*
- Landscaping & grounds maintenance (NAICS 561730) — *via licensed subcontractor partners*
- Industrial & facility supplies (NAICS 423840) — *TAA / Berry Amendment compliant*
- Office supplies & commodities (NAICS 424120)
- Vendor sourcing & RFQ response (cross-cutting)

**Designations**
- Small Business
- Woman-Owned Small Business *(SBA WOSB certification in progress)*
- Military Spouse-Owned Business
- Florida Registered Vendor

**Key identifiers**
- CAGE: `125K5` · UEI: `KMFNA8MUCQ69` · DUNS: `145316313`
- Phone: (954) 494-3137 · Email: sagn.llc.1@gmail.com
- Registered: SAM.gov, DLA DIBBS, OpenGov, MyFloridaMarketPlace, Miami-Dade Vendor Registry, Broward County School District

**Audience.** Contracting officers, prime contractors looking for small-business teaming partners, and government procurement staff. The website acts as a **digital capability statement** — it must read as credible, organized, and procurement-ready.

---

## Source materials

The visual language in this system was extracted from:

| Source | Path | Notes |
|---|---|---|
| Primary website (2026 redesign) | `github.com/SAGNLLC1/-sagnllc-website-2026/index.html` | Single-page site. CSS variables and component patterns lifted directly from `<style>` block. |
| Earlier website | `github.com/SAGNLLC1/sagnllc-website` | Source of imported logo files (`sagn_logo_clean.png`, `sagn_logo_original.jpg`, `SAGN-Logo.jpg`, `favicon.svg`). |
| Capability Statement PDF | `SAGN_LLC_Capability_Statement.pdf` (in 2026 repo) | Not yet imported — text content overlaps the website. |

There is **one product surface**: the marketing / capability website. No app, no docs site. UI kit reflects this single surface.

---

## Index — what's in this folder

| File / folder | What it is |
|---|---|
| `README.md` | You are here. |
| `SKILL.md` | Skill manifest — makes this folder usable as an Anthropic Agent Skill. |
| `colors_and_type.css` | Design tokens (colors, typography, shadow, radius, spacing) as CSS custom properties. Copy/import into any artifact. |
| `assets/` | Logo files (full-color, clean, original photo-mockup) and favicon. |
| `preview/` | Static HTML cards rendered into the Design System tab. One concept per card. |
| `ui_kits/website/` | Pixel-faithful recreation of the SAGN marketing site as reusable JSX components. `index.html` is a clickable demo. |

There are **no slide templates** yet — none were attached. Add the deck source if you want a `slides/` set generated.

---

## CONTENT FUNDAMENTALS

The voice across the website and capability statement is **professional, plain-spoken, and procurement-aware**. It is written for contracting officers — readers who scan for compliance signals, not marketing prose.

### Voice & tone
- **Confident, never cute.** No exclamation points, no metaphors, no insider winks. The hero says "Built to Serve. Ready to Deliver." — declarative, two clipped sentences. Not "We're excited to help you grow!"
- **Direct accountability framing.** Phrases like *"owner-managed,"* *"no layers between you and the work,"* *"accountability is never delegated"* show up repeatedly. The brand wants to read as small-but-serious.
- **Honest about being new.** The site doesn't oversell. It says *"As a new entrant in the government contracting space, we bring fresh energy, competitive pricing…"* and *"We are actively pursuing opportunities as both a prime contractor and subcontractor."* Don't manufacture history that isn't there.
- **Neutral / "we" voice.** First-person plural is the default ("we specialize," "we welcome teaming arrangements"). Second-person ("you") is used sparingly, mostly in CTAs.

### Casing & punctuation
- **Title Case** for section titles and CTAs: "Built to Serve. Ready to Deliver.", "Why Partner with SAGN LLC", "Download Capability Statement".
- **UPPERCASE eyebrows** with letter-spacing for section labels: `ABOUT US`, `CORE COMPETENCIES`, `OUR ADVANTAGE`. Always one phrase, never a sentence.
- **Sentence case** for body copy.
- **Em dashes (`—`)** are used freely as compound-sentence joiners (the index.html uses them ~15 times). They feel like the brand's signature punctuation.
- **Ampersands** (`&`) are used in titles and category names ("General Services & Solutions", "Industrial & Facility Supplies"). Spell out *and* in body copy.
- Numbers in body copy are spelled out under ten; figures used for codes, dollar amounts, NAICS codes, distances ("within 30 miles"), and compliance numbers.

### Vocabulary
- **Procurement vocabulary is explicit**, not softened: *RFQ, PO, prime, subcontractor, teaming arrangement, mentor-protégé, NAICS, CAGE, UEI, DUNS, SAM.gov, DLA DIBBS, MyFloridaMarketPlace, TAA, Berry Amendment, WOSB.*
- **Capability statement** is the reference document, not "brochure" or "deck."
- **"Reliable," "dependable," "accountable," "competitive pricing," "vetted supplier network"** are repeat power words. Use them.
- Avoid: *"solutions" as filler, "leverage" as a verb, "synergy," "best-in-class," "world-class."*

### Emoji & symbols
- **No emoji.** Anywhere. The aesthetic is government-formal.
- The 2026 site does use a handful of **HTML entity glyphs** (`&#10003;` checkmark, `&#9734;` star, `&#9670;` diamond, `&#9742;` phone) inside small badge circles. These are placeholders for an icon system; treat them as low-fi until real SVG icons arrive. The UI kit substitutes Lucide icons (see ICONOGRAPHY).

### Sample copy (lift verbatim if useful)
- Hero badge: `WOMAN-OWNED SMALL BUSINESS`
- Hero title: `SAGN LLC`
- Hero subtitle: `General Services & Solutions`
- Primary CTA: `Download Capability Statement`
- Secondary CTA: `Get in Touch`
- Closing line: `Ready to discuss your requirements? We respond to all inquiries within one business day.`

---

## VISUAL FOUNDATIONS

### Mood
A **federal-blue, capability-statement aesthetic** — closer to a Beltway contractor's site than to a Florida small business. The brand wants to look like it could quote a million-dollar PO without blinking. Crisp, conservative, very lightly decorative.

### Color
- **Primary: Navy `#0F2B4C`** — used for dark sections, headlines, CTAs (filled), and the nav bar (with 0.97 alpha + 12px backdrop-blur).
- **Accent: Blue `#2E6DA8`** — the eyebrow / link / focus color. `#3D8FD4` (`--blue-light`) shows up only as the hero subtitle and as a secondary accent.
- **One non-blue accent: Gold `#C8902E`** — used sparingly. Reserved for: the hero badge bullet, the primary CTA fill, the 01/02/03 numerals on the dark "Why SAGN" section, and `border-left: 3px solid` on past-performance items. **Gold should never dominate a screen.** Single touchpoint per view.
- **Neutrals are cool.** `--cream #FAFCFE` is the page background — visibly cool, not warm. `--sky #E8F1F8` is the soft section fill. There is **no warm-grey, no off-white, no beige.**
- **Text** runs through four cool greys: `#1C2A3A → #4A5E73 → #6B7F94`, all with a blue undertone.

### Typography
- **Display: Playfair Display (700)** — serif, used for `h1` and section titles only. Adds gravitas; pairs with the federal-blue palette.
- **Body: DM Sans (400/500/600/700)** — geometric sans for everything else. Numerics are also set in DM Sans (the source CSS aliases `--font-mono` to it).
- **No third typeface.** Don't introduce a mono font, a script font, or a condensed display.
- **Eyebrows are uppercase, 0.75rem, letter-spacing `0.1em`, weight 700** — the ONLY uppercase treatment in the system. Section labels (`section-label`) use `--blue`; on dark sections they switch to `--accent-gold`.
- **Line-height 1.65–1.75 on body copy.** Generous, not tight.

### Backgrounds
- **Hero is the only true gradient** — a 165° linear gradient `navy → navy-mid → blue` overlaid with two soft radial gradients (one bluish at 70%/40%, one gold-tinted at 20%/80%). Subtle, not flashy.
- **Sections alternate three fills**: cream (default), sky (`#E8F1F8`), and navy (`section-dark`). That's the entire rhythm — no images-as-backgrounds, no patterns, no textures, no parallax photo strips.
- **No hand-drawn illustrations, no SVG decorations, no repeating textures.** Imagery is logos and (potentially) photographic facility shots — none in the codebase yet.
- **Imagery vibe (when added):** clean, well-lit, cool-toned, slight blue cast. Avoid warm-golden-hour. Avoid stock-photo handshakes.

### Animation
- **One easing curve** across the system: `cubic-bezier(0.22, 1, 0.36, 1)` (variable `--ease-out`). It's a soft decel — fast start, gentle settle.
- **Two animation patterns**, both restrained:
  1. **`fadeUp`** (24px translate + opacity) — fires once on scroll-into-view via IntersectionObserver. Used on every section card. Hero elements stagger by 0.1s each (badge → h1 → sub → desc → btns → visual).
  2. **Hover lift** — service cards translate `-3px` and gain `--shadow-lg`. Buttons translate `-1px`.
- **Durations**: `0.2s` micro (color/border), `0.25s` hover, `0.6–0.8s` entrance.
- **No spring physics, no bounce, no continuous motion, no Lottie.** This brand is still and steady.

### States
- **Hover (light surface):** card lifts `-3px`, shadow deepens. Text links go `--text-light → --navy → --blue`. Buttons translate up 1px.
- **Hover (dark surface):** translucent cards go from `rgba(255,255,255,0.06)` to `rgba(255,255,255,0.10)` background. Outline buttons gain `border-color: rgba(255,255,255,0.6)` and a `0.05` white wash.
- **Press:** no documented active state in source — keep press subtle (e.g. shrink 1% or remove the hover translate).
- **Focus:** form inputs swap border to `--blue` and background `cream → white`. **Always keep a visible focus ring** for keyboard users.
- **Disabled:** not defined in source. Recommend: `opacity: 0.5; cursor: not-allowed; pointer-events: none.`

### Borders, shadow, radius
- **Border colors are always the system blues** — `--border #D4DFE9` (light) or `rgba(255,255,255,0.06–0.08)` (on dark). Never a true grey.
- **Shadow system is one tonal family — navy at low alpha:**
  - `--shadow-sm: 0 1px 3px rgba(15,43,76,0.06)`
  - `--shadow-md: 0 4px 16px rgba(15,43,76,0.08)`
  - `--shadow-lg: 0 8px 32px rgba(15,43,76,0.12)`
  - `--shadow-cta: 0 2px 12px rgba(200,144,46,0.30)` (gold, only for the primary gold CTA)
- **No inner shadows.** No neumorphism.
- **Corner radii**: `8px` is the default. `14px` for "feature" cards (services, contact). `100px` (pill) for badges and tags. **Sharp corners (`0`) are not used** — even buttons are rounded.

### Cards (the system's workhorse)
A SAGN card is: white fill, `1px solid var(--border)` border, `--radius-lg` (14px) corners, no shadow at rest, `--shadow-lg` on hover, with an optional `::before` 3px top-bar gradient (`--blue → --accent-gold`) that fades in on hover. That hover bar is the most distinctive flourish in the system — use it on **interactive** cards (services, links), not on static info cards.

### Layout
- **`max-width: 1140px` containers** with `padding: 0 24px`. This single content width is enforced everywhere.
- **Sections are `padding: 80px 24px`** (down to `56px 20px` on small screens).
- **Grids**: 3-column on services, 2-column on differentiators / hero, mobile collapses everything to single column at `900px` breakpoint.
- **Fixed nav**: `position: fixed`, 64px tall, navy with 12px backdrop-blur. **Scroll padding-top must compensate** if you add anchor links.

### Transparency & blur
- **Used sparingly, only on the dark navy:**
  - Nav: `rgba(15,43,76,0.97)` + `backdrop-filter: blur(12px)`
  - Cards on dark: `rgba(255,255,255,0.06)` background, `rgba(255,255,255,0.08)` border
  - On-dark text: `rgba(255,255,255,0.4–0.75)`
- **Never use blur on light surfaces.** Never use frosted-glass over photography.

---

## ICONOGRAPHY

The codebase has **no icon system shipped**. The 2026 site uses raw HTML entity glyphs (`&#128466;` 🗑, `&#127793;` 🌱, `&#9881;` ⚙, `&#128196;` 📄, `&#128200;` 📈, etc.) inside 44×44px rounded sky-blue tiles, and a handful of badge glyphs (`&#10003;` ✓, `&#9734;` ★, `&#9742;` ☎). These render as system emoji on most browsers, which clashes with the otherwise restrained palette.

**Substitution we made for this design system:** We're substituting **[Lucide](https://lucide.dev/)** as the recommended icon set — same stroke weight, monoline, fits the conservative federal aesthetic, and CDN-available. Used at 1.5–2px stroke, 20–24px box, in `--blue` on `--sky` tiles.

> **⚠ Flagged substitution — please confirm:** the codebase has no committed icon font, sprite, or SVG set; we're picking Lucide as a stand-in. If SAGN already uses a different icon library, send the source and we'll swap.

### Rules
- **Stroke style**, not filled. 1.5–2px stroke, rounded line-cap and line-join.
- **Square monoline.** No two-tone, no duotone, no isometric.
- **Color**: `--blue` on the sky tile (decorative use); `--text-secondary` inline next to text; `--accent-gold` only for the rare highlight (e.g. an active state).
- **Tile**: 44×44 on services, 40×40 on contact rows, 36×36 on about badges. Always `--radius` rounded, `--sky` fill.
- **Never**: emoji in the rendered UI. Never unicode dingbats. Never multi-color icons.
- **The wing-S logo** (`assets/sagn_logo_clean.png`) is the only piece of decorative imagery the brand has. Treat it like a seal — don't crop it, don't recolor it, don't tile it.

### Available logo files (in `assets/`)
| File | Use |
|---|---|
| `sagn_logo_clean.png` | **Default.** Transparent background, includes wordmark "SAGN LLC". Use on any background. |
| `sagn_logo_original.jpg` | Photographed-on-paper mockup version. Use only if the design needs that texture. |
| `SAGN-Logo.jpg` | Wide grey-background hero treatment. Reference / archive. |
| `favicon.svg` | 32×32 favicon — note this is a generic placeholder (does not resemble the wing-S logo). Replace if a real favicon is provided. |

---

## How to use this system

1. Drop `colors_and_type.css` into your artifact and `@import` it (or paste its `:root` block in).
2. Pull a logo from `assets/`.
3. Lift component patterns from `ui_kits/website/` rather than re-deriving them.
4. Keep the rules: cool palette, gold used once per view, Playfair only on titles, em-dashes welcome, no emoji.
