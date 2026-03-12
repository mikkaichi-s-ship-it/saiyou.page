# CLAUDE.md — AI Assistant Guide for saiyou.page

## Project Overview

This is a **single-page recruitment landing site** for a Tokyo Ginza dental clinic (東京銀座歯科), targeting dental hygienist (歯科衛生士) candidates. It is a static React app deployed to GitHub Pages.

- **Domain purpose:** Dental hygienist job listing / recruitment marketing
- **Language:** Japanese (UI content), English (code/config)
- **Deployment target:** GitHub Pages via CI/CD

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| UI framework | React | 19.x |
| Build tool | Vite | 7.x |
| Styling | Tailwind CSS | 4.x |
| Linting | ESLint | 9.x |
| Node | Node.js | 20 (CI) |
| Package manager | npm | latest |

No testing framework is configured (no Jest, Vitest, etc.).

---

## Repository Structure

```
saiyou.page/
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Pages CI/CD pipeline
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Sticky nav with mobile hamburger menu
│   │   ├── Hero.jsx           # Full-screen hero with CTA buttons
│   │   ├── Concept.jsx        # Director's message / clinic philosophy
│   │   ├── Treatment.jsx      # Clinic services / about the practice
│   │   ├── StaffVoices.jsx    # Employee testimonials (3 staff cards)
│   │   ├── ThreePoints.jsx    # Key benefits (compensation, hours, growth)
│   │   ├── Requirements.jsx   # Full job listing with selection process
│   │   ├── ClinicInfo.jsx     # Address, hours, map, transit info
│   │   ├── Cta.jsx            # Phone CTA section
│   │   └── Footer.jsx         # Clinic name, address, copyright
│   ├── App.jsx                # Root component — composes all sections
│   ├── main.jsx               # React entry point (StrictMode)
│   └── index.css              # Tailwind import + custom theme colors
├── index.html                 # HTML entry, Google Fonts, lang="ja"
├── vite.config.js             # Vite config (base: './', React + Tailwind)
├── eslint.config.js           # ESLint flat config (ES2020, JSX)
├── package.json               # Scripts and dependencies
└── package-lock.json
```

---

## Development Workflow

### Install dependencies
```bash
npm install
```

### Start development server (with HMR)
```bash
npm run dev
```

### Build for production
```bash
npm run build
```
Output goes to `dist/`. The `base: './'` setting in `vite.config.js` ensures relative asset paths for GitHub Pages compatibility.

### Preview production build locally
```bash
npm run preview
```

### Run linter
```bash
npm run lint
```
There is no auto-fix script. To auto-fix: `npx eslint . --fix`

---

## Deployment

Deployment is fully automated via `.github/workflows/deploy.yml`:

- **Trigger branches:** `main` and `claude/dental-recruitment-site-u0M3V`
- **Pipeline steps:**
  1. Checkout → Node 20 setup → `npm ci` → `npm run build`
  2. Upload `dist/` artifact
  3. Deploy to GitHub Pages
- **Concurrency:** Only one deploy runs at a time; in-progress deploys are cancelled on new push

To deploy manually: push to `main` or the configured trigger branch.

---

## Styling Conventions

### Tailwind CSS v4 with custom theme

Custom colors are defined in `src/index.css` using `@theme`:

```css
@theme {
  --color-navy-50: ...;    /* lightest navy */
  --color-navy-950: ...;   /* darkest navy (primary dark bg) */
  --color-gold-400: ...;   /* light gold accent */
  --color-gold-500: ...;   /* gold CTA color */
}
```

**Color usage guidelines:**
- `navy-950` — primary dark backgrounds (header, footer, dark sections)
- `navy-800` / `navy-700` — card backgrounds, secondary dark areas
- `gold-400` / `gold-500` — CTA buttons, highlights, accent text
- `white` / `gray-*` — text on dark backgrounds

### Typography

- **Serif** (Noto Serif JP): Section headings, director quotes, elegant display text
- **Sans-serif** (Noto Sans JP, Hiragino Kaku Gothic ProN): Body text, UI labels
- Google Fonts are loaded in `index.html` via `<link>` preconnect

### Responsive design
- Mobile-first with `md:` breakpoints for desktop layouts
- Hamburger menu collapses nav on mobile (toggled via `useState` in `Header.jsx`)

---

## Component Patterns

### Functional components only
All components are functional React components. No class components.

### State management
Only local `useState` is used (currently only in `Header.jsx` for menu toggle). No Redux, Zustand, or Context.

### Navigation / section IDs

Section components use these anchor IDs for hash navigation:

| Section | ID |
|---------|-----|
| Concept | `#concept` |
| Treatment/About | `#treatment` |
| Staff Voices | `#staff` |
| Three Points | `#points` |
| Requirements | `#requirements` |
| Clinic Info/Access | `#access` |

The header nav links use `href="#id"` anchors. Global smooth scroll is enabled in `index.css`.

### No routing library
This is a single-page site with no `react-router-dom` or similar. Navigation is purely hash-based.

---

## Content & Clinic Details

Key factual details embedded in components (update these if clinic info changes):

| Field | Value |
|-------|-------|
| Clinic name | 東京銀座歯科 |
| Director | 中平裕史 (Hiroshi Nakahira) |
| Phone | 03-3562-7877 |
| Address | 東京都中央区銀座 (Ginza, Chuo-ku, Tokyo) |
| Business hours | 10:00–13:00 / 14:00–18:00 |
| Starting salary | ¥300,000+ |
| Annual leave | 125 days |

Images are hosted externally (Imgur and Unsplash). If images break, update the URLs in `Hero.jsx` and `Treatment.jsx`.

---

## ESLint Configuration

- Flat config format (`eslint.config.js`) — ESLint 9 style
- Ignores `dist/`
- Browser globals, ES2020 syntax
- `no-unused-vars` rule: ignores variables starting with uppercase (React components and types)
- React Hooks rules enforced
- React Refresh rules for Vite HMR compatibility

---

## Key Constraints & Gotchas

1. **Vite base path must stay `'./'`** — required for GitHub Pages to serve assets correctly from subdirectory paths.
2. **No `.env` files** — all configuration is hard-coded; phone number, address, etc. are directly in JSX.
3. **External images** — Hero and Treatment images are hosted on Imgur. If they become unavailable, replace the `src` URLs in those components.
4. **Japanese text encoding** — the HTML has `lang="ja"`. Ensure any new meta tags or text maintains correct encoding.
5. **No test suite** — there are no unit or integration tests. Verify changes visually with `npm run dev` or `npm run preview`.
6. **Tailwind v4** — uses the new `@tailwindcss/vite` plugin (not `postcss`). Do not add a `tailwind.config.js`; theme is configured in `index.css` via `@theme`.

---

## Common Tasks

### Add a new section
1. Create `src/components/NewSection.jsx` as a functional component
2. Add a section wrapper with an `id` attribute for anchor navigation
3. Import and place it in `src/App.jsx` in the appropriate order
4. Optionally add a nav link in `Header.jsx`

### Update job listing details
Edit `src/components/Requirements.jsx` — the salary, hours, benefits, and selection process steps are all in this file.

### Change clinic contact info
Search for the phone number `03-3562-7877` across components and update all occurrences (appears in `Header.jsx`, `Hero.jsx`, `Cta.jsx`, `ClinicInfo.jsx`).

### Update hero/treatment images
Replace the `src` attribute values in `Hero.jsx` and `Treatment.jsx` with new image URLs.
