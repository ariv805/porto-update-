import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Arivito | Portfolio",
  description: "Portfolio website Muhammad Arivito - Pelajar SMK TKJ yang passionate di bidang Jaringan Komputer, Web Development, dan Cybersecurity.",
  keywords: ["Muhammad Arivito", "Portfolio", "SMK TKJ", "Web Development", "Jaringan Komputer", "Cybersecurity"],
  authors: [{ name: "Muhammad Arivito" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Muhammad Arivito | Portfolio",
    description: "Portfolio website Muhammad Arivito - Pelajar SMK TKJ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
