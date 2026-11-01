type T = { en: string; cs: string };

export interface Job {
  company: string;
  role: T;
  period: T;
  points: T[];
}

export const experience: Job[] = [
  {
    company: "PMLOGY s.r.o.",
    role: { en: "Junior Software Developer (contract)", cs: "Junior Software Developer (externí spolupráce)" },
    period: { en: "Apr 2025 – now", cs: "04/2025 – dosud" },
    points: [
      {
        en: "Building new features and fixing bugs across frontend and backend of the company's web apps: a booking platform, Vizitkomat and Screenomat.cz.",
        cs: "Vývoj nových funkcí a opravy chyb na frontendu i backendu firemních webových aplikací: rezervační platforma, Vizitkomat a Screenomat.cz.",
      },
      {
        en: "Testing with Playwright, automated smoke tests and manual checks.",
        cs: "Testování v Playwrightu, automatizované smoke testy a manuální kontroly.",
      },
      {
        en: "Using AI tools in development and reviewing everything they produce before it ships.",
        cs: "Práce s AI nástroji při vývoji a důsledná kontrola všeho, co vygenerují.",
      },
    ],
  },
  {
    company: "MOJEMOBILKA s.r.o.",
    role: { en: "Sales & customer service", cs: "Prodej a zákaznický servis" },
    period: { en: "Aug 2023 – Jan 2025", cs: "08/2023 – 01/2025" },
    points: [
      {
        en: "Advised customers, sold phones and accessories, diagnosed and repaired devices.",
        cs: "Poradenství zákazníkům, prodej telefonů a příslušenství, diagnostika a opravy zařízení.",
      },
      {
        en: "Handled warranty claims and returns, trained new colleagues.",
        cs: "Reklamace a vratky, zaučování nových kolegů.",
      },
    ],
  },
  {
    company: "HUISMAN KONSTRUKCE s.r.o.",
    role: { en: "IT support (short-term)", cs: "IT podpora (krátkodobě)" },
    period: { en: "Oct – Dec 2021", cs: "10/2021 – 12/2021" },
    points: [
      {
        en: "Installed and configured server infrastructure, assembled a server rack and prepared employee workstations.",
        cs: "Instalace a konfigurace serverové infrastruktury, montáž serverového racku a příprava počítačů pro zaměstnance.",
      },
    ],
  },
];
