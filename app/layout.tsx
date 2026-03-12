import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Bebas_Neue } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rati Madhikarmi | Marketing Manager · London, UK",
  description:
    "Marketing Manager at Real Dreams Educational Consultancy. Digital strategist specialising in international student recruitment, compliance, and brand growth.",
  keywords:
    "marketing manager, digital marketing, Nepal UK, international education, student recruitment",
  openGraph: {
    title: "Rati Madhikarmi | Marketing Manager · London, UK",
    description:
      "Marketing Manager at Real Dreams Educational Consultancy. Digital strategist specialising in international student recruitment, compliance, and brand growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} ${bebasNeue.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
