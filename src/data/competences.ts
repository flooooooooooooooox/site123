export type Competence = {
  code: string;
  libelle: string;
};

export type Domaine = {
  slug: string;
  numero: number;
  titre: string;
  resume: string;
  competences: Competence[];
};

/**
 * Référentiel de l'épreuve E5 « Support et mise à disposition de services
 * informatiques » (BTS SIO). Les libellés sont ceux du référentiel officiel.
 */
export const domaines: Domaine[] = [
  {
    slug: "gerer-le-patrimoine-informatique",
    numero: 1,
    titre: "Gérer le patrimoine informatique",
    resume:
      "Recenser les ressources, encadrer les habilitations, garantir la continuité de service et les sauvegardes.",
    competences: [
      { code: "1.1", libelle: "Recenser et identifier les ressources numériques" },
      { code: "1.2", libelle: "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique" },
      { code: "1.3", libelle: "Mettre en place et vérifier les niveaux d'habilitation associés à un service" },
      { code: "1.4", libelle: "Vérifier les conditions de la continuité d'un service informatique" },
      { code: "1.5", libelle: "Gérer des sauvegardes" },
      { code: "1.6", libelle: "Vérifier le respect des règles d'utilisation des ressources numériques" },
    ],
  },
  {
    slug: "repondre-aux-incidents-et-demandes",
    numero: 2,
    titre: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    resume:
      "Collecter et qualifier les demandes des utilisateurs, les traiter sur le périmètre système, réseau et applicatif.",
    competences: [
      { code: "2.1", libelle: "Collecter, suivre et orienter des demandes" },
      { code: "2.2", libelle: "Traiter des demandes concernant les services réseau et système" },
      { code: "2.3", libelle: "Traiter des demandes concernant les applications" },
    ],
  },
  {
    slug: "developper-la-presence-en-ligne",
    numero: 3,
    titre: "Développer la présence en ligne de l'organisation",
    resume:
      "Valoriser l'image de l'organisation sur les médias numériques, référencer ses services en ligne et faire évoluer son site web.",
    competences: [
      {
        code: "3.1",
        libelle:
          "Participer à la valorisation de l'image de l'organisation sur les médias numériques en tenant compte du cadre juridique et des enjeux économiques",
      },
      { code: "3.2", libelle: "Référencer les services en ligne de l'organisation et mesurer leur visibilité" },
      { code: "3.3", libelle: "Participer à l'évolution d'un site web exploitant les données de l'organisation" },
    ],
  },
  {
    slug: "travailler-en-mode-projet",
    numero: 4,
    titre: "Travailler en mode projet",
    resume:
      "Analyser les objectifs d'un projet, planifier les activités et suivre les indicateurs pour analyser les écarts.",
    competences: [
      { code: "4.1", libelle: "Analyser les objectifs et les modalités d'organisation d'un projet" },
      { code: "4.2", libelle: "Planifier les activités" },
      { code: "4.3", libelle: "Évaluer les indicateurs de suivi d'un projet et analyser les écarts" },
    ],
  },
  {
    slug: "mettre-a-disposition-un-service",
    numero: 5,
    titre: "Mettre à disposition des utilisateurs un service informatique",
    resume:
      "Tester, déployer un service et accompagner les utilisateurs dans sa prise en main.",
    competences: [
      { code: "5.1", libelle: "Réaliser les tests d'intégration et d'acceptation d'un service" },
      { code: "5.2", libelle: "Déployer un service" },
      { code: "5.3", libelle: "Accompagner les utilisateurs dans la mise en place d'un service" },
    ],
  },
  {
    slug: "organiser-son-developpement-professionnel",
    numero: 6,
    titre: "Organiser son développement professionnel",
    resume:
      "Construire son environnement d'apprentissage, mener sa veille, gérer son identité et son projet professionnels.",
    competences: [
      { code: "6.1", libelle: "Mettre en place son environnement d'apprentissage personnel" },
      { code: "6.2", libelle: "Mettre en œuvre des outils et stratégies de veille informationnelle" },
      { code: "6.3", libelle: "Gérer son identité professionnelle" },
      { code: "6.4", libelle: "Développer son projet professionnel" },
    ],
  },
];

export const domaineParSlug = (slug: string) => domaines.find((d) => d.slug === slug);

export const competenceParCode = (code: string) => {
  for (const d of domaines) {
    const c = d.competences.find((x) => x.code === code);
    if (c) return { domaine: d, competence: c };
  }
  return undefined;
};
