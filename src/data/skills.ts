type T = { en: string; cs: string };

export interface SkillGroup {
  label: T;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: { en: "Languages", cs: "Jazyky" },
    items: ["Java", "TypeScript", "JavaScript", "Python", "C#", "Kotlin", "SQL"],
  },
  {
    label: { en: "Backend", cs: "Backend" },
    items: ["Spring Boot", "Spring Security + JWT", "JPA / Hibernate", "Node.js", "REST APIs", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    label: { en: "Frontend", cs: "Frontend" },
    items: ["React", "Angular", "Vue.js", "Next.js", "Astro", "Tailwind CSS", "HTML & CSS"],
  },
  {
    label: { en: "Testing & tooling", cs: "Testování a nástroje" },
    items: ["Playwright", "Smoke & manual testing", "Git", "Docker", "Linux", "Maven", "Vite"],
  },
  {
    label: { en: "Machine learning", cs: "Strojové učení" },
    items: ["PyTorch", "PyTorch Lightning", "Hydra", "Optuna", "Weights & Biases"],
  },
  {
    label: { en: "Games & 3D", cs: "Hry a 3D" },
    items: ["Unity", "VR (OpenXR)", "Cinema 4D"],
  },
  {
    label: { en: "Networks", cs: "Sítě" },
    items: ["Cisco CCNA 1 & 3", "Network Security", "Linux servers", "NAS, NAT, DNS"],
  },
];
