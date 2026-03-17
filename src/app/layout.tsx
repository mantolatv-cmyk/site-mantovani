import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Betoneiras Mantovani | Locação de Betoneiras e Equipamentos em SP",
  description: "Especialista em locação de betoneiras 250L, 400L e 600L, rompedores e ferramentas para construção. Entrega rápida e manutenção rigorosa em São Paulo.",
  keywords: [
    "aluguel de betoneira SP", 
    "locação de betoneira Menegotti", 
    "betoneira 400 litros aluguel", 
    "locação de rompedor", 
    "Betoneiras Mantovani", 
    "equipamentos construção civil SP",
    "aluguel de compactador de solo",
    "Bairro da Ponte SP"
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
    title: "Betoneiras Mantovani | Força Bruta para sua Obra",
    description: "Equipamentos de força para quem constrói o futuro. Betoneiras e ferramentas com pronta entrega em toda São Paulo.",
    type: "website",
    locale: "pt_BR",
    url: "https://betoneirasmantovani.com.br",
    siteName: "Betoneiras Mantovani",
  },
  robots: {
    index: true,
    follow: true,
  },
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
      </body>
    </html>
  );
}
