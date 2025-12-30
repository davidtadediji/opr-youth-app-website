import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OPR Youth App | Empowering Rodriguan Youth",
  description:
    "Empowering Rodriguan Youth Through Digital Discipline. A smart planner app with offline-first design, AI study tools, and full Kreol Rodrige support.",
  keywords: [
    "Rodrigues",
    "OPR",
    "OPR Youth App",
    "youth app",
    "student planner",
    "study app",
    "Kreol Rodrige",
    "Organisation du Peuple Rodriguais",
  ],
  authors: [{ name: "Organisation du Peuple Rodriguais" }],
  icons: {
    icon: "/opr-logo.jpg",
    apple: "/opr-logo.jpg",
  },
  openGraph: {
    title: "OPR Youth App | Empowering Rodriguan Youth",
    description:
      "Empowering Rodriguan Youth Through Digital Discipline. Your personal digital assistant for academic success.",
    type: "website",
    images: ["/opr-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
