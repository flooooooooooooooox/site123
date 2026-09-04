export type Preuve = {
  /** Ce que le jury peut consulter : capture, procédure, schéma, extrait de code… */
  libelle: string;
  /** Chemin dans /public (ex. "/preuves/ticket-glpi.png") ou URL externe. Laisser vide tant que la preuve n'est pas déposée. */
  href?: string;
};

export type Realisation = {
  slug: string;
  titre: string;
  /** Où la réalisation a été vécue. */
  contexte: "entreprise" | "formation";
  organisation: string;
  annee: "1re année" | "2e année" | "Bac Pro";
  periode: string;
  /** Phrase d'accroche affichée dans la liste. */
  resume: string;
  /** Le besoin de départ : qui demande quoi, et pourquoi. */
  situation: string;
  /** Ce que j'ai fait, concrètement. */
  demarche: string[];
  /** Le résultat obtenu et ce que j'en retire. */
  bilan: string;
  outils: string[];
  /** Codes de compétences du référentiel E5 mobilisées (voir competences.ts). */
  competences: string[];
  preuves: Preuve[];
  /** true tant que la fiche n'est pas finalisée : un bandeau le signale. */
  brouillon?: boolean;
};

/**
 * Fiches de réalisations professionnelles.
 *
 * Chaque fiche doit rester factuelle : le jury évalue la réalité, la qualité et
 * la pertinence des travaux. Compléter `situation`, `demarche`, `bilan` et
 * surtout `preuves` avant l'oral, puis retirer `brouillon`.
 */
