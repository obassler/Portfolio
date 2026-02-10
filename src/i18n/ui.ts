export const languages = {
  en: "English",
  cs: "Cestina",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export const ui = {
  // Nav
  "nav.about": { en: "About", cs: "O mne" },
  "nav.projects": { en: "Projects", cs: "Projekty" },
  "nav.skills": { en: "Skills", cs: "Dovednosti" },
  "nav.education": { en: "Education", cs: "Vzdelani" },
  "nav.contact": { en: "Contact", cs: "Kontakt" },

  // Hero
  "hero.greeting": { en: "Hi, I'm", cs: "Ahoj, jsem" },
  "hero.name": { en: "Ondrej Bassler", cs: "Ondrej Bassler" },
  "hero.title": { en: "Software Developer", cs: "Softwarovy vyvojar" },
  "hero.subtitle": {
    en: "Final-year Applied Informatics student crafting experiences across web, games, VR, and machine learning.",
    cs: "Student posledniho rocniku Aplikovane informatiky tvorici projekty v oblastech webu, her, VR a strojoveho uceni.",
  },
  "hero.cta.projects": { en: "View Projects", cs: "Zobrazit projekty" },
  "hero.cta.cv": { en: "Download CV", cs: "Stahnout CV" },

  // About
  "about.title": { en: "About Me", cs: "O mne" },
  "about.p1": {
    en: "I'm a 21-year-old developer in my final year of Applied Informatics at the University of Ostrava. My journey started with 3D modeling in Cinema 4D during elementary school, then moved into computer networks and programming in high school, where I earned my Maturita in Programming, Networks, and Operating Systems.",
    cs: "Je mi 21 let a jsem studentem posledniho rocniku Aplikovane informatiky na Ostravske univerzite. Moje cesta zacala 3D modelovanim v Cinema 4D na zakladni skole, pokracovala pocitacovymi sitemi a programovanim na stredni skole, kde jsem odmaturoval z Programovani, Siti a Operacnich systemu.",
  },
  "about.p2": {
    en: "I love building things that span different domains - from VR games and 3D experiences to neural network research and web applications. My bachelor's thesis explores loss landscapes in neural networks using PyTorch, combining my interest in AI with practical experimentation.",
    cs: "Rad tvorim projekty z ruznych oblasti - od VR her a 3D zkusenosti po vyzkum neuronovych siti a webove aplikace. Ma bakalarska prace zkouma loss landscape v neuronovych sitich pomoci PyTorch, coz spojuje muj zajem o AI s praktickym experimentovanim.",
  },
  "about.highlight.languages": { en: "5+ Languages", cs: "5+ jazyku" },
  "about.highlight.vr": { en: "VR Development", cs: "VR vyvoj" },
  "about.highlight.ml": { en: "Machine Learning", cs: "Strojove uceni" },
  "about.highlight.networking": { en: "CCNA Certified", cs: "CCNA certifikace" },

  // Projects
  "projects.title": { en: "Projects", cs: "Projekty" },
  "projects.viewCode": { en: "View Code", cs: "Zobrazit kod" },
  "projects.liveDemo": { en: "Live Demo", cs: "Ziva ukazka" },

  // Skills
  "skills.title": { en: "Skills & Technologies", cs: "Dovednosti a technologie" },
  "skills.languages": { en: "Languages", cs: "Jazyky" },
  "skills.frameworks": { en: "Frameworks & Tools", cs: "Frameworky a nastroje" },
  "skills.design": { en: "3D & Design", cs: "3D a design" },
  "skills.networking": { en: "Networking", cs: "Site" },

  // Education
  "education.title": { en: "Education & Certifications", cs: "Vzdelani a certifikace" },

  // Contact
  "contact.title": { en: "Get In Touch", cs: "Kontaktujte me" },
  "contact.text": {
    en: "I'm currently looking for opportunities after graduation. Whether you have a question or just want to say hi, feel free to reach out!",
    cs: "Aktualne hledam prilezitosti po dokonceni studia. At uz mate dotaz nebo se chcete jen pozdravit, nevahejtese ozvat!",
  },
  "contact.cta": { en: "Say Hello", cs: "Napiste mi" },

  // Footer
  "footer.built": { en: "Built with", cs: "Vytvoreno s" },
  "footer.by": { en: "by Ondrej Bassler", cs: "od Ondreje Basslera" },

  // Theme
  "theme.light": { en: "Light mode", cs: "Svetly rezim" },
  "theme.dark": { en: "Dark mode", cs: "Tmavy rezim" },

  // Language
  "lang.switch": { en: "Cestina", cs: "English" },
} as const;

export type TranslationKey = keyof typeof ui;
