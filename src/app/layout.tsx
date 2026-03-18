import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Betoneiras Mantovani | Locação de Betoneiras e Equipamentos em Atibaia",
  description: "Líder em locação de equipamentos para construção civil em Atibaia e região. Aluguel de betoneiras Menegotti, rompedores Hilti e placas vibratórias. Pronta entrega e assistência técnica.",
  keywords: [
    "betoneira Atibaia", 
    "locação de equipamentos Atibaia", 
    "aluguel de betoneira Atibaia", 
    "locação de rompedor Atibaia", 
    "Betoneiras Mantovani", 
    "equipamentos construção civil Atibaia",
    "aluguel de placa vibratória Atibaia",
    "Bairro da Ponte Atibaia"
  ],
  authors: [{ name: "Betoneiras Mantovani" }],
  creator: "Betoneiras Mantovani",
  publisher: "Betoneiras Mantovani",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Betoneiras Mantovani | Locação de Equipamentos em Atibaia",
    description: "Sua obra não pode parar. Aluguel de betoneiras e ferramentas com entrega rápida em Atibaia e região.",
    type: "website",
    locale: "pt_BR",
    url: "https://betoneirasmantovani.com.br",
    siteName: "Betoneiras Mantovani",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://betoneirasmantovani.com.br",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-yellow-500 selection:text-zinc-900`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Betoneiras Mantovani",
              "image": "https://betoneirasmantovani.com.br/hero_betoneira_400l.png",
              "@id": "https://betoneirasmantovani.com.br",
              "url": "https://betoneirasmantovani.com.br",
              "telephone": "+5511999408103",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Avenida São João, 1601",
                "addressLocality": "Atibaia",
                "addressRegion": "SP",
                "postalCode": "12941-260", 
                "addressCountry": "BR"
              },
              "description": "Locação de betoneiras e equipamentos para construção em Atibaia.",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "07:00",
                "closes": "18:00"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}
