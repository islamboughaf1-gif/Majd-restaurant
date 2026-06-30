"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero flex items-center justify-center text-center">
      
      <div className="hero-content">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Bienvenue chez <span style={{ color: "#D4AF37" }}>Majd Restaurant</span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Découvrez une expérience gastronomique premium à Tanger.
          Des plats savoureux, une ambiance élégante et un service exceptionnel.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link href="/menu" className="btn-gold">
            Voir le menu
          </Link>

          <Link href="/reservation" className="btn-outline">
            Réserver une table
          </Link>
        </motion.div>

      </div>

    </section>
  );
}
