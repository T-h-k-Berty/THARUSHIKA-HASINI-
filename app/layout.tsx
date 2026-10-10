import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Google Fonts Configure කිරීම
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair", 
  style: ['normal', 'italic'],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Tharushika Hasini | Premium Web Design & Development",
  description:
    "Explore luxury website design and development portfolio concepts by Tharushika Hasini.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1A1A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Body tag එකට font variables ලබා දීම
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-sand text-charcoal">{children}</body>
    </html>
  );
}