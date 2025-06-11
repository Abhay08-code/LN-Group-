// // components/Card.jsx
// import React from "react";


// export default function Card({ name, type, city, logo, website }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all border border-gray-200">
//       <img
//         src={logo}
//         alt={`${name} logo`}
//         className="w-full h-40 object-contain p-4 bg-gray-50"
//       />
//       <div className="p-5">
//         <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
//         <div className="text-sm text-gray-600 mt-2 space-y-1">
//           <p>
//             <span className="font-medium text-gray-700">Type:</span> {type}
//           </p>
//           <p>
//             <span className="font-medium text-gray-700">City:</span> {city}
//           </p>
//         </div>
//         <a
//           href={website}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm transition"
//         >
//           Visit Website
//         </a>
//       </div>
//     </div>
//   );
// }


// components/Card.jsx
import React from "react";
import { motion } from "framer-motion";
import "./card.css"

export default function Card({ name, type, city, logo, website, direction }) {
  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div class="main">
    <motion.div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1"

    //   className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all border border-gray-200"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-full h-40 object-contain p-4 bg-gray-50"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <div className="text-sm text-gray-600 mt-2 space-y-1">
          <p>
            <span className="font-medium text-gray-700">Type:</span> {type}
          </p>
          <p>
            <span className="font-medium text-gray-700">City:</span> {city}
          </p>
        </div>
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm transition"
        >
          Visit Website
        </a>
      </div>
    </motion.div>
    </div>
  );
}
