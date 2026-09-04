import type { Metadata } from "next";
import { Titre } from "@/components/Titre";
import { profil } from "@/data/profil";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum vitae : formation, expériences professionnelles, langues et savoir-être.",
};

export default function PageCv() {
  return (
    <>
      <Titre surtitre="Portfolio E5" titre="Curriculum vitae" chapo={profil.titre} />

      <div className="grid gap-10 md:grid-cols-[18rem_1fr]">
        <aside className="space-y-8">
          <section>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-marine-clair">
              Coordonnées
            </h2>
            <ul className="space-y-1.5 text-sm text-doux">
              <li>
                <a className="text-marine hover:underline" href={`mailto:${profil.email}`}>
                  {profil.email}
                </a>
              </li>
              <li>{profil.telephone}</li>
              <li>{profil.ville}</li>
              <li>{profil.permis}</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-marine-clair">
              Langues
            </h2>
            <ul className="space-y-1.5 text-sm text-doux">
              {profil.langues.map((l) => (
                <li key={l.langue}>
                  {l.langue} — {l.niveau}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-marine-clair">
              Savoir-être
            </h2>
            <ul className="flex flex-wrap gap-2">
              {profil.savoirEtre.map((s) => (
                <li key={s} className="rounded-full border border-bordure bg-carte px-3 py-1 text-xs text-doux">
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-marine-clair">
              Centres d&apos;intérêt
            </h2>
            <ul className="space-y-1.5 text-sm text-doux">
              {profil.interets.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </section>
        </aside>

        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-xl font-semibold text-marine">Formation</h2>
            <div className="space-y-4">
              {profil.formations.map((f) => (
                <div key={f.intitule} className="rounded-xl border border-bordure bg-carte p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold">{f.intitule}</h3>
                    <span className="text-xs text-doux">{f.periode}</span>
                  </div>
                  <p className="mt-1 text-sm text-doux">
                    {f.etablissement}
                    {f.enCours ? " · en cours" : ""}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-xl font-semibold text-marine">Expérience professionnelle</h2>
            <div className="space-y-4">
              {profil.experiences.map((e) => (
                <div key={e.poste} className="rounded-xl border border-bordure bg-carte p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold">{e.poste}</h3>
                    <span className="text-xs text-doux">{e.periode}</span>
                  </div>
                  <p className="mt-1 text-sm text-doux">{e.organisation}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed marker:text-marine">
                    {e.missions.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
