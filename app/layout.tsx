import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VantaWavesBackground } from "@/components/VantaWavesBackground";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amisha Gupta - Backend Developer",
  description: "Portfolio of Amisha Gupta, a skilled backend developer specializing in Java, Spring Boot, and PostgreSQL. Explore my projects, skills, and experience.",
  keywords: ["Backend Developer", "Java Developer", "Spring Boot", "PostgreSQL", "REST API", "Portfolio", "Amisha Gupta"],
  authors: [{ name: "Amisha Gupta" }],
  creator: "Amisha Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://amisha-gupta-portfolio.vercel.app",
    title: "Amisha Gupta - Backend Developer",
    description: "Portfolio of Amisha Gupta, a skilled backend developer specializing in Java, Spring Boot, and PostgreSQL.",
    siteName: "Amisha Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amisha Gupta - Backend Developer",
    description: "Portfolio of Amisha Gupta, a skilled backend developer specializing in Java, Spring Boot, and PostgreSQL.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Removed old <script async ...> tags */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-white font-sans`}
        suppressHydrationWarning
      >
        {/* Load scripts in correct order for Vanta.js */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"
          strategy="beforeInteractive"
        />
        <VantaWavesBackground />
        <div className="relative" style={{ zIndex: 1 }}>
          {children}
        </div>
        {/* <Toaster /> */}
      </body>
    </html>
  );
}

