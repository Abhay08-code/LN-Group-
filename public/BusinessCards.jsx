// components/BusinessCards.jsx
import React from "react";
import businesses from ".//businesses"; // New file
import Card from "./Card";

export default function BusinessCards() {
  return (
    <div className="pt-24 px-6 md:px-20 pb-12 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">
        LNCT Group Businesses
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {businesses.map((biz, index) => (
          <Card key={index} {...biz} />
        ))}
      </div>
    </div>
  );
}
