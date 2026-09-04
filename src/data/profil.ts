export const profil = {
  prenom: "Florian",
  nom: "Gagnebien",
  titre: "Étudiant en BTS SIO — Services Informatiques aux Organisations",
  accroche:
    "Portfolio de professionnalisation présenté dans le cadre de l'épreuve E5 « Support et mise à disposition de services informatiques » du BTS SIO.",
  email: "flogagnebien611@gmail.com",
  telephone: "06 33 79 05 42",
  ville: "Alençon",
  permis: "Permis B",
  langues: [
    { langue: "Français", niveau: "Langue maternelle" },
    { langue: "Anglais", niveau: "B1" },
  ],
  formations: [
    {
      intitule: "BTS SIO — Services Informatiques aux Organisations",
      etablissement: "CaenSup Sainte Ursule",
      periode: "2025 – 2027",
      enCours: true,
    },
    {
      intitule: "Bac Pro Systèmes Numériques — option RISC",
      etablissement: "Lycée Charles Tellier, Condé-en-Normandie",
      periode: "2022 – 2025",
      enCours: false,
    },
  ],
  experiences: [
    {
      poste: "Employé polyvalent (intérim Adecco)",
      organisation: "Carrefour",
      periode: "Juillet 2025 – Août 2025",
      missions: ["Gestion de caisse et encaissement", "Mise en rayon et facing", "Accueil et orientation des clients"],
    },
    {
      poste: "Stagiaire informatique et réseaux (22 semaines, Bac Pro)",
      organisation: "WiConnect · Amix Informatique · MPO France · Linoetec · Mairie d'Alençon",
      periode: "2022 – 2025",
      missions: [
        "Assistance technique et support aux utilisateurs (WiConnect, Amix Informatique)",
        "Maintenance et configuration de systèmes informatiques (MPO France, Linoetec)",
        "Installation de postes et gestion du réseau local (Mairie d'Alençon)",
      ],
    },
  ],
  savoirEtre: ["Communication claire", "Organisation rigoureuse", "Esprit d'équipe", "Ponctualité", "Autonomie", "Réactivité"],
  interets: [
    "Boxe thaï (2 ans)",
    "Échecs (8 ans)",
    "Automatisation avec n8n (conception et vente de solutions)",
  ],
} as const;
