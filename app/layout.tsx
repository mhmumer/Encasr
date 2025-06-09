import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import {Header} from "@/components/header";
import { ThemeFloatingToggle } from "@/components/ThemeFloatingToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Encasr",
  description: "Premium Cases for Your Devices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className="transition-colors duration-300">
        <ThemeProvider>
          <Header />
           <ThemeFloatingToggle />
          <main className="pt-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
