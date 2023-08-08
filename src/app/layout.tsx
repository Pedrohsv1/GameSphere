import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./provider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GameSphere",
  description:
    "A crescente popularidade dos jogos eletrônicos deu origem a uma comunidade global apaixonada por esse universo virtual. Com o intuito de conectar jogadores e entusiastas, surge uma rede social exclusiva para gamers, onde podem compartilhar suas experiências, criar laços de amizade e celebrar sua paixão em comum.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
