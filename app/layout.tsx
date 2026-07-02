import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // 1. Metadata Base (Crucial for static sites to resolve image URLs correctly)
  // CHANGE THIS to your actual deployed domain name later
  metadataBase: new URL('https://www.masjidkualalinggi.com'), 

  // 2. Standard SEO
  title: "Kempen Dana Masjid Jamek DUN Kuala Linggi",
  description: "Sumbang ke tabung pembangunan dan penambahbaikan fasiliti Masjid Jamek DUN Kuala Linggi. Bersama membina saham akhirat.",
  keywords: [
    "masjid kuala linggi", 
    "kutipan dana masjid", 
    "sumbangan masjid melaka", 
    "sedekah jariah", 
    "tabung pembangunan masjid", 
    "dun kuala linggi"
  ],
  authors: [{ name: "Masjid Jamek DUN Kuala Linggi" }],
  
  // 3. Open Graph (For beautiful previews on WhatsApp, Facebook, Telegram)
  openGraph: {
    title: "Kempen Dana Masjid Jamek DUN Kuala Linggi",
    description: "Bantu kami membina dan menaik taraf fasiliti masjid untuk keselesaan jemaah. Sumbang sekarang untuk saham akhirat.",
    url: 'https://www.masjidkualalinggi.com', // CHANGE THIS too
    siteName: 'Tabung Masjid Kuala Linggi',
    images: [
      {
        url: '/og-image.jpg', // The preview image
        width: 1200,
        height: 630,
        alt: 'Banner Kutipan Dana Masjid Kuala Linggi',
      },
    ],
    locale: 'ms_MY',
    type: 'website',
  },

  // 4. Twitter/X Card
  twitter: {
    card: 'summary_large_image',
    title: "Kempen Dana Masjid Jamek DUN Kuala Linggi",
    description: "Sumbang ke tabung pembangunan dan penambahbaikan fasiliti masjid.",
    images: ['/og-image.jpg'], 
  },

  // 5. Search Engine Crawler Directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} antialiased scroll-smooth`}>
      <body className="flex flex-col">{children}</body>
    </html>
  );
}