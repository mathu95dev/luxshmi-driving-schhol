import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import ScrollToTop from "./ScrollToTop";

export const metadata: Metadata = {
  title: "Luxmy Driving School Rooty Hill | Automatic Driving Lessons Western Sydney",
  description:
    "Luxmy Driving School offers automatic driving lessons, overseas licence conversion, Blacktown and St Marys test preparation, and test day vehicle hire across Rooty Hill, Pendle Hill and Western Sydney.",
  keywords:
    "Luxmy Driving School, driving school Rooty Hill, driving lessons Rooty Hill, driving school Pendle Hill, driving lessons Pendle Hill, automatic driving lessons Western Sydney, overseas licence conversion NSW, Blacktown driving test preparation, St Marys driving test preparation, driving school Mount Druitt, driving lessons Blacktown, test day car hire driving test",
  robots: "index, follow",
  alternates: { canonical: "https://www.luxmydrivingschool.com.au" },
  openGraph: {
    title: "Luxmy Driving School Rooty Hill | Learn with Confidence",
    description:
      "5-star automatic driving lessons with Krishna. Overseas licence conversion, Blacktown and St Marys test preparation, and test day vehicle hire in Western Sydney.",
    url: "https://www.luxmydrivingschool.com.au",
    siteName: "Luxmy Driving School",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxmy Driving School Rooty Hill | Western Sydney",
    description:
      "Patient automatic driving lessons, overseas licence conversion and test preparation for Rooty Hill, Pendle Hill, Blacktown, St Marys and Western Sydney.",
  },
};

const areaServed = [
  "Rooty Hill", "Pendle Hill", "Mount Druitt", "Blacktown", "Doonside", "Plumpton", "Minchinbury",
  "Eastern Creek", "Bungarribee", "Glendenning", "Oakhurst", "Dean Park", "Quakers Hill",
  "Schofields", "Marsden Park", "St Marys", "Colyton", "Oxley Park", "St Clair", "Erskine Park",
  "Seven Hills", "Toongabbie", "Wentworthville", "Westmead", "South Wentworthville", "Girraween",
  "Greystanes", "Pemulwuy", "Prospect", "Old Toongabbie", "Constitution Hill", "Winston Hills",
  "Baulkham Hills", "Arndell Park", "Huntingwood", "Woodcroft", "Marayong", "Kings Park", "Lalor Park",
  "Whalan", "Dharruk", "Hebersham", "Emerton", "Lethbridge Park",
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "DrivingSchool"],
  name: "Luxmy Driving School",
  slogan: "Learn with Confidence",
  image: "https://www.luxmydrivingschool.com.au/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2/25 Acropolis Ave",
    addressLocality: "Rooty Hill",
    addressRegion: "NSW",
    postalCode: "2766",
    addressCountry: "AU",
  },
  telephone: "+61401314073",
  url: "https://www.luxmydrivingschool.com.au",
  sameAs: ["https://www.facebook.com/luxmydrivingschool/"],
  areaServed,
  employee: {
    "@type": "Person",
    name: "Krishna",
    jobTitle: "Driving Instructor",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Driving Lessons",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatic Driving Lessons" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Overseas Licence Conversion Lessons" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Blacktown Driving Test Preparation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "St Marys Driving Test Preparation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Test Day Vehicle Hire" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nervous Driver Lessons" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "81",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Hemaa Subramaniam" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "I’m very grateful to the instructor for being patient, supportive, and professional throughout my lessons. Their clear explanations and calm attitude helped me build confidence and pass my test.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "kg anjalee umedi" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "I passed my driving test. A huge thank you to Krishna for being such a patient, supportive, and professional instructor. The lessons were clear, easy to follow, and really helped me build confidence on the road.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Hasitha Kothalawala" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "I successfully converted my international drivers license to NSW drivers license. I highly recommend LUXMY driving school for your test preparation.",
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body><ScrollToTop />{children}</body>
    </html>
  );
}
