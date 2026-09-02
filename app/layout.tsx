import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Astrolens — Film & Photography",
  description:
    "Cinematic photography and film by Astrolens. Based in London.",
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