export const languages = {
  en: "English",
  cs: "Čeština",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export const ui = {
  // Nav
  "nav.about": { en: "About", cs: "O mně" },
  "nav.projects": { en: "Projects", cs: "Projekty" },
  "nav.skills": { en: "Skills", cs: "Dovednosti" },
  "nav.education": { en: "Education", cs: "Vzdělání" },
  "nav.contact": { en: "Contact", cs: "Kontakt" },

  // Hero
  "hero.greeting": { en: "Hi, I'm", cs: "Ahoj, jsem" },
  "hero.name": { en: "Ondřej Bassler", cs: "Ondřej Bassler" },
  "hero.title": { en: "Software Developer", cs: "Softwarový vývojář" },
  "hero.subtitle": {
    en: "Final-year Applied Informatics student crafting experiences across web, games, VR, and machine learning.",
    cs: "Student posledního ročníku Aplikované informatiky tvořící projekty v oblastech webu, her, VR a strojového učení.",
  },
  "hero.cta.projects": { en: "View Projects", cs: "Zobrazit projekty" },
  "hero.cta.cv": { en: "Download CV", cs: "Stáhnout CV" },

  // About
  "about.title": { en: "About Me", cs: "O mně" },
  "about.p1": {
    en: "I'm a 21-year-old developer in my final year of Applied Informatics at the University of Ostrava. My journey started with 3D modeling in Cinema 4D during elementary school, then moved into computer networks and programming in high school, where I earned my Maturita in Programming, Networks, and Operating Systems.",
    cs: "Je mi 21 let a jsem studentem posledního ročníku Aplikované informatiky na Ostravské univerzitě. Moje cesta začala 3D modelováním v Cinema 4D na základní škole, pokračovala počítačovými sítěmi a programováním na střední škole, kde jsem odmaturoval z Programování, Sítí a Operačních systémů.",
  },
  "about.p2": {
    en: "I love building things that span different domains - from VR games and 3D experiences to neural network research and web applications. My bachelor's thesis explores loss landscapes in neural networks using PyTorch, combining my interest in AI with practical experimentation.",
    cs: "Rád tvořím projekty z různých oblastí — od VR her a 3D zážitků po výzkum neuronových sítí a webové aplikace. Má bakalářská práce zkoumá loss landscape v neuronových sítích pomocí PyTorch, což spojuje můj zájem o AI s praktickým experimentováním.",
  },
  "about.highlight.languages": { en: "5+ Languages", cs: "5+ jazyků" },
  "about.highlight.vr": { en: "VR Development", cs: "VR vývoj" },
  "about.highlight.ml": { en: "Machine Learning", cs: "Strojové učení" },
  "about.highlight.networking": { en: "CCNA Certified", cs: "CCNA certifikace" },

  // Projects
  "projects.title": { en: "Projects", cs: "Projekty" },
  "projects.viewCode": { en: "View Code", cs: "Zobrazit kód" },
  "projects.liveDemo": { en: "Live Demo", cs: "Živá ukázka" },

  // Skills
  "skills.title": { en: "Skills & Technologies", cs: "Dovednosti a technologie" },
  "skills.languages": { en: "Languages", cs: "Jazyky" },
  "skills.frameworks": { en: "Frameworks & Tools", cs: "Frameworky a nástroje" },
  "skills.design": { en: "3D & Design", cs: "3D a design" },
  "skills.networking": { en: "Networking", cs: "Sítě" },

  // Education
  "education.title": { en: "Education & Certifications", cs: "Vzdělání a certifikace" },

  // Hobbies
  "hobbies.title": { en: "Beyond the Code", cs: "Mimo kód" },
  "hobbies.gaming": { en: "Games", cs: "Hry" },
  "hobbies.gaming.desc": {
    en: "Big fan of the Souls series, Elden Ring, Dishonored, and Resident Evil — I love anything with a strong atmosphere and story. I also play League casually with friends when we need a break from everything.",
    cs: "Velký fanoušek série Souls, Elden Ringu, Dishonored a Resident Evil — miluju cokoliv se silnou atmosférou a příběhem. Taky s kamarády hrajeme League, když potřebujeme od všeho vypnout.",
  },
  "hobbies.anime": { en: "Anime & Japan", cs: "Anime a Japonsko" },
  "hobbies.anime.desc": {
    en: "Huge anime and manga fan. I'm currently learning Japanese — the language, the culture, the food, all of it. It's been a passion since I was a kid.",
    cs: "Velký fanoušek anime a mangy. Momentálně se učím japonsky — jazyk, kultura, jídlo, prostě všechno. Je to moje vášeň už od dětství.",
  },
  "hobbies.other": { en: "Also into...", cs: "Taky mě baví..." },
  "hobbies.other.desc": {
    en: "Cooking, taking scenery photos, and listening to way too much music — mostly metal, but honestly a bit of everything.",
    cs: "Vaření, focení krajiny a poslouchání až moc velké porce hudby — hlavně metal, ale upřímně trochu od všeho.",
  },

  // Contact
  "contact.title": { en: "Get In Touch", cs: "Kontaktujte mě" },
  "contact.text": {
    en: "I'm currently looking for opportunities after graduation. Whether you have a question or just want to say hi, feel free to reach out!",
    cs: "Aktuálně hledám příležitosti po dokončení studia. Ať už máte dotaz nebo se chcete jen pozdravit, neváhejte se ozvat!",
  },
  "contact.cta": { en: "Email Me", cs: "Napište mi" },

  // Contact details
  "contact.phone": { en: "Phone", cs: "Telefon" },
  "contact.email": { en: "Email", cs: "E-mail" },

  // Footer
  "footer.rights": { en: "All rights reserved.", cs: "Všechna práva vyhrazena." },

  // Theme
  "theme.light": { en: "Light mode", cs: "Světlý režim" },
  "theme.dark": { en: "Dark mode", cs: "Tmavý režim" },

  // Language
  "lang.switch": { en: "Čeština", cs: "English" },
} as const;

export type TranslationKey = keyof typeof ui;
