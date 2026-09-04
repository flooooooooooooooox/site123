import type { Metadata } from "next";
import { Titre } from "@/components/Titre";
import { sujetVeille, sources, syntheses } from "@/data/veille";

export const metadata: Metadata = {
  title: "Veille",
  description:
    "Veille technologique et juridique : sujet suivi, méthode, sources et synthèses, avec l'impact sur mes pratiques professionnelles.",
};

export default function PageVeille() {
  return (
    <>
      <Titre
        surtitre="Domaine 6 — Organiser son développement professionnel"
        titre="Veille technologique et juridique"
        chapo={sujetVeille.theme}
      />

      <section className="mb-12 rounded-xl border border-bordure bg-carte p-6">
        <h2 className="mb-2 font-semibold text-marine">Pourquoi ce sujet</h2>
        <p className="leading-relaxed">{sujetVeille.pourquoi}</p>
        <h3 className="mt-6 mb-2 font-semibold text-marine">Ma méthode</h3>
        <ul className="list-disc space-y-1.5 pl-5 leading-relaxed marker:text-marine">
          {sujetVeille.methode.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold text-marine">Mes sources</h2>
        <div className="overflow-x-auto rounded-xl border border-bordure bg-carte">
          <table className="w-full min-w-[46rem] text-left text-sm">
            <thead className="border-b border-bordure text-xs uppercase tracking-wider text-doux">
              <tr>
                <th className="px-5 py-3 font-medium">Source</th>
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">Fréquence</th>
                <th className="px-5 py-3 font-medium">Pourquoi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-bordure">
              {sources.map((s) => (
                <tr key={s.nom}>
                  <td className="px-5 py-3">
                    <a href={s.url} className="text-marine hover:underline">
                      {s.nom}
                    </a>
                  </td>
                  <td className="px-5 py-3 text-doux">{s.type}</td>
                  <td className="px-5 py-3 text-doux">{s.frequence}</td>
                  <td className="px-5 py-3 text-doux">{s.pourquoi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold text-marine">Synthèses</h2>
        <div className="space-y-4">
          {syntheses.map((s) => (
            <article key={s.titre} className="rounded-xl border border-bordure bg-carte p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{s.titre}</h3>
                <span className="rounded-full border border-bordure px-3 py-1 text-xs text-doux">
                  {s.theme} · {s.date}
                </span>
              </div>
              <p className="mt-3 leading-relaxed">{s.resume}</p>
              <p className="mt-3 text-sm text-doux">
                <span className="font-medium text-marine">Impact sur mes pratiques : </span>
                {s.impact}
              </p>
              <p className="mt-2 text-xs text-doux">Sources : {s.sources.join(", ")}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
