import type { Metadata } from "next";
import localfont from "next/font/local" 
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AOSInit } from './aos'

const inter = Inter({ subsets: ["latin"] });

const lota = localfont({
  src: [
    {
      path: "../public/fonts/Lota Grotesque Alt 3 Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Lota Grotesque Alt3 SemiBold.otf",
      weight: "600",
    },
  ],
  variable: "--font-lota"
})

export const metadata: Metadata = {
  title: "liteAPI | The fastest way to build travel apps",
  description: "Boost your sales any risk!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={`${inter.className} ${lota.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
