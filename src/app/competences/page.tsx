import Link from "next/link";
import type { Metadata } from "next";
import { Titre } from "@/components/Titre";
import { domaines } from "@/data/competences";
import { realisationsParDomaine } from "@/data/realisations";

export const metadata: Metadata = {
  title: "Compétences",
  description: "Les six domaines de compétences de l'épreuve E5 et les réalisations qui les couvrent.",
};

export default function PageCompetences() {
  return (
    <>
      <Titre
        surtitre="Référentiel E5"
        titre="Compétences"
        chapo="L'épreuve évalue six domaines de compétences. Chaque domaine renvoie aux réalisations professionnelles qui l'ont mobilisé."
      />
      <div className="space-y-4">
        {domaines.map((d) => {
          const nb = realisationsParDomaine(d.numero).length;
          return (
            <Link
              key={d.slug}
              href={`/competences/${d.slug}`}
              className="block rounded-xl border border-bordure bg-carte p-6 transition hover:border-marine"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold">
                  <span className="text-marine-clair">{d.numero}.</span> {d.titre}
                </h2>
                <span className="text-xs text-doux">
                  {nb} réalisation{nb > 1 ? "s" : ""}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-doux">{d.resume}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}
