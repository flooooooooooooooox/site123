import Link from "next/link";
import { profil } from "@/data/profil";

const liens = [
  { href: "/", libelle: "Accueil" },
  { href: "/competences", libelle: "Compétences" },
  { href: "/realisations", libelle: "Réalisations" },
  { href: "/veille", libelle: "Veille" },
  { href: "/projet-professionnel", libelle: "Projet professionnel" },
  { href: "/cv", libelle: "CV" },
];

export function Nav() {
  return (
    <header className="border-b border-bordure bg-carte">
      <nav className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight text-marine">
          {profil.prenom} {profil.nom}
        </Link>
        <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-doux">
          {liens.slice(1).map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-marine">
                {l.libelle}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
