"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

type Item = {
  name: string;
  price: number;
  image: string;
  desc: string;
};

const menuItems: Item[] = [
  {
    name: "Poulet Grillé BBQ",
    price: 55,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
    desc: "Poulet grillé tendre avec sauce BBQ fumée."
  },
  {
    name: "Crispy Chicken",
    price: 49,
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92",
    desc: "Poulet croustillant doré et juteux."
  },
  {
    name: "Pizza Royale",
    price: 79,
    image: "https://images.unsplash.com/photo-1548365328-9f547c4c5c3f",
    desc: "Pizza garnie de fromage, viande et légumes."
  },
  {
    name: "Pizza Margherita",
    price: 65,
    image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9",
    desc: "Classique italienne au basilic frais."
  },
  {
    name: "Tacos Poulet XL",
    price: 60,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a9c9d",
    desc: "Tacos généreux au poulet épicé."
  }
];export default function Menu() {
  return (
    <section id="menu">

      <div className="section-title">
        <span>Nos Spécialités</span>
        <h2>Menu Premium</h2>
      </div>

      <div className="menu-grid">

        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="card"
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.image} alt={item.name} />

            <div className="card-body">
              <h3>{item.name}</h3>
              <p style={{ fontSize: 14 }}>{item.desc}</p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 15,
                  alignItems: "center"
                }}
              >
                <span className="price">{item.price} MAD</span>

                <button className="btn-gold">
                  <ShoppingCart size={16} /> Ajouter
                </button>
              </div>
            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}{
    name: "Tacos Mixte",
    price: 68,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
    desc: "Tacos poulet & viande avec sauce fromagère."
  },
  {
    name: "Cheeseburger Premium",
    price: 58,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    desc: "Burger gourmet avec cheddar fondu."
  },
  {
    name: "Frites Maison",
    price: 20,
    image: "https://images.unsplash.com/photo-1604908177522-0402d56c7c7b",
    desc: "Frites croustillantes faites maison."
  },
  {
    name: "Salade César au Poulet",
    price: 45,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9",
    desc: "Salade fraîche avec poulet grillé et parmesan."
  },
  {
    name: "Jus d'Orange Frais",
    price: 25,
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423",
    desc: "Jus naturel pressé à froid."
  }
];export default function Menu() {
  return (
    <section id="menu">

      <div className="section-title">
        <span>Nos Spécialités</span>
        <h2>Menu Premium</h2>
      </div>

      <div className="menu-grid">

        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            className="card"
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.image} alt={item.name} />

            <div className="card-body">

              <h3>{item.name}</h3>

              <p style={{ fontSize: 14, marginTop: 6 }}>
                {item.desc}
              </p>

              {/* STARS */}
              <div style={{ color: "#D4AF37", marginTop: 8 }}>
                ★★★★☆
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 15,
                  alignItems: "center"
                }}
              >
                <span className="price">{item.price} MAD</span>

                <button className="btn-gold">
                  Ajouter au panier
                </button>
              </div>

            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}
