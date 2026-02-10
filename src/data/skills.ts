export interface SkillCategory {
  key: string;
  items: Skill[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    key: "languages",
    items: [
      { name: "Java", icon: "simple-icons:oracle" },
      { name: "Python", icon: "simple-icons:python" },
      { name: "C#", icon: "simple-icons:csharp" },
      { name: "JavaScript", icon: "simple-icons:javascript" },
      { name: "Kotlin", icon: "simple-icons:kotlin" },
      { name: "SQL", icon: "simple-icons:postgresql" },
    ],
  },
  {
    key: "frameworks",
    items: [
      { name: "Spring Boot", icon: "simple-icons:springboot" },
      { name: "React", icon: "simple-icons:react" },
      { name: "Vue.js", icon: "simple-icons:vuedotjs" },
      { name: "PyTorch", icon: "simple-icons:pytorch" },
      { name: "Unity", icon: "simple-icons:unity" },
      { name: "Astro", icon: "simple-icons:astro" },
      { name: "Git", icon: "simple-icons:git" },
      { name: "Linux", icon: "simple-icons:linux" },
      { name: "Oracle DB", icon: "simple-icons:oracle" },
    ],
  },
  {
    key: "design",
    items: [
      { name: "Cinema 4D", icon: "simple-icons:cinema4d" },
      { name: "3D Modeling", icon: "lucide:box" },
      { name: "VR Development", icon: "lucide:glasses" },
    ],
  },
  {
    key: "networking",
    items: [
      { name: "CCNA 1-3", icon: "simple-icons:cisco" },
      { name: "Cisco Security", icon: "lucide:shield-check" },
      { name: "DNS", icon: "lucide:globe" },
      { name: "Network Admin", icon: "lucide:network" },
    ],
  },
];
