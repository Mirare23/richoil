import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import FloatingSocialIcons from "@/components/floating-social-icons";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rich Oil Indonesia - Premium Natural Oils from Bali",
  description:
    "Discover the finest natural oils from Bali. Premium avocado, walnut, and specialty oils for your health and wellness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        <FloatingSocialIcons />
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
