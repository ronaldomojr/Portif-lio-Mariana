import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Mariana Páscoa — Diretora Artística & Publicitária",
  description:
    "Portfólio de Mariana Páscoa, Diretora Artística e Publicitária. Transformo posicionamento em presença, conteúdo em percepção e marcas em experiências que conectam estratégia, narrativa e crescimento.",
  keywords: [
    "diretora artística",
    "publicitária",
    "branding",
    "estratégia de marca",
    "direção criativa",
    "marketing digital",
    "comunicação integrada",
    "content manager",
    "Mariana Páscoa",
    "Volta Redonda",
  ],
  openGraph: {
    title: "Mariana Páscoa — Diretora Artística & Publicitária",
    description:
      "Transformo posicionamento em presença, conteúdo em percepção e marcas em experiências que conectam estratégia, narrativa e crescimento.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
