import { SEO, COMPANY } from "@/lib/constants";
import "@/styles/globals.css";
import "@/styles/Navbar.css";
import "@/styles/Hero.css";
import "@/styles/Ticker.css";
import "@/styles/Services.css";
import "@/styles/About.css";
import "@/styles/Stats.css";
import "@/styles/Projects.css";
import "@/styles/Process.css";
import "@/styles/Testimonials.css";
import "@/styles/Contact.css";
import "@/styles/Footer.css";
import "@/styles/FloatButtons.css";

export const metadata = {
  title: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: "https://nativebuilders.in",
    siteName: COMPANY.name,
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: COMPANY.name,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
