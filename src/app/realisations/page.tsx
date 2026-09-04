import Link from "next/link";
import type { Metadata } from "next";
import { Titre } from "@/components/Titre";
import { BadgeCompetence } from "@/components/BadgeCompetence";
import { realisations } from "@/data/realisations";

export const metadata: Metadata = {
  title: "Réalisations professionnelles",
  description:
    "Les réalisations professionnelles vécues en entreprise et en formation, avec les compétences E5 mobilisées et les éléments de preuve.",
};

export default function PageRealisations() {
  const enEntreprise = realisations.filter((r) => r.contexte === "entreprise");
  const enFormation = realisations.filter((r) => r.contexte === "formation");

  return (
    <>
      <Titre
        surtitre="Parcours de professionnalisation"
        titre="Réalisations professionnelles"
        chapo="Chaque fiche décrit la situation de départ, la démarche suivie, le bilan, les compétences mobilisées et les éléments de preuve associés."
      />

      {[
        { titre: "En entreprise", items: enEntreprise },
        { titre: "En formation", items: enFormation },
      ].map((groupe) => (
        <section key={groupe.titre} className="mb-12">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-marine-clair">
            {groupe.titre}
          </h2>
          <div className="space-y-4">
            {groupe.items.map((r) => (
              <article key={r.slug} className="rounded-xl border border-bordure bg-carte p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    <Link href={`/realisations/${r.slug}`} className="hover:text-marine">
                      {r.titre}
                    </Link>
                  </h3>
                  <span className="text-xs text-doux">{r.annee}</span>
                </div>
                <p className="mt-1 text-sm text-doux">
                  {r.organisation} · {r.periode}
                </p>
                <p className="mt-3 leading-relaxed">{r.resume}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {r.competences.map((c) => (
                    <BadgeCompetence key={c} code={c} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
