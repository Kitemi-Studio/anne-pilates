import type { Metadata } from "next";
import "./globals.css";
import "./test-colors.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://annepilates.e-monsite.com"),
  title: "Anne Pilates - Cours de Pilates & Méthode de Gasquet à Versailles",
  description: "Professeur de Pilates qualifiée Polestar Studio, Body Control Londres & Institut de Gasquet à Versailles. Cours collectifs tapis, Reformer à 4, duo et particuliers.",
  alternates: { canonical: "https://annepilates.e-monsite.com/" },
  openGraph: {
    type: "website",
    url: "https://annepilates.e-monsite.com/",
    locale: "fr_FR",
    siteName: "Anne Pilates",
    title: "Anne Pilates - Cours de Pilates & Méthode de Gasquet à Versailles",
    description: "Professeur de Pilates qualifiée Polestar Studio, Body Control Londres & Institut de Gasquet à Versailles. Cours collectifs tapis, Reformer à 4, duo et particuliers.",
    images: [{ url: "/images/anne/portrait.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                { "@type": "WebSite", name: "Anne Pilates", url: "https://annepilates.e-monsite.com/" },
                {
                  "@type": "SportsActivityLocation",
                  name: "Anne Pilates - Pilates avec Anne",
                  url: "https://annepilates.e-monsite.com/",
                  email: "anneburger@hotmail.fr",
                  telephone: "+33615142935",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "2 allée des chevaliers",
                    addressLocality: "Versailles",
                    postalCode: "78000",
                    addressCountry: "FR",
                  },
                  description: "Professeur de Pilates qualifiée Polestar Studio, Body Control Pilates et méthode de Gasquet. Cours au sol (tapis), machines Reformer en petit groupe à 4, individuels et duos à Versailles.",
                  priceRange: "€€",
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                      ],
                      opens: "08:00",
                      closes: "21:15",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased min-h-screen bg-cream text-charcoal flex flex-col relative">
        {/* Subtle physical texture overlay for premium Awwwards aesthetic */}
        <div className="noise-overlay pointer-events-none fixed inset-0 z-[9999] opacity-[0.04]" />
        <Header />
        {children}
      </body>
    </html>
  );
}
