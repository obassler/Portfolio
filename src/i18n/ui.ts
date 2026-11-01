export const languages = {
  en: "English",
  cs: "Čeština",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";

export const ui = {
  "meta.title": { en: "Ondřej Bassler, software developer", cs: "Ondřej Bassler, softwarový vývojář" },
  "meta.description": {
    en: "Junior full-stack developer from Třinec. Spring Boot, React and Angular web apps, Playwright testing, and a bachelor's thesis on how 100 neural networks disagree.",
    cs: "Junior full-stack vývojář z Třince. Webové aplikace ve Spring Bootu, Reactu a Angularu, testování v Playwrightu a bakalářka o tom, v čem se neshodne 100 neuronových sítí.",
  },

  "nav.thesis": { en: "Thesis", cs: "Bakalářka" },
  "nav.projects": { en: "Projects", cs: "Projekty" },
  "nav.work": { en: "Experience", cs: "Praxe" },
  "nav.contact": { en: "Contact", cs: "Kontakt" },
  "nav.skip": { en: "Skip to content", cs: "Přeskočit na obsah" },

  "hero.title": { en: "Full-stack apps, built to actually work.", cs: "Full-stack aplikace, které opravdu fungují." },
  "hero.lead": {
    en: "I'm Ondřej, a junior developer at PMLOGY. I build web apps from the Spring Boot or Node backend to the React or Angular frontend, then test them until they hold up. I'm also finishing a bachelor's degree at the University of Ostrava.",
    cs: "Jsem Ondřej, junior vývojář v PMLOGY. Stavím webové aplikace od backendu ve Spring Bootu nebo Node po frontend v Reactu nebo Angularu a testuju je, dokud spolehlivě nefungují. K tomu dokončuji bakalářku na Ostravské univerzitě.",
  },
  "hero.cta.work": { en: "See my work", cs: "Moje práce" },
  "hero.cta.cv": { en: "Download CV", cs: "Stáhnout CV" },
  "hero.now": { en: "Now", cs: "Teď" },
  "hero.now.v": { en: "Junior Developer, PMLOGY", cs: "Junior Developer, PMLOGY" },
  "hero.looking": { en: "Looking for", cs: "Hledám" },
  "hero.looking.v": { en: "Full-time junior role after graduation", cs: "Plný úvazek jako junior po studiu" },
  "hero.where": { en: "Based in", cs: "Kde" },
  "hero.where.v": { en: "Třinec, CZ · open to remote", cs: "Třinec · i na dálku" },

  "thesis.kicker": { en: "Bachelor's thesis", cs: "Bakalářská práce" },
  "thesis.title": { en: "100 networks, one dataset, different answers.", cs: "100 sítí, jeden dataset, různé odpovědi." },
  "thesis.p1": {
    en: "I trained the same convolutional network on FashionMNIST a hundred times, changing only the random seed. Every copy ends up about equally accurate. They still don't agree with each other.",
    cs: "Stejnou konvoluční síť jsem na FashionMNIST natrénoval stokrát a měnil jen náhodný seed. Všechny kopie jsou zhruba stejně přesné. Přesto se mezi sebou neshodnou.",
  },
  "thesis.p2": {
    en: "The matrix shows how often each pair of models predicts the same class on the 10,000 test images. Hover over it to compare any two. The thesis then looks at why: loss surfaces around each solution, interpolation between models and the barriers that separate them.",
    cs: "Matice ukazuje, jak často každá dvojice modelů předpoví na 10 000 testovacích obrázcích stejnou třídu. Najeď na ni myší a porovnej libovolné dva. Bakalářka pak zkoumá proč: ztrátové plochy kolem každého řešení, interpolaci mezi modely a bariéry, které je oddělují.",
  },
  "thesis.stat.agree": { en: "average agreement between two models", cs: "průměrná shoda dvou modelů" },
  "thesis.stat.range": { en: "range across all 4,950 pairs", cs: "rozpětí přes všech 4 950 dvojic" },
  "thesis.stat.unan": { en: "of test images on which all 100 agree", cs: "testovacích obrázků, kde se shodne všech 100" },
  "thesis.matrix.label": { en: "Prediction agreement between 100 models", cs: "Shoda predikcí mezi 100 modely" },
  "thesis.matrix.hint": { en: "Hover or tap a cell", cs: "Najeď nebo klepni na buňku" },
  "thesis.matrix.pair": { en: "Model {a} and model {b} agree on {v} of images", cs: "Model {a} a model {b} se shodnou na {v} obrázků" },
  "thesis.matrix.sorted": { en: "Models are ordered so similar ones sit next to each other.", cs: "Modely jsou seřazené tak, aby podobné byly vedle sebe." },
  "thesis.matrix.low": { en: "less agreement", cs: "menší shoda" },
  "thesis.matrix.high": { en: "more", cs: "větší" },
  "thesis.classes": { en: "Where they disagree most", cs: "Kde se neshodnou nejvíc" },
  "thesis.classes.note": {
    en: "Share of images in each class where at least one model votes differently.",
    cs: "Podíl obrázků v každé třídě, kde aspoň jeden model hlasuje jinak.",
  },
  "thesis.stack": { en: "Python, PyTorch Lightning, Hydra, Optuna, Weights & Biases", cs: "Python, PyTorch Lightning, Hydra, Optuna, Weights & Biases" },
  "thesis.code": { en: "Code and experiments on GitHub", cs: "Kód a experimenty na GitHubu" },

  "projects.title": { en: "Other projects", cs: "Další projekty" },
  "projects.nda": { en: "Client work under NDA", cs: "Klientská práce pod NDA" },
  "projects.github": { en: "View on GitHub", cs: "Zobrazit na GitHubu" },
  "projects.unpublished": { en: "Not published", cs: "Nezveřejněno" },
  "projects.all": { en: "All repositories", cs: "Všechny repozitáře" },

  "work.title": { en: "Experience", cs: "Praxe" },
  "skills.title": { en: "What I work with", cs: "S čím pracuji" },
  "education.title": { en: "Education", cs: "Vzdělání" },
  "education.certs": { en: "Cisco Networking Academy", cs: "Cisco Networking Academy" },
  "languages.title": { en: "Languages", cs: "Jazyky" },
  "languages.list": {
    en: "Czech (native), English (advanced), Korean (A1)",
    cs: "čeština (rodilý mluvčí), angličtina (pokročilá), korejština (A1)",
  },
  "life.title": { en: "Outside work", cs: "Mimo práci" },
  "life.text": {
    en: "Games with a strong atmosphere and story, Souls games, Elden Ring, Dishonored and Resident Evil above all. Anime and manga, cooking, landscape photos, and far too much metal.",
    cs: "Hry se silnou atmosférou a příběhem, hlavně Souls série, Elden Ring, Dishonored a Resident Evil. Anime a manga, vaření, focení krajiny a až příliš metalu.",
  },

  "contact.title": { en: "Let's talk.", cs: "Ozvěte se." },
  "contact.text": {
    en: "I'm open to a full-time junior developer role after graduation. Email is the fastest way to reach me.",
    cs: "Po dokončení studia hledám plný úvazek jako junior vývojář. Nejrychleji mě zastihnete e-mailem.",
  },
  "contact.cta": { en: "Write an email", cs: "Napsat e-mail" },
  "contact.phone": { en: "Phone", cs: "Telefon" },
  "contact.copy": { en: "Copy email", cs: "Kopírovat e-mail" },
  "contact.copied": { en: "Copied", cs: "Zkopírováno" },

  "footer.built": { en: "Built with Astro and Three.js.", cs: "Postaveno v Astru a Three.js." },
  "lang.switch": { en: "CZ", cs: "EN" },
  "lang.switch.label": { en: "Přepnout do češtiny", cs: "Switch to English" },
} as const;

export type TranslationKey = keyof typeof ui;
