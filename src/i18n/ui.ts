export const languages = {
  en: "English",
  cs: "Čeština",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export const ui = {
  "meta.title": { en: "Ondřej Bassler, software developer", cs: "Ondřej Bassler, softwarový vývojář" },
  "meta.description": {
    en: "Junior software developer from Třinec. Full-stack web apps in Java, TypeScript and Python, testing with Playwright, and a bachelor's thesis on loss landscapes of neural networks.",
    cs: "Junior softwarový vývojář z Třince. Full-stack webové aplikace v Javě, TypeScriptu a Pythonu, testování v Playwrightu a bakalářka o ztrátových krajinách neuronových sítí.",
  },

  "nav.work": { en: "Experience", cs: "Praxe" },
  "nav.projects": { en: "Projects", cs: "Projekty" },
  "nav.skills": { en: "Skills", cs: "Dovednosti" },
  "nav.contact": { en: "Contact", cs: "Kontakt" },
  "nav.skip": { en: "Skip to content", cs: "Přeskočit na obsah" },

  "hero.lead": {
    en: "I build web applications end to end, from the Spring Boot or Node backend to the React or Angular frontend, and I test them until they hold up. Right now I'm a junior developer at PMLOGY and finishing my bachelor's degree at the University of Ostrava.",
    cs: "Stavím webové aplikace od začátku do konce, od backendu ve Spring Bootu nebo Node po frontend v Reactu nebo Angularu, a testuju je, dokud spolehlivě nefungují. Teď pracuji jako junior vývojář v PMLOGY a dokončuji bakalářku na Ostravské univerzitě.",
  },
  "hero.cv": { en: "Download CV (PDF)", cs: "Stáhnout CV (PDF)" },
  "hero.location": { en: "Based in Třinec, Czech Republic", cs: "Třinec, Moravskoslezský kraj" },
  "hero.figure": {
    en: "A toy loss surface and the path gradient descent takes across it. Plain descent settles in the nearer, shallower minimum; my thesis looks at where 100 real networks end up.",
    cs: "Ukázková ztrátová plocha a cesta, kterou po ní projde gradientní sestup. Obyčejný sestup skončí v bližším, mělčím minimu; v bakalářce zkoumám, kde skončí 100 skutečných sítí.",
  },
  "hero.figure.label": { en: "Contour map of a loss surface with a gradient descent path", cs: "Vrstevnicová mapa ztrátové plochy s cestou gradientního sestupu" },
  "hero.figure.start": { en: "start", cs: "start" },
  "hero.figure.min": { en: "local minimum", cs: "lokální minimum" },
  "hero.figure.global": { en: "global minimum", cs: "globální minimum" },

  "work.title": { en: "Experience", cs: "Praxe" },
  "projects.title": { en: "Projects", cs: "Projekty" },
  "projects.code": { en: "Source on GitHub", cs: "Zdrojový kód na GitHubu" },
  "projects.private": { en: "Private repository", cs: "Neveřejný repozitář" },
  "projects.noRepo": { en: "Not published", cs: "Nezveřejněno" },
  "projects.all": { en: "All repositories on GitHub", cs: "Všechny repozitáře na GitHubu" },
  "skills.title": { en: "Skills", cs: "Dovednosti" },
  "education.title": { en: "Education", cs: "Vzdělání" },
  "education.certs": { en: "Cisco Networking Academy", cs: "Cisco Networking Academy" },
  "languages.title": { en: "Languages", cs: "Jazyky" },
  "languages.list": {
    en: "Czech (native), English (advanced), Korean (A1)",
    cs: "čeština (rodilý mluvčí), angličtina (pokročilá), korejština (A1)",
  },
  "life.title": { en: "Outside work", cs: "Mimo práci" },
  "life.text": {
    en: "Games with a strong atmosphere and story, Souls games, Elden Ring, Dishonored and Resident Evil above all, and League with friends when we need to switch off. A lot of anime and manga, cooking, landscape photos, and far too much music, mostly metal.",
    cs: "Hry se silnou atmosférou a příběhem, hlavně Souls série, Elden Ring, Dishonored a Resident Evil, a s kamarády League, když potřebujeme vypnout. Hodně anime a mangy, vaření, focení krajiny a až příliš hudby, hlavně metalu.",
  },

  "contact.title": { en: "Contact", cs: "Kontakt" },
  "contact.text": {
    en: "I'm open to a full-time junior developer role after graduation. The fastest way to reach me is email.",
    cs: "Po dokončení studia hledám plný úvazek jako junior vývojář. Nejrychleji mě zastihnete e-mailem.",
  },
  "contact.phone": { en: "Phone", cs: "Telefon" },

  "footer.built": { en: "Built with Astro.", cs: "Postaveno v Astru." },

  "theme.toggle": { en: "Switch colour theme", cs: "Přepnout barevný režim" },
  "lang.switch": { en: "Česky", cs: "English" },
  "lang.switch.label": { en: "Přepnout do češtiny", cs: "Switch to English" },
} as const;

export type TranslationKey = keyof typeof ui;
