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
      cs: "Loss Landscapes v neuronovych sitich",
    },
    description: {
      en: "Bachelor's thesis exploring loss landscape visualization in neural networks. Trained 100 CNN models on FashionMNIST with different random seeds and analyzed prediction correlation matrices to study how different minima relate to each other. Built with PyTorch, PyTorch Lightning, Hydra, and Weights & Biases.",
      cs: "Bakalarska prace zkoumajici vizualizaci loss landscape v neuronovych sitich. Natrenovano 100 CNN modelu na FashionMNIST s ruznymi nahodnymi seedy a analyzovany korelacni matice predikci pro studium vztahu mezi ruznymi minimy. Vytvorneno pomoci PyTorch, PyTorch Lightning, Hydra a Weights & Biases.",
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
      cs: "VR horova hra vytvorena v C# s pohlcujicim 3D prostredim a interaktivnimi hernami mechanikami. Spojuje dovednosti v hernim vyvoji s technologii virtualni reality pro vytvoreni poutaveho horoveho zazitku.",
    },
    tags: ["C#", "VR", "Unity", "Game Dev", "3D"],
    github: "https://github.com/obassler/ghoststories",
    featured: true,
  },
  {
    slug: "chat-app",
    title: {
      en: "Real-Time Chat Application",
      cs: "Chatovaci aplikace v realnem case",
    },
    description: {
      en: "A real-time chat application built in Java as part of the Software Engineering course. Features multi-user messaging with a client-server architecture.",
      cs: "Chatovaci aplikace v realnem case vytvorena v Jave jako soucast predmetu Softwarove inzenyrstvi. Obsahuje zasislani zprav vice uzivateli s architekturou klient-server.",
    },
    tags: ["Java", "Networking", "Socket Programming"],
    github: "https://github.com/obassler/SWI2-ChatAPP",
    featured: true,
  },
  {
    slug: "dnd-generator",
    title: {
      en: "D&D Character Generator",
      cs: "D&D Generator postav",
    },
    description: {
      en: "A web-based Dungeons & Dragons character generator built with JavaScript. Allows users to create and customize characters for tabletop RPG sessions.",
      cs: "Webovy generator postav pro Dungeons & Dragons vytvoreny v JavaScriptu. Umoznuje uzivatelum vytvaret a prizpusobovat postavy pro stolni RPG sezeni.",
    },
    tags: ["JavaScript", "HTML", "CSS", "Web App"],
    github: "https://github.com/obassler/SWI-project",
    featured: true,
  },
  {
    slug: "tales-of-pango",
    title: {
      en: "Tales of Pango",
      cs: "Tales of Pango",
    },
    description: {
      en: "A Java-based game project featuring adventure gameplay mechanics and story-driven elements.",
      cs: "Herni projekt v Jave s dobrodruznou hernou mechanikou a pribehvymi prvky.",
    },
    tags: ["Java", "Game Dev", "OOP"],
    github: "https://github.com/obassler/TalesofPango",
    featured: false,
  },
];
