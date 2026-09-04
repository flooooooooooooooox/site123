import type { Metadata } from "next";
import { Titre } from "@/components/Titre";
import { projetProfessionnel as p } from "@/data/projet";

export const metadata: Metadata = {
  title: "Projet professionnel",
  description:
    "Mon projet professionnel après le BTS SIO, mon identité numérique et mon environnement d'apprentissage personnel.",
};

export default function PageProjet() {
  return (
    <>
      <Titre
        surtitre="Domaine 6 — Organiser son développement professionnel"
        titre="Projet professionnel"
        chapo={p.cap}
      />

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-marine">Mes objectifs</h2>
        <div className="space-y-4">
          {p.apresBts.map((etape) => (
            <div key={etape.horizon} className="rounded-xl border border-bordure bg-carte p-6">
              <h3 className="font-semibold">{etape.horizon}</h3>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed marker:text-marine">
                {etape.objectifs.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-marine">Mon identité professionnelle en ligne</h2>
        <ul className="divide-y divide-bordure rounded-xl border border-bordure bg-carte">
          {p.identiteNumerique.map((i) => (
            <li key={i.libelle} className="px-5 py-4">
              <p className="font-medium">
                {i.href ? (
                  <a href={i.href} className="text-marine hover:underline">
                    {i.libelle}
                  </a>
                ) : (
                  i.libelle
                )}
              </p>
              <p className="mt-1 text-sm text-doux">{i.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-marine">
          Mon environnement d&apos;apprentissage personnel
        </h2>
        <ul className="list-disc space-y-1.5 pl-5 leading-relaxed marker:text-marine">
          {p.environnementApprentissage.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
