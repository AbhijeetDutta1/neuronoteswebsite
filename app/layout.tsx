import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import Nav from "@/components/site/Nav";
import Footer from "@/components/site/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo-black",
});

export const metadata: Metadata = {
  title: "NeuroNotes at UCSB",
  description: "NeuroNotes at UCSB: making memories through music.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${archivoBlack.variable} font-sans`}
        suppressHydrationWarning
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
