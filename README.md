# Portfolio

Personal site of Ondřej Bassler, live at [obassler.vercel.app](https://obassler.vercel.app). English at `/`, Czech at `/cs/`.

![Astro](https://img.shields.io/badge/Astro-5-BC52EE?logo=astro&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)

The hero shows a contour map of a toy loss surface and the path gradient descent takes across it, a nod to my bachelor's thesis. Contours (marching squares) and the descent path are computed at build time in [`src/lib/landscape.ts`](src/lib/landscape.ts), so the page ships no JavaScript for it.

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
| Colours and type | `src/styles/global.css` |
| CV downloads | `public/cv/` |
