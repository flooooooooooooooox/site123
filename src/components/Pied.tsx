import { profil } from "@/data/profil";

export function Pied() {
  return (
    <footer className="border-t border-bordure bg-carte">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-doux">
        <p>
          Portfolio de professionnalisation — épreuve E5 « Support et mise à disposition de services
          informatiques », BTS SIO.
        </p>
        <p className="mt-2">
          {profil.prenom} {profil.nom} ·{" "}
          <a className="text-marine hover:underline" href={`mailto:${profil.email}`}>
            {profil.email}
          </a>
        </p>
      </div>
    </footer>
  );
}
