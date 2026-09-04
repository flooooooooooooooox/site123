import Link from "next/link";
import { competenceParCode } from "@/data/competences";

export function BadgeCompetence({ code }: { code: string }) {
  const trouve = competenceParCode(code);
  if (!trouve) return null;
  return (
    <Link
      href={`/competences/${trouve.domaine.slug}`}
      title={trouve.competence.libelle}
      className="inline-flex items-center gap-1.5 rounded-full border border-bordure bg-fond px-3 py-1 text-xs text-doux hover:border-marine hover:text-marine"
    >
      <span className="font-semibold text-marine">{code}</span>
      <span className="max-w-[22rem] truncate">{trouve.competence.libelle}</span>
    </Link>
  );
}
