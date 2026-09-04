# Portfolio BTS SIO — épreuve E5

Portfolio de professionnalisation de Florian Gagnebien, livrable de l'épreuve E5
« Support et mise à disposition de services informatiques » du BTS SIO.

Le site retrace le parcours de professionnalisation : réalisations
professionnelles vécues en entreprise et en formation, compétences du
référentiel mobilisées, éléments de preuve, veille technologique et juridique,
et projet professionnel.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # export statique dans out/
npm run lint
```

## Structure

Le contenu est séparé du rendu : tout se modifie dans `src/data/`, sans toucher
aux pages.

| Fichier | Contenu |
| --- | --- |
| `src/data/profil.ts` | Identité, formation, expériences, langues — alimente l'accueil et le CV |
| `src/data/competences.ts` | Les 6 domaines du référentiel E5 et leurs compétences (`1.1`, `2.3`, …) |
| `src/data/realisations.ts` | Les fiches de réalisations, avec les codes de compétences et les preuves |
| `src/data/veille.ts` | Sujet de veille, méthode, sources et synthèses |
| `src/data/projet.ts` | Projet professionnel, identité numérique, environnement d'apprentissage |

Les pages (`src/app/`) croisent automatiquement ces données : une réalisation
qui déclare la compétence `2.1` apparaît sur la page du domaine 2.

## Ajouter une réalisation

1. Ajouter une entrée dans `realisations` (`src/data/realisations.ts`).
2. Renseigner `situation`, `demarche`, `bilan` — le jury attend du concret et du recul.
3. Lister les codes de compétences mobilisées dans `competences`.
4. Déposer les preuves dans `public/preuves/` et les référencer via `preuves[].href`.
5. Retirer `brouillon: true` une fois la fiche finalisée.

## Déploiement (Vercel)

1. Sur [vercel.com](https://vercel.com), se connecter avec le compte GitHub.
2. « Add New… › Project », importer le dépôt `site123`.
3. Vercel détecte Next.js : framework, commande de build (`next build`) et
   répertoire de sortie sont remplis automatiquement — ne rien changer.
4. « Deploy ». Le site est en ligne sur `https://<projet>.vercel.app`.

Aucune variable d'environnement n'est nécessaire : tout le contenu est dans le
code. Ensuite, chaque push sur `main` redéploie la production, et chaque autre
branche obtient une URL de prévisualisation.
