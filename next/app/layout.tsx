import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";

import "./globals.css";

import Header from "./_ui-elements/header";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flexmonster Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <div id="app">
          <Header />
          <div className="wrap">
            <div className="demo-container">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
