export interface EducationEntry {
  title: { en: string; cs: string };
  institution: { en: string; cs: string };
  period: string;
  description: { en: string; cs: string };
  tags: string[];
}

export const education: EducationEntry[] = [
  {
    title: {
      en: "Bachelor's in Applied Informatics",
      cs: "Bakalarske studium - Aplikovana informatika",
    },
    institution: {
      en: "University of Ostrava, Faculty of Science",
      cs: "Ostravska univerzita, Prirodovedecka fakulta",
    },
    period: "2023 - 2026",
    description: {
      en: "Studying algorithms, data structures, software engineering, databases, computer networks, computer graphics, AI fundamentals, and more. Bachelor's thesis on Loss Landscapes in Neural Networks.",
      cs: "Studium algoritmu, datovych struktur, softwaroveho inzenyrstvi, databazi, pocitacovych siti, pocitacove grafiky, zakladu AI a dalsiho. Bakalarska prace na tema Loss Landscapes v neuronovych sitich.",
    },
    tags: ["Algorithms", "Software Engineering", "Databases", "Networks", "AI", "Computer Graphics"],
  },
  {
    title: {
      en: "High School - Computer Networks",
      cs: "Stredni skola - Pocitacove site",
    },
    institution: {
      en: "High School (Maturita)",
      cs: "Stredni skola (Maturita)",
    },
    period: "2019 - 2023",
    description: {
      en: "Specialized in computer networks. Completed CCNA 1-3 and Cisco Network Security courses. Earned Maturita certification in Programming, Networks, and Operating Systems.",
      cs: "Specializace na pocitacove site. Dokonceny kurzy CCNA 1-3 a Cisco Network Security. Ziskana maturita z Programovani, Siti a Operacnich systemu.",
    },
    tags: ["CCNA 1-3", "Cisco Security", "Programming", "Networks", "Operating Systems"],
  },
];
