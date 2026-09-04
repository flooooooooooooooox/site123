import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Titre } from "@/components/Titre";
import { Brouillon } from "@/components/Brouillon";
import { BadgeCompetence } from "@/components/BadgeCompetence";
import { realisations, realisationParSlug } from "@/data/realisations";

export function generateStaticParams() {
  return realisations.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = realisationParSlug(slug);
  if (!r) return {};
  return { title: r.titre, description: r.resume };
}

export default async function PageRealisation({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = realisationParSlug(slug);
  if (!r) notFound();

  return (
    <>
      <Titre surtitre={`${r.organisation} · ${r.periode}`} titre={r.titre} chapo={r.resume} />
      {r.brouillon ? <Brouillon /> : null}

      <div className="space-y-8">
        <section>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-marine-clair">
            Contexte et besoin
          </h2>
          <p className="leading-relaxed">{r.situation}</p>
        </section>

        <section>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-marine-clair">
            Démarche
          </h2>
          <ol className="list-decimal space-y-2 pl-5 leading-relaxed marker:text-marine">
            {r.demarche.map((etape, i) => (
              <li key={i}>{etape}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-marine-clair">
            Bilan et recul
          </h2>
          <p className="leading-relaxed">{r.bilan}</p>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-marine-clair">
            Outils et technologies
          </h2>
          <ul className="flex flex-wrap gap-2">
            {r.outils.map((o) => (
              <li key={o} className="rounded-full border border-bordure bg-carte px-3 py-1 text-xs text-doux">
                {o}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-marine-clair">
            Compétences mobilisées
          </h2>
          <div className="flex flex-wrap gap-2">
            {r.competences.map((c) => (
              <BadgeCompetence key={c} code={c} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-marine-clair">
            Éléments de preuve
          </h2>
          <ul className="space-y-2">
            {r.preuves.map((p) => (
              <li key={p.libelle} className="text-sm">
                {p.href ? (
                  <a href={p.href} className="text-marine hover:underline">
                    {p.libelle}
                  </a>
                ) : (
                  <span className="text-doux">{p.libelle} — à déposer</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <p className="mt-10">
        <Link href="/realisations" className="text-sm text-marine hover:underline">
          ← Toutes les réalisations
        </Link>
      </p>
    </>
  );
}
