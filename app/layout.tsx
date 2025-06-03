import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ROCS - Robotics and Control Society",
  description: "ROCS Robotik ve Bilgisayar Bilimleri Topluluğu resmi web sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-[#111] dark:via-[#151515] dark:to-[#111]`}
      >
        {children}
      </body>
    </html>
  );
}
