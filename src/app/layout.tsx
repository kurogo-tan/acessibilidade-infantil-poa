import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Guia Infância Acessível | Porto Alegre", template: "%s | Guia Infância Acessível" },
  description: "Encontre informações confiáveis sobre serviços públicos gratuitos para crianças e famílias em Porto Alegre.",
  metadataBase: new URL("https://guia-infancia-acessivel.vercel.app"),
  openGraph: { title: "Guia Infância Acessível", description: "Informação para cuidar, aprender e proteger.", locale: "pt_BR", type: "website" },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><Header />{children}<Footer /></body></html>;
}
