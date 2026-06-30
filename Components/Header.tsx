"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Accueil", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Galerie", href: "/gallery" },
  { name: "Avis", href: "/reviews" },
  { name: "Réservation", href: "/reservation" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* TOP BAR */}
      <div className="w-full bg-gold text-black text-sm font-semibold px-6 py-2 flex justify-between">
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-1">
            <Phone size={14} /> 0781192367
          </span>
          <span>Tanger, Maroc</span>
        </div>
        <span>Ouvert: 11h - 23h30</span>
      </div>

      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          scrolled ? "bg-black/90 backdrop-blur-md" : "bg-black/40"
        } border-b border-white/10`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          
          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold text-gold">
            Majd <span className="text-white">Restaurant</span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-8 text-white">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-gold transition">
                {l.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4">
            
            {/* CART */}
            <Link href="/checkout" className="relative">
              <ShoppingCart />
              <span className="absolute -top-2 -right-2 bg-gold text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            </Link>

            {/* MOBILE BTN */}
            <button onClick={() => setOpen(true)} className="md:hidden">
              <Menu />
            </button>

          </div>
        </div>{/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 z-40"
            />

            {/* SIDE DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-[#0b0b0b] z-50 p-6 border-l border-white/10"
            >
              {/* CLOSE BUTTON */}
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-gold text-xl font-bold">
                  Majd Menu
                </h2>

                <button onClick={() => setOpen(false)}>
                  <X />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-6 text-white">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-lg hover:text-gold transition"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>

              {/* BOTTOM CTA */}
              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="text-sm text-gray-400 mb-3">
                  Réservation rapide
                </p>

                <a
                  href="tel:0781192367"
                  className="bg-gold text-black px-4 py-3 rounded-full flex justify-center font-semibold"
                >
                  Appeler maintenant
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
      }{/* ACTIVE SCROLL EFFECT BAR */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="origin-left h-[2px] bg-gold w-full"
        />
      </header>
    </>
  );
}