export const realisations: Realisation[] = [
  {
    slug: "support-utilisateurs-wiconnect",
    titre: "Assistance technique et support aux utilisateurs",
    contexte: "entreprise",
    organisation: "WiConnect · Amix Informatique",
    annee: "Bac Pro",
    periode: "Stage — 2023",
    resume:
      "Prise en charge des demandes d'assistance de premier niveau : qualification du besoin, diagnostic, résolution et compte rendu à l'utilisateur.",
    situation:
      "À compléter : décrire l'organisation, son parc, le canal par lequel arrivaient les demandes et le rôle qui m'était confié.",
    demarche: [
      "À compléter : comment je collectais et qualifiais une demande.",
      "À compléter : la méthode de diagnostic appliquée (questions posées, tests, isolement de la panne).",
      "À compléter : la résolution, l'escalade éventuelle et la clôture avec l'utilisateur.",
    ],
    bilan:
      "À compléter : ce qui a été résolu, ce qui a été transmis, et ce que je ferais différemment aujourd'hui.",
    outils: ["Windows", "Outils de prise en main à distance", "Suivi des demandes"],
    competences: ["2.1", "2.2", "2.3", "5.3"],
    preuves: [{ libelle: "Exemple de ticket traité (anonymisé)" }, { libelle: "Procédure rédigée pour l'utilisateur" }],
    brouillon: true,
  },
  {
    slug: "maintenance-postes-mpo-linoetec",
    titre: "Maintenance et configuration de systèmes informatiques",
    contexte: "entreprise",
    organisation: "MPO France · Linoetec",
    annee: "Bac Pro",
    periode: "Stage — 2024",
    resume:
      "Préparation, configuration et maintenance de postes de travail, dans le respect des standards de configuration de l'entreprise.",
    situation: "À compléter : le parc concerné, le besoin exprimé et le cadre d'intervention.",
    demarche: [
      "À compléter : recensement et identification des matériels pris en charge.",
      "À compléter : masterisation / configuration appliquée et référentiel suivi.",
      "À compléter : vérifications réalisées avant remise en service.",
    ],
    bilan: "À compléter : nombre de postes traités, délai, retour de l'entreprise.",
    outils: ["Windows", "Inventaire du parc", "Outils de déploiement"],
    competences: ["1.1", "1.2", "5.1", "5.2"],
    preuves: [{ libelle: "Fiche d'inventaire du parc" }, { libelle: "Procédure de configuration type" }],
    brouillon: true,
  },
  {
    slug: "postes-et-reseau-local-mairie-alencon",
    titre: "Installation de postes et gestion du réseau local",
    contexte: "entreprise",
    organisation: "Mairie d'Alençon",
    annee: "Bac Pro",
    periode: "Stage — 2024",
    resume:
      "Installation de postes de travail et interventions sur le réseau local d'une collectivité, avec les contraintes de continuité de service d'un service public.",
    situation:
      "À compléter : le service concerné, les utilisateurs, les contraintes de disponibilité.",
    demarche: [
      "À compléter : raccordement et paramétrage réseau des postes.",
      "À compléter : vérification des habilitations et des accès accordés.",
      "À compléter : accompagnement des agents à la prise en main.",
    ],
    bilan: "À compléter : service rendu, incidents évités, points de vigilance identifiés.",
    outils: ["Commutateurs", "Adressage IP", "Annuaire / comptes utilisateurs"],
    competences: ["1.1", "1.3", "1.4", "5.2", "5.3"],
    preuves: [{ libelle: "Schéma du réseau local (anonymisé)" }, { libelle: "Plan d'adressage" }],
    brouillon: true,
  },
  {
    slug: "portfolio-e5",
    titre: "Conception et mise en ligne de ce portfolio",
    contexte: "formation",
    organisation: "BTS SIO — CaenSup Sainte Ursule",
    annee: "1re année",
    periode: "2025 – 2026",
    resume:
      "Développement en Next.js et mise en ligne du portfolio de professionnalisation : structuration du contenu, gestion de l'identité professionnelle et référencement.",
    situation:
      "L'épreuve E5 exige un portfolio en ligne dont je suis seul responsable de la disponibilité. Il devait rassembler mon parcours, mes réalisations, mes preuves et ma veille, et rester consultable pendant l'échange avec le jury.",
    demarche: [
      "Analyse du besoin à partir du référentiel E5 et choix d'une arborescence par domaine de compétence.",
      "Développement d'un site statique Next.js / TypeScript, contenu séparé du rendu dans des fichiers de données typés.",
      "Travail sur les métadonnées et le référencement des pages afin de rendre le site visible et identifiable.",
      "Déploiement automatisé et vérification de la disponibilité du site.",
    ],
    bilan:
      "Le portfolio est en ligne et évolue à chaque nouvelle réalisation. À compléter avec l'URL de production et les indicateurs de visibilité relevés.",
    outils: ["Next.js", "TypeScript", "Tailwind CSS", "Git / GitHub", "GitHub Pages"],
    competences: ["3.1", "3.2", "3.3", "4.1", "4.2", "5.2", "6.3"],
    preuves: [
      { libelle: "Dépôt du code source", href: "https://github.com/flooooooooooooooox/site123" },
      { libelle: "Historique des commits", href: "https://github.com/flooooooooooooooox/site123/commits" },
    ],
  },
  {
    slug: "automatisation-n8n",
    titre: "Automatisation de processus avec n8n",
    contexte: "formation",
    organisation: "Projet personnel",
    annee: "1re année",
    periode: "2025",
    resume:
      "Conception de scénarios d'automatisation avec n8n : analyse du besoin, construction des flux, tests et mise à disposition auprès de l'utilisateur final.",
    situation: "À compléter : le besoin métier automatisé et pour qui.",
    demarche: [
      "À compléter : analyse du processus manuel existant.",
      "À compléter : construction du workflow n8n et gestion des identifiants / accès.",
      "À compléter : tests, mise en production et suivi.",
    ],
    bilan: "À compléter : temps gagné, fiabilité constatée, limites rencontrées.",
    outils: ["n8n", "API REST", "Webhooks"],
    competences: ["4.1", "4.2", "5.1", "5.2", "5.3"],
    preuves: [{ libelle: "Capture du workflow" }, { libelle: "Journal d'exécution" }],
    brouillon: true,
  },
];

export const realisationParSlug = (slug: string) => realisations.find((r) => r.slug === slug);

export const realisationsParCompetence = (code: string) =>
  realisations.filter((r) => r.competences.includes(code));

export const realisationsParDomaine = (numero: number) =>
  realisations.filter((r) => r.competences.some((c) => c.startsWith(`${numero}.`)));
