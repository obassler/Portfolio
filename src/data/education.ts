type T = { en: string; cs: string };

export interface EducationEntry {
  school: T;
  programme: T;
  period: T;
  note?: T;
}

export const education: EducationEntry[] = [
  {
    school: { en: "University of Ostrava, Faculty of Science", cs: "Ostravská univerzita, Přírodovědecká fakulta" },
    programme: { en: "Bachelor's, Applied Informatics: Software Systems", cs: "Bakalářské studium, Aplikovaná informatika: Softwarové systémy" },
    period: { en: "2023 – now", cs: "2023 – dosud" },
    note: { en: "Finishing the thesis on loss landscapes in neural networks.", cs: "Dokončuji bakalářskou práci o ztrátových krajinách neuronových sítí." },
  },
  {
    school: { en: "Secondary School of Information Technologies, Frýdek-Místek", cs: "Střední škola informačních technologií, Frýdek-Místek" },
    programme: { en: "Computer Networks, Maturita", cs: "Počítačové sítě, maturita" },
    period: { en: "2019 – 2023", cs: "2019 – 2023" },
  },
];

export const certificates: string[] = [
  "Cisco CCNA 1",
  "Cisco CCNA 3",
  "Cisco Network Security",
  "Cisco Internet of Things",
  "Cisco Linux",
];
