import Link from "next/link";
import { profil } from "@/data/profil";
import { domaines } from "@/data/competences";
import { realisations } from "@/data/realisations";

const livrables = [
  { titre: "Diaporama de présentation", detail: "Support des 10 minutes de présentation du parcours." },
  { titre: "Portfolio en ligne", detail: "Ce site : réalisations, compétences mobilisées et preuves." },
  { titre: "Tableau de synthèse", detail: "Conforme au modèle défini par l'Éducation nationale." },
  { titre: "Attestations de stage", detail: "Certificats de travail et attestations de stage." },
];

export default function Accueil() {
  return (
    <div className="space-y-16">
      <section>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-marine-clair">
          Portfolio de professionnalisation — épreuve E5
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-marine sm:text-5xl">
          {profil.prenom} {profil.nom}
        </h1>
        <p className="mt-3 text-lg text-doux">{profil.titre}</p>
        <p className="mt-6 max-w-2xl leading-relaxed">{profil.accroche}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/realisations"
            className="rounded-lg bg-marine px-5 py-2.5 text-sm font-medium text-white hover:bg-marine-clair dark:text-[#0d1219]"
          >
            Voir les réalisations
          </Link>
          <Link
            href="/competences"
            className="rounded-lg border border-bordure px-5 py-2.5 text-sm font-medium hover:border-marine hover:text-marine"
          >
            Les 6 domaines de compétences
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-xl font-semibold text-marine">Les domaines de compétences évalués</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {domaines.map((d) => (
            <Link
              key={d.slug}
              href={`/competences/${d.slug}`}
              className="rounded-xl border border-bordure bg-carte p-5 transition hover:border-marine"
            >
              <p className="text-xs font-semibold text-marine-clair">Domaine {d.numero}</p>
              <h3 className="mt-1 font-semibold">{d.titre}</h3>
              <p className="mt-2 text-sm leading-relaxed text-doux">{d.resume}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-xl font-semibold text-marine">Réalisations récentes</h2>
        <p className="mb-6 text-sm text-doux">
          {realisations.length} réalisations recensées à ce jour.
        </p>
        <ul className="divide-y divide-bordure rounded-xl border border-bordure bg-carte">
          {realisations.slice(0, 4).map((r) => (
            <li key={r.slug}>
              <Link href={`/realisations/${r.slug}`} className="block px-5 py-4 hover:bg-fond">
                <p className="font-medium">{r.titre}</p>
                <p className="mt-1 text-sm text-doux">
                  {r.organisation} · {r.periode}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-6 text-xl font-semibold text-marine">Livrables de l&apos;épreuve</h2>
        <dl className="grid gap-4 sm:grid-cols-2">
          {livrables.map((l) => (
            <div key={l.titre} className="rounded-xl border border-bordure bg-carte p-5">
              <dt className="font-medium">{l.titre}</dt>
              <dd className="mt-1 text-sm text-doux">{l.detail}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
