import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Majd Restaurant | Restaurant Premium à Tanger",
  description:
    "Majd Restaurant est un restaurant premium situé à Tanger, Maroc. Découvrez nos pizzas, tacos, poulets grillés, burgers et bien plus encore.",
  keywords: [
    "Majd Restaurant",
    "Restaurant Tanger",
    "Pizza",
    "Tacos",
    "Poulet",
    "Burger",
    "Restaurant Maroc"
  ],
  authors: [
    {
      name: "Majd Restaurant"
    }
  ],
  openGraph: {
    title: "Majd Restaurant",
    description:
      "Cuisine premium à Tanger avec une expérience gastronomique unique.",
    locale: "fr_FR",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
