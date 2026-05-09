---
name: sagn-llc-design
description: Use this skill to generate well-branded interfaces and assets for SAGN LLC, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of `assets/` and create static HTML files for the user to view — start by importing `colors_and_type.css` so colors, fonts, shadows, and radii match the brand. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions about audience and surface (capability-statement page, RFQ landing, proposal one-pager, slide deck, partner microsite, …), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Folder map
- `README.md` — full brand guidelines (voice, color, type, layout, motion, iconography).
- `colors_and_type.css` — the design tokens, ready to `@import`.
- `assets/` — logos and favicon. Use `sagn_logo_clean.png` by default.
- `preview/` — static HTML reference cards for every token group.
- `ui_kits/website/` — pixel-faithful JSX recreation of the SAGN marketing site, including a runnable `index.html` demo. Lift components from here rather than re-deriving them.

## House rules (most-violated)
- **No emoji** anywhere in the rendered UI.
- **Gold (`#C8902E`) is used once per view** — primary CTA, decorative numerals, or one accent border.
- **Playfair Display only on h1/h2.** Everything else is DM Sans.
- **Cool palette only.** No warm greys, no beige, no off-white. Page background is `#FAFCFE`.
- **Em-dashes are the brand's signature punctuation.** Use them where you'd otherwise use a colon or parenthetical.
- **Em-dash, not "and."** "General Services & Solutions" — ampersand stays in titles only.
- **Eyebrows are uppercase, 12px, weight 700, letter-spacing 0.1em.** Always blue on light, gold on dark.
- **Cards: white fill, 1px border, 14px radius, no shadow at rest, lg shadow on hover.** Interactive cards get the blue→gold 3px top bar on hover.
- **One easing curve everywhere:** `cubic-bezier(0.22, 1, 0.36, 1)`.
