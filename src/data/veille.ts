export type Source = {
  nom: string;
  url: string;
  type: "Site" | "Newsletter" | "Flux RSS" | "Podcast" | "Chaîne vidéo" | "Compte social";
  frequence: string;
  pourquoi: string;
};

export type Synthese = {
  date: string;
  titre: string;
  theme: "Technologique" | "Juridique";
  resume: string;
  impact: string;
  sources: string[];
};

export const sujetVeille = {
  theme: "Sécurité des postes de travail et continuité de service en PME",
  pourquoi:
    "C'est le cœur du métier vers lequel je me dirige : administrer un parc, le maintenir disponible et le protéger. Les menaces et les obligations réglementaires évoluent vite, une veille régulière est donc indispensable.",
  methode: [
    "Agrégation des flux RSS des sources retenues dans un lecteur unique, consulté chaque semaine.",
    "Automatisation avec n8n : les articles correspondant à mes mots-clés sont collectés et regroupés pour relecture.",
    "Rédaction d'une synthèse courte à chaque évolution qui a un impact sur mes pratiques.",
  ],
};

export const sources: Source[] = [
  {
    nom: "CERT-FR — Centre gouvernemental de veille et d'alerte",
    url: "https://www.cert.ssi.gouv.fr/",
    type: "Flux RSS",
    frequence: "Hebdomadaire",
    pourquoi: "Avis et alertes officiels sur les vulnérabilités touchant les systèmes que j'administre.",
  },
  {
    nom: "ANSSI",
    url: "https://cyber.gouv.fr/",
    type: "Site",
    frequence: "Mensuelle",
    pourquoi: "Guides d'hygiène informatique et bonnes pratiques applicables en PME.",
  },
  {
    nom: "CNIL",
    url: "https://www.cnil.fr/",
    type: "Site",
    frequence: "Mensuelle",
    pourquoi: "Veille juridique : RGPD, obligations de l'organisation sur les données personnelles.",
  },
  {
    nom: "Le Monde Informatique",
    url: "https://www.lemondeinformatique.fr/",
    type: "Flux RSS",
    frequence: "Hebdomadaire",
    pourquoi: "Actualité générale du secteur et des acteurs du marché.",
  },
  {
    nom: "Legifrance",
    url: "https://www.legifrance.gouv.fr/",
    type: "Site",
    frequence: "Ponctuelle",
    pourquoi: "Vérification à la source des textes cités dans ma veille juridique.",
  },
];

export const syntheses: Synthese[] = [
  {
    date: "À compléter",
    titre: "À compléter : première synthèse de veille technologique",
    theme: "Technologique",
    resume:
      "À compléter : de quoi parle l'évolution suivie, en quelques phrases et avec mes mots.",
    impact:
      "À compléter : en quoi cela change ma façon de travailler, et le besoin de formation que cela crée pour moi.",
    sources: ["CERT-FR"],
  },
  {
    date: "À compléter",
    titre: "À compléter : première synthèse de veille juridique",
    theme: "Juridique",
    resume: "À compléter : le texte ou la décision suivie et ce qu'elle impose.",
    impact: "À compléter : les conséquences concrètes sur les pratiques de l'organisation.",
    sources: ["CNIL"],
  },
];
