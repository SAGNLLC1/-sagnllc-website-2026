# SAGN LLC — Website

Drop-in replacement for the GitHub Pages site at `SAGNLLC1/-sagnllc-website-2026`.

## Files
- `index.html` — entry point
- `styles.css` — all CSS (tokens + components)
- `Icons.jsx`, `Nav.jsx`, `Hero.jsx`, `Section.jsx`, `Cards.jsx`, `Contact.jsx`, `Footer.jsx` — Babel-compiled in the browser
- `assets/` — logo files + favicon
- `SAGN_LLC_Capability_Statement.pdf` — **REPLACE THIS FILE** with the latest capability statement before deploying. The site links to it from the hero "Download Capability Statement" CTA and the "How to Order" card.

## Deploy
1. Replace `SAGN_LLC_Capability_Statement.pdf` with the updated PDF (same filename).
2. Drop these files at the **root** of the GitHub Pages repo (so `index.html` is the repo root).
3. Commit, push. GitHub Pages serves from `main` branch root by default.

## Notes
- Icons are inline SVG (Lucide-style) — no CDN icon font, no emoji.
- Fonts (DM Sans, Playfair Display) load from Google Fonts.
- React 18 + Babel-standalone load from unpkg CDN. For an offline build, vendor those scripts into a `vendor/` folder and update `index.html`.
