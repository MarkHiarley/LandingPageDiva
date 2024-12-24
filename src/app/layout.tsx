import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jostSans = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DivaSobrancelhas Portifolio",
  description: "Portifolio da Profisional ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${jostSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}