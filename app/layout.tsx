import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
