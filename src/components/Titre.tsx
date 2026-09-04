export function Titre({ surtitre, titre, chapo }: { surtitre?: string; titre: string; chapo?: string }) {
  return (
    <div className="mb-10">
      {surtitre ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-marine-clair">{surtitre}</p>
      ) : null}
      <h1 className="text-3xl font-bold tracking-tight text-marine sm:text-4xl">{titre}</h1>
      {chapo ? <p className="mt-4 max-w-2xl leading-relaxed text-doux">{chapo}</p> : null}
    </div>
  );
}
