"use client";

import { createContext, useContext, useEffect, useState } from "react";

type CartItem = {
  name: string;
  price: number;
  qty: number;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (name: string) => void;
  increaseQty: (name: string) => void;
  decreaseQty: (name: string) => void;
  total: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // LOAD FROM LOCAL STORAGE
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD ITEM
  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.name === item.name);

      if (exists) {
        return prev.map((p) =>
          p.name === item.name
            ? { ...p, qty: p.qty + 1 }
            : p
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };

  // REMOVE ITEM
  const removeFromCart = (name: string) => {
    setCart((prev) => prev.filter((p) => p.name !== name));
  };

  // INCREASE
  const increaseQty = (name: string) => {
    setCart((prev) =>
      prev.map((p) =>
        p.name === name ? { ...p, qty: p.qty + 1 } : p
      )
    );
  };

  // DECREASE
  const decreaseQty = (name: string) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.name === name ? { ...p, qty: p.qty - 1 } : p
        )
        .filter((p) => p.qty > 0)
    );
  };

  // TOTAL PRICE
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};"use client";

import { useCart } from "./CartContext";
import { X, Plus, Minus, Trash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Cart({ open, setOpen }: any) {
  const {
    cart,
    total,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 z-40"
          />

          {/* SIDEBAR */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-[90%] max-w-md h-full bg-[#0b0b0b] z-50 p-6 border-l border-white/10"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-gold text-xl font-bold">
                Mon Panier
              </h2>

              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>

            {/* ITEMS */}
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[60vh]">
              {cart.length === 0 && (
                <p className="text-gray-400">
                  Panier vide
                </p>
              )}

              {cart.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between border-b border-white/10 pb-3"
                >
                  <div>
                    <h4 className="text-white font-semibold">
                      {item.name}
                    </h4>

                    <p className="text-gold">
                      {item.price} MAD
                    </p>

                    {/* QTY */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => decreaseQty(item.name)}
                        className="bg-gold text-black p-1 rounded"
                      >
                        <Minus size={14} />
                      </button>

                      <span>{item.qty}</span>

                      <button
                        onClick={() => increaseQty(item.name)}
                        className="bg-gold text-black p-1 rounded"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* DELETE */}
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="text-red-500"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="flex justify-between text-lg">
                <span>Total</span>
                <span className="text-gold font-bold">
                  {total} MAD
                </span>
              </div>

              {/* CHECKOUT */}
              <button className="btn-gold w-full mt-5">
                Commander maintenant
              </button>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/212781192367"
                target="_blank"
                className="btn-outline w-full mt-3 block text-center"
              >
                Commander via WhatsApp
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
