import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: "Donatello",
  description: "Donatello Afriq Limited",
  authors: [{ name: "Donatello" }],
  openGraph: {
    title: "Donatello",
    description: "Donatello Afriq Limited",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
