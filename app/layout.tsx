import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";

export const metadata: Metadata = {
  title: "Developer X - Portfolio",
  description: "Professional portfolio website for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* GLOBAL LAYOUT STRUCTURE */}
          <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900">
            <Header1 />
            <main className="flex-grow">
              {children}
            </main>
            <Footer1 />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}