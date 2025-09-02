import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jose Alava - Software Engineer",
  description: "Portfolio of Jose Alava, Senior Software Engineer specializing in backend systems, APIs, and cloud services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}