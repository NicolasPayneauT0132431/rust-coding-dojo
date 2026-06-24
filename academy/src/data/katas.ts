export type KataDifficulty = "beginner" | "intermediate" | "expert";
export type KataType = "exercise" | "project";

export interface Kata {
  id: string;
  title: string;
  description: string;
  difficulty: KataDifficulty;
  duration: string;
  path: string;
  topics: string[];
  type: KataType;
  order: number;
}

export interface KataLevel {
  id: string;
  name: string;
  description: string;
  katas: Kata[];
}

export const kataLevels: KataLevel[] = [
  {
    id: "setup",
    name: "Mise en place",
    description: "Installation de Rust, découverte de Cargo et du compilateur.",
    katas: [
      {
        id: "install",
        title: "Setting up Rust Environment",
        description: "Installer Rust, configurer l'environnement de développement et compiler son premier programme.",
        difficulty: "beginner",
        duration: "30 min",
        path: "katas/00-setup/00-install.md",
        topics: ["setup", "install", "rustup", "rustc", "cargo"],
        type: "exercise",
        order: 1,
      },
      {
        id: "cargo",
        title: "Cargo Setup and Usage",
        description: "Maîtriser Cargo : création de projet, build, test, dépendances et publication.",
        difficulty: "beginner",
        duration: "30 min",
        path: "katas/00-setup/01-cargo.md",
        topics: ["setup", "cargo", "build", "dependencies"],
        type: "exercise",
        order: 2,
      },
      {
        id: "compiler",
        title: "Exploring the Rust Compiler",
        description: "Plonger dans le fonctionnement interne du compilateur Rust et ses optimisations.",
        difficulty: "intermediate",
        duration: "45 min",
        path: "katas/00-setup/02-compiler.md",
        topics: ["setup", "compiler", "rustc", "optimization"],
        type: "exercise",
        order: 3,
      },
    ],
  },
  {
    id: "starter",
    name: "Les bases",
    description: "Variables, contrôle de flux, boucles, fonctions et premiers projets Rust.",
    katas: [
      {
        id: "rustward-sword",
        title: "Rustward Sword: The Great Programming Quest",
        description: "Aidez Link à traverser la forêt en relevant des défis Rust : variables, conditions, boucles et fonctions.",
        difficulty: "beginner",
        duration: "30 min",
        path: "katas/01-starter/00-rustward-sword",
        topics: ["variables", "control flow", "loops", "functions"],
        type: "project",
        order: 1,
      },
      {
        id: "roman-numerals",
        title: "Roman Numerals",
        description: "Implémenter la conversion de nombres arabes en chiffres romains avec les traits From et Display.",
        difficulty: "beginner",
        duration: "45-60 min",
        path: "katas/01-starter/01-roman-numerals",
        topics: ["traits", "From", "Display", "struct", "unit tests"],
        type: "project",
        order: 2,
      },
      {
        id: "rpn-calculator",
        title: "Text Based RPN Calculator",
        description: "Construire une calculatrice en ligne de commande utilisant la notation polonaise inversée (RPN).",
        difficulty: "beginner",
        duration: "45-60 min",
        path: "katas/01-starter/02-rpn_calculator",
        topics: ["RPN", "calculator", "CLI", "control flow"],
        type: "project",
        order: 3,
      },
      {
        id: "ownership-borrowing",
        title: "Ownership Borrowing",
        description: "Comprendre les concepts fondamentaux de possession (ownership) et d'emprunt (borrowing) en Rust.",
        difficulty: "intermediate",
        duration: "60 min",
        path: "katas/01-starter/03-ownership-borrowing",
        topics: ["ownership", "borrowing", "memory management"],
        type: "project",
        order: 4,
      },
    ],
  },
  {
    id: "structure",
    name: "Structures de données",
    description: "String, structures, énumérations, pattern matching et traits avancés.",
    katas: [
      {
        id: "basics",
        title: "Basics",
        description: "Introduction aux structures de données et aux traits en Rust : struct, enum, Option, pattern matching, String et Vec.",
        difficulty: "intermediate",
        duration: "90 min",
        path: "katas/02-structure/00-basics",
        topics: ["struct", "enum", "traits", "pattern matching", "strings", "vectors"],
        type: "project",
        order: 1,
      },
      {
        id: "smart-pointers",
        title: "Smart Pointers",
        description: "Maîtriser Box, Rc, Arc, RefCell et Mutex pour la gestion avancée de la mémoire.",
        difficulty: "intermediate",
        duration: "90 min",
        path: "katas/02-structure/01-smart-pointers",
        topics: ["Box", "Rc", "Arc", "RefCell", "Mutex", "smart pointers"],
        type: "project",
        order: 2,
      },
    ],
  },
  {
    id: "advanced",
    name: "Avancé",
    description: "Concurrence, génériques, durées de vie et macros.",
    katas: [],
  },
];
