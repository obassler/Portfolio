type T = { en: string; cs: string };

export interface Project {
  slug: string;
  title: T;
  kind: T;
  year: string;
  description: T;
  stack: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    slug: "loss-landscapes",
    title: { en: "Loss Landscapes in Neural Networks", cs: "Loss landscapes v neuronových sítích" },
    kind: { en: "Bachelor's thesis", cs: "Bakalářská práce" },
    year: "2025–2026",
    description: {
      en: "I trained 100 CNNs on FashionMNIST that differ only in their random seed and optimizer, then compared where they ended up: 2D and 3D loss surfaces, linear interpolation between models, loss barriers with batch-norm recalibration and per-class prediction disagreement. Hyperparameters come from an Optuna sweep; experiments run in parallel and are logged to Weights & Biases. Best single model reaches about 91.9 % validation accuracy.",
      cs: "Natrénoval jsem 100 konvolučních sítí na FashionMNIST, které se liší jen náhodným seedem a optimalizátorem, a porovnával, kde skončily: 2D a 3D ztrátové plochy, lineární interpolace mezi modely, ztrátové bariéry s přepočtem batch-normu a neshoda predikcí po třídách. Hyperparametry pochází z Optuna sweepu, experimenty běží paralelně a logují se do Weights & Biases. Nejlepší model má přibližně 91,9 % validační přesnosti.",
    },
    stack: ["Python", "PyTorch Lightning", "Hydra", "Optuna", "W&B"],
    github: "https://github.com/obassler/FashionMnist-OSU",
  },
  {
    slug: "schedule-box",
    title: { en: "ScheduleBox", cs: "ScheduleBox" },
    kind: { en: "Work, PMLOGY", cs: "Práce, PMLOGY" },
    year: "2025–",
    description: {
      en: "Booking and business platform for reservation-based services such as salons, gyms and clinics: reservations, payments, CRM, a loyalty programme and marketing automation. I work on new features and fixes across frontend and backend, and cover them with Playwright and smoke tests.",
      cs: "Rezervační a byznysová platforma pro služby jako salony, fitka nebo kliniky: rezervace, platby, CRM, věrnostní program a automatizace marketingu. Vyvíjím nové funkce a opravy na frontendu i backendu a pokrývám je testy v Playwrightu a smoke testy.",
    },
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Playwright"],
  },
  {
    slug: "screenomat",
    title: { en: "Screenomat", cs: "Screenomat" },
    kind: { en: "Work, PMLOGY", cs: "Práce, PMLOGY" },
    year: "2025–",
    description: {
      en: "Czech digital signage software for shops, restaurants, waiting rooms and offices. Content for any number of screens is built in a drag-and-drop editor, scheduled by time and day, and managed remotely from the browser, with a media library and playback reports. Runs on an ordinary screen or TV, no special hardware.",
      cs: "Český software pro digitální obrazovky v obchodech, restauracích, čekárnách nebo kancelářích. Obsah pro libovolný počet obrazovek se skládá v drag-and-drop editoru, plánuje podle času a dnů a spravuje na dálku z prohlížeče, s knihovnou médií a reporty přehrávání. Běží na běžné obrazovce nebo televizi bez speciálního hardwaru.",
    },
    stack: [],
    live: "https://screenomat.cz",
  },
  {
    slug: "dnd-manager",
    title: { en: "D&D Campaign Manager", cs: "Správce D&D kampaně" },
    kind: { en: "University project", cs: "Projekt na univerzitě" },
    year: "2025–2026",
    description: {
      en: "A control panel for Dungeons & Dragons game masters: characters with inventory and spells, NPCs, a bestiary, locations and quests. During a session it tracks combat state such as damage, healing the whole party, death saves, conditions and spell slots. JWT login, REST API with around 55 endpoints.",
      cs: "Ovládací panel pro Dungeon Mastery v D&D: postavy s inventářem a kouzly, NPC, bestiář, lokace a questy. Během hry hlídá stav boje, tedy zranění, léčení celé družiny, death savy, stavy a sloty kouzel. Přihlášení přes JWT, REST API s přibližně 55 endpointy.",
    },
    stack: ["Spring Boot", "React", "Tailwind", "MySQL", "Docker"],
    github: "https://github.com/obassler/SWI-project",
  },
  {
    slug: "ghost-stories",
    title: { en: "Ghost Stories VR", cs: "Ghost Stories VR" },
    kind: { en: "University project", cs: "Projekt na univerzitě" },
    year: "2025–2026",
    description: {
      en: "A VR horror game set in an abandoned asylum. You track down a cursed priest and hold your flashlight on him until he is banished; do it three times to escape. Raycast-based flashlight detection, banishment progress UI, footstep audio and VR locomotion.",
      cs: "VR horor v opuštěném blázinci. Hráč hledá prokletého kněze a drží na něm baterku, dokud ho nevyžene. Po třech vyhnáních uteče. Detekce baterky přes raycast, ukazatel postupu vyhánění, zvuk kroků a pohyb ve VR.",
    },
    stack: ["Unity 6", "C#", "OpenXR", "URP"],
    github: "https://github.com/obassler/ghoststories",
  },
  {
    slug: "todo",
    title: { en: "ToDo List", cs: "ToDo List" },
    kind: { en: "University project", cs: "Projekt na univerzitě" },
    year: "2026",
    description: {
      en: "Full-stack task manager with user accounts. Stateless JWT authentication, per-user tasks with due dates, pagination, and an Angular frontend with a route guard and an HTTP interceptor.",
      cs: "Full-stack správce úkolů s uživatelskými účty. Bezstavová autentizace přes JWT, úkoly s termíny pro každého uživatele zvlášť, stránkování a frontend v Angularu s route guardem a HTTP interceptorem.",
    },
    stack: ["Spring Boot", "Spring Security", "Angular 21", "MySQL"],
    github: "https://github.com/obassler/VFAP-ToDoList",
  },
  {
    slug: "text-venture",
    title: { en: "TextVenture", cs: "TextVenture" },
    kind: { en: "University project", cs: "Projekt na univerzitě" },
    year: "2025",
    description: {
      en: "A browser text RPG: create a character, explore by choosing what to do next and fight enemies turn by turn. Each player's progress is saved in Firestore.",
      cs: "Textové RPG v prohlížeči: vytvoříš postavu, prozkoumáváš svět volbou dalšího kroku a bojuješ s nepřáteli na tahy. Postup každého hráče se ukládá do Firestore.",
    },
    stack: ["Spring Boot", "React", "Firebase"],
    github: "https://github.com/obassler/textVenture",
  },
  {
    slug: "slavic-myths",
    title: { en: "Svět bájí slovanských", cs: "Svět bájí slovanských" },
    kind: { en: "Commission", cs: "Zakázka" },
    year: "",
    description: {
      en: "A game built around Slavic mythology, made for an art-school student as part of her bachelor's thesis.",
      cs: "Hra postavená na slovanské mytologii, vytvořená pro studentku umělecké školy jako součást její bakalářské práce.",
    },
    stack: ["Unity", "C#"],
  },
  {
    slug: "android",
    title: { en: "Android apps", cs: "Aplikace pro Android" },
    kind: { en: "University exercises", cs: "Cvičení na univerzitě" },
    year: "2025",
    description: {
      en: "A notes app with reordering and local persistence, and a quadratic equation solver.",
      cs: "Poznámky s přeřazováním a lokálním ukládáním a kalkulačka kvadratických rovnic.",
    },
    stack: ["Kotlin", "Jetpack Compose"],
    github: "https://github.com/obassler/NotesApp",
  },
];
