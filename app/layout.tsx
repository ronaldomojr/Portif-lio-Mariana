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
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mariana Páscoa — Strategic Branding, Content & Communication",
  description:
    "Portfólio estratégico de Mariana Páscoa. Transformo posicionamento em presença, conteúdo em percepção e marcas em experiências que conectam estratégia, narrativa e crescimento.",
  keywords: [
    "branding",
    "estratégia de marca",
    "marketing digital",
    "comunicação",
    "content manager",
    "Mariana Páscoa",
  ],
  openGraph: {
    title: "Mariana Páscoa — Strategic Branding, Content & Communication",
    description:
      "Transformo posicionamento em presença, conteúdo em percepção e marcas em experiências.",
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
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
