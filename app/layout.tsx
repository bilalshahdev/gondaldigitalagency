import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gondal Digital Agency",
  description:
    "Premium digital growth, paid media, ecommerce, and conversion design for ambitious brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-[var(--bg-black)] text-[var(--text-white)]">
        {children}
      </body>
    </html>
  );
}
