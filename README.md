# Padalustro Games

Premium multilingual website for **Padalustro Games**, an independent game studio from Asunción, Paraguay.

The site presents the studio, upcoming games **MewClicker** and **Disco Infierno**, released mobile titles, playable prototypes and the Padalustro team.

## Features

- English, Spanish and Portuguese language switcher
- Responsive layouts for desktop, tablet and mobile
- Lightweight scroll and character animations
- Optimized WebP artwork
- Accessible reduced-motion support
- App Store and GitHub project links

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm run install:site
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

## Project structure

```text
Padalustro/
├── package.json        # Root development commands
└── site/
    ├── app/            # Page, metadata and styles
    ├── public/         # Optimized game and studio assets
    └── package.json    # Website dependencies
```

## Technology

React 19, Next.js-compatible App Router, Vinext, Vite and TypeScript.

---

Made in Paraguay. Website developed by [Manageopy](https://www.manageopy.com/).
