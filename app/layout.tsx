import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiva Krishna | Full Stack Developer",
  description: "Portfolio of Shiva Krishna - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Open to opportunities.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Web Developer", "Anamala Shiva Krishna", "Portfolio", "MERN Stack Developer", "Looking for React js Devleoper", "Looking for a MERN Stack Developer", "MERN Stack Developer Hyderabad", "FUll Stack Developer"],
  authors: [{ name: "Shiva Krishna Anamala" }],
  icons: {
    icon: "/profile.jpg",
    apple: "/profile.jpg",
  },
  openGraph: {
    title: "Shiva Krishna | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
