import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Titre } from "@/components/Titre";
import { domaines, domaineParSlug } from "@/data/competences";
import { realisationsParCompetence } from "@/data/realisations";

export function generateStaticParams() {
  return domaines.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const domaine = domaineParSlug(slug);
  if (!domaine) return {};
  return { title: domaine.titre, description: domaine.resume };
}

export default async function PageDomaine({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const domaine = domaineParSlug(slug);
  if (!domaine) notFound();

  return (
    <>
      <Titre surtitre={`Domaine ${domaine.numero}`} titre={domaine.titre} chapo={domaine.resume} />

      <div className="space-y-6">
        {domaine.competences.map((c) => {
          const liees = realisationsParCompetence(c.code);
          return (
            <section key={c.code} className="rounded-xl border border-bordure bg-carte p-6">
              <h2 className="font-semibold">
                <span className="text-marine">{c.code}</span> — {c.libelle}
              </h2>
              {liees.length ? (
                <ul className="mt-4 space-y-2 text-sm">
                  {liees.map((r) => (
                    <li key={r.slug}>
                      <Link href={`/realisations/${r.slug}`} className="text-marine hover:underline">
                        {r.titre}
                      </Link>
                      <span className="text-doux"> — {r.organisation}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-doux">
                  Aucune réalisation ne couvre encore cette compétence.
                </p>
              )}
            </section>
          );
        })}
      </div>

      <p className="mt-10">
        <Link href="/competences" className="text-sm text-marine hover:underline">
          ← Tous les domaines
        </Link>
      </p>
    </>
  );
}
