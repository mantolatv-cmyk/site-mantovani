import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

export const viewport = {
  themeColor: "#FFC107",
};

export const metadata: Metadata = {
  title: "Aluguel de Betoneiras em Atibaia | Betoneiras Mantovani",
  description: "Locação de betoneiras, andaimes e equipamentos para construção civil em Atibaia. Entrega rápida, máquinas revisadas e o melhor preço da região. Solicite seu orçamento!",
  keywords: [
    "aluguel de betoneira", 
    "locação de equipamentos construção", 
    "andaimes Atibaia", 
    "Atibaia",
    "Betoneiras Mantovani",
    "locação de betoneira Atibaia",
    "aluguel de ferramentas construção civil"
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
    title: "Aluguel de Betoneiras em Atibaia | Betoneiras Mantovani",
    description: "Equipamentos revisados para sua obra em Atibaia. Betoneiras, andaimes e mais com pronta entrega.",
    type: "website",
    locale: "pt_BR",
    url: "https://mantovani-locacao.vercel.app/",
    siteName: "Betoneiras Mantovani",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Mantovani",
  },
  alternates: {
    canonical: "https://mantovani-locacao.vercel.app/",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} ${outfit.variable} antialiased selection:bg-yellow-500 selection:text-zinc-900`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Betoneiras Mantovani",
              "image": "https://betoneirasmantovani.com.br/hero_betoneira_400l.png",
              "@id": "https://mantovani-locacao.vercel.app/",
              "url": "https://mantovani-locacao.vercel.app/",
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
