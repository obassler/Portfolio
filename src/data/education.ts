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
      cs: "Bakalářské studium — Aplikovaná informatika",
    },
    institution: {
      en: "University of Ostrava, Faculty of Science",
      cs: "Ostravská univerzita, Přírodovědecká fakulta",
    },
    period: "2023 - 2026",
    description: {
      en: "Studying algorithms, data structures, software engineering, databases, computer networks, computer graphics, AI fundamentals, and more. Bachelor's thesis on Loss Landscapes in Neural Networks.",
      cs: "Studium algoritmů, datových struktur, softwarového inženýrství, databází, počítačových sítí, počítačové grafiky, základů AI a dalšího. Bakalářská práce na téma Loss Landscapes v neuronových sítích.",
    },
    tags: ["Algorithms", "Software Engineering", "Databases", "Networks", "AI", "Computer Graphics"],
  },
  {
    title: {
      en: "High School — Computer Networks",
      cs: "Střední škola — Počítačové sítě",
    },
    institution: {
      en: "High School (Maturita)",
      cs: "Střední škola (Maturita)",
    },
    period: "2019 - 2023",
    description: {
      en: "Specialized in computer networks. Completed CCNA 1-3 and Cisco Network Security courses. Earned Maturita certification in Programming, Networks, and Operating Systems.",
      cs: "Specializace na počítačové sítě. Dokončeny kurzy CCNA 1-3 a Cisco Network Security. Získána maturita z Programování, Sítí a Operačních systémů.",
    },
    tags: ["CCNA 1-3", "Cisco Security", "Programming", "Networks", "Operating Systems"],
  },
];
