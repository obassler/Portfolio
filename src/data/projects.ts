export interface Project {
  slug: string;
  title: { en: string; cs: string };
  description: { en: string; cs: string };
  tags: string[];
  github?: string;
  live?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "loss-landscapes",
    title: {
      en: "Loss Landscapes in Neural Networks",
      cs: "Loss Landscapes v neuronových sítích",
    },
    description: {
      en: "Bachelor's thesis exploring loss landscape visualization in neural networks. Trained 100 CNN models on FashionMNIST with different random seeds and analyzed prediction correlation matrices to study how different minima relate to each other. Built with PyTorch, PyTorch Lightning, Hydra, and Weights & Biases.",
      cs: "Bakalářská práce zkoumající vizualizaci loss landscape v neuronových sítích. Natrénováno 100 CNN modelů na FashionMNIST s různými náhodnými seedy a analyzovány korelační matice predikcí pro studium vztahů mezi různými minimy. Vytvořeno pomocí PyTorch, PyTorch Lightning, Hydra a Weights & Biases.",
    },
    tags: ["Python", "PyTorch", "Machine Learning", "CNN", "W&B"],
    github: "https://github.com/obassler/FashionMnist-OSU",
    featured: true,
  },
  {
    slug: "ghost-stories-vr",
    title: {
      en: "Ghost Stories VR",
      cs: "Ghost Stories VR",
    },
    description: {
      en: "A VR horror game built in C# featuring immersive 3D environments and interactive gameplay mechanics. Combines game development skills with virtual reality technology to create an engaging horror experience.",
      cs: "VR hororová hra vytvořená v C# s pohlcujícím 3D prostředím a interaktivními herními mechanikami. Spojuje dovednosti v herním vývoji s technologií virtuální reality pro vytvoření poutavého hororového zážitku.",
    },
    tags: ["C#", "VR", "Unity", "Game Dev", "3D"],
    github: "https://github.com/obassler/ghoststories",
    featured: true,
  },
  {
    slug: "chat-app",
    title: {
      en: "Real-Time Chat Application",
      cs: "Chatovací aplikace v reálném čase",
    },
    description: {
      en: "A real-time chat application built in Java as part of the Software Engineering course. Developed in collaboration with a classmate, featuring multi-user messaging with a client-server architecture.",
      cs: "Chatovací aplikace v reálném čase vytvořená v Javě jako součást předmětu Softwarové inženýrství. Vyvinuta ve spolupráci se spolužákem, obsahuje zasílání zpráv více uživatelům s architekturou klient-server.",
    },
    tags: ["Java", "Networking", "Socket Programming"],
    github: "https://github.com/LukiMori/7SWI2_Projekt",
    featured: true,
  },
  {
    slug: "dnd-dm-panel",
    title: {
      en: "D&D Dungeon Master Control Panel",
      cs: "D&D Ovládací panel Dungeon Mastera",
    },
    description: {
      en: "A web-based Dungeons & Dragons Dungeon Master control panel built with JavaScript. Provides DMs with tools to manage and run tabletop RPG sessions effectively.",
      cs: "Webový ovládací panel pro Dungeon Mastera v Dungeons & Dragons vytvořený v JavaScriptu. Poskytuje DM nástrojům pro správu a vedení stolních RPG sezení.",
    },
    tags: ["JavaScript", "HTML", "CSS", "Web App"],
    github: "https://github.com/obassler/SWI-project",
    featured: true,
  },
  {
    slug: "text-venture",
    title: {
      en: "Text Adventure",
      cs: "Textová adventura",
    },
    description: {
      en: "A text-based adventure game built in Java with interactive story branching and player choices.",
      cs: "Textová adventura vytvořená v Javě s interaktivním větvením příběhu a volbami hráče.",
    },
    tags: ["Java", "Game Dev", "CLI"],
    github: "https://github.com/obassler/textVenture",
    featured: true,
  },
  {
    slug: "notes-app",
    title: {
      en: "Notes App",
      cs: "Aplikace poznámek",
    },
    description: {
      en: "A mobile notes application built with Kotlin for Android. Allows users to create, edit, and organize their notes.",
      cs: "Mobilní aplikace poznámek vytvořená v Kotlinu pro Android. Umožňuje uživatelům vytvářet, upravovat a organizovat své poznámky.",
    },
    tags: ["Kotlin", "Android", "Mobile"],
    github: "https://github.com/obassler/NotesApp",
    featured: false,
  },
  {
    slug: "quadratic-calc",
    title: {
      en: "Quadratic Formula Calculator",
      cs: "Kalkulačka kvadratických rovnic",
    },
    description: {
      en: "A simple Android application built with Kotlin for calculating quadratic formulas.",
      cs: "Jednoduchá Android aplikace vytvořená v Kotlinu pro výpočet kvadratických rovnic.",
    },
    tags: ["Kotlin", "Android", "Mobile"],
    github: "https://github.com/obassler/SimpleAppToCalcQuadraticFormula",
    featured: false,
  },
  {
    slug: "apple-app",
    title: {
      en: "Apple App",
      cs: "Apple App",
    },
    description: {
      en: "A mobile application project exploring app development concepts.",
      cs: "Mobilní aplikace zkoumající koncepty vývoje aplikací.",
    },
    tags: ["Mobile", "App Dev"],
    github: "https://github.com/obassler/AppleApp",
    featured: false,
  },
];
