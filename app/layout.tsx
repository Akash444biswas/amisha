import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { VantaWavesBackground } from "@/components/VantaWavesBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kumari Manisha - Backend Developer",
  description: "Portfolio of Kumari Manisha, a skilled backend developer specializing in Java, Spring Boot, and PostgreSQL. Explore my projects, skills, and experience.",
  keywords: ["Backend Developer", "Java Developer", "Spring Boot", "PostgreSQL", "REST API", "Portfolio", "Kumari Manisha"],
  authors: [{ name: "Kumari Manisha" }],
  creator: "Kumari Manisha",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kumari-manisha-portfolio.vercel.app",
    title: "Kumari Manisha - Backend Developer",
    description: "Portfolio of Kumari Manisha, a skilled backend developer specializing in Java, Spring Boot, and PostgreSQL.",
    siteName: "Kumari Manisha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumari Manisha - Backend Developer",
    description: "Portfolio of Kumari Manisha, a skilled backend developer specializing in Java, Spring Boot, and PostgreSQL.",
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-white font-sans`}
        suppressHydrationWarning
      >
        <VantaWavesBackground />
        <div className="relative" style={{ zIndex: 1 }}>
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}

