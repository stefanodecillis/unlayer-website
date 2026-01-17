import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unlayer - Rewiring Access to Capital Markets",
  description:
    "Unlayer enables SMEs and enterprises to raise capital with compliant tokenized securities. From issuance to liquidity — seamlessly. Smart. Accessible. Compliant.",
  keywords: [
    "tokenized securities",
    "capital markets",
    "SME funding",
    "EU compliant",
    "security token offering",
    "blockchain finance",
  ],
  authors: [{ name: "Unlayer" }],
  creator: "Unlayer",
  metadataBase: new URL("https://unlayer.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unlayer.xyz",
    siteName: "Unlayer",
    title: "Unlayer - Rewiring Access to Capital Markets",
    description:
      "From issuance to liquidity — seamlessly. Unlayer enables compliant tokenized securities for SMEs and enterprises.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Unlayer - Rewiring Access to Capital Markets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unlayer - Rewiring Access to Capital Markets",
    description:
      "From issuance to liquidity — seamlessly. Compliant tokenized securities.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
