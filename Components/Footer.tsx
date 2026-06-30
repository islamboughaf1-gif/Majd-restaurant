import Link from "next/link";
import { Phone, MapPin, Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-16 pb-10 px-6 md:px-20 border-t border-white/10">
      
      <div className="grid md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <h2 className="text-2xl font-bold text-gold mb-4">
            Majd Restaurant
          </h2>
          <p className="text-gray-400 leading-7">
            Restaurant premium à Tanger spécialisé dans les burgers, pizzas,
            tacos et poulet grillé avec une expérience culinaire unique.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gold">Navigation</h3>
          <div className="flex flex-col gap-2 text-gray-400">
            <Link href="/">Accueil</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/gallery">Galerie</Link>
            <Link href="/reservation">Réservation</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gold">Contact</h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <span className="flex items-center gap-2">
              <Phone size={16} /> 0781192367
            </span>

            <span className="flex items-center gap-2">
              <MapPin size={16} /> Tanger, Maroc
            </span>

            <span className="flex items-center gap-2">
              <Mail size={16} /> contact@majd-restaurant.com
            </span>
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gold">Suivez-nous</h3>

          <div className="flex gap-4">
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-gold hover:text-black transition">
              <Instagram size={18} />
            </a>

            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-gold hover:text-black transition">
              <Facebook size={18} />
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Réseaux sociaux actifs 7/7
          </p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Majd Restaurant. Tous droits réservés.
      </div>

    </footer>
  );
}
