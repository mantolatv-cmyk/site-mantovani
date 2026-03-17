import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Betoneiras Mantovani | Força Bruta para sua Obra",
  description: "Locação de betoneiras e equipamentos de construção. Sua obra não pode parar. Equipamentos revisados, entrega rápida e suporte técnico especializado.",
  keywords: ["betoneira", "locação de equipamentos", "construção civil", "aluguel de betoneira", "obra", "Mantovani"],
  openGraph: {
    title: "Betoneiras Mantovani | Equipamentos de Força",
    description: "Sua obra não pode parar. Equipamentos de força para quem constrói o futuro.",
    type: "website",
    locale: "pt_BR",
    url: "https://betoneirasmantovani.com.br",
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
