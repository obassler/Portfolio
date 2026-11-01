# Portfolio

Personal site of Ondřej Bassler, live at [onnielportfolio.vercel.app](https://onnielportfolio.vercel.app). English at `/`, Czech at `/cs/`.

![Astro](https://img.shields.io/badge/Astro-5-BC52EE?logo=astro&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-R3F-000000?logo=threedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)

Dark, glass-surfaced design with a slowly turning 3D knot in the hero (React Three Fiber, loaded as an island only on the client) and smooth scrolling via Lenis. The thesis section shows real data from my bachelor's thesis: an interactive agreement matrix of 100 trained networks, computed from their test-set predictions (`src/data/thesis.json`). Motion is turned off for visitors who prefer reduced motion.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
```

## Where things live

| Content | File |
|---|---|
| Work experience | `src/data/experience.ts` |
| Projects | `src/data/projects.ts` |
| Skills | `src/data/skills.ts` |
| Education, certificates | `src/data/education.ts` |
| UI text (EN / CS) | `src/i18n/ui.ts` |
| Thesis data | `src/data/thesis.json` |
| 3D hero scene | `src/components/HeroScene.tsx` |
| Colours and type | `src/styles/global.css` |
| CV downloads | `public/cv/` |
