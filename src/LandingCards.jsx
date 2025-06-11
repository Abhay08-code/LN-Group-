// components/LandingCards.jsx
import React from "react";
import { motion } from "framer-motion";

const cards = [
  { title: "Card 1", text: "Left side card", side: "left" },
  { title: "Card 2", text: "Left side card", side: "left" },
  { title: "Card 3", text: "Right side card", side: "right" },
  { title: "Card 4", text: "Right side card", side: "right" },
];

const fadeFrom = {
  hiddenLeft: { x: -200, opacity: 0 },
  hiddenRight: { x: 200, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function LandingCards() {
  return (
    <div className="pt-32 pb-20 bg-white px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={card.side === "left" ? "hiddenLeft" : "hiddenRight"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          variants={fadeFrom}
          className="bg-blue-50 rounded-xl p-6 shadow-md"
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-2">{card.title}</h3>
          <p className="text-gray-600">{card.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
