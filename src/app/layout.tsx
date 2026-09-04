import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Pied } from "@/components/Pied";
import { profil } from "@/data/profil";

export const metadata: Metadata = {
  title: {
    default: `${profil.prenom} ${profil.nom} — Portfolio BTS SIO`,
    template: `%s — ${profil.prenom} ${profil.nom}`,
  },
  description:
    "Portfolio de professionnalisation présenté à l'épreuve E5 du BTS SIO : réalisations professionnelles, compétences mobilisées, veille et projet professionnel.",
  keywords: ["BTS SIO", "portfolio", "E5", "alternance", "administrateur systèmes et réseaux"],
  authors: [{ name: `${profil.prenom} ${profil.nom}` }],
  openGraph: {
    type: "profile",
    locale: "fr_FR",
    title: `${profil.prenom} ${profil.nom} — Portfolio BTS SIO`,
    description: "Réalisations professionnelles, compétences E5, veille et projet professionnel.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col antialiased">
        <Nav />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">{children}</main>
        <Pied />
      </body>
    </html>
  );
}
