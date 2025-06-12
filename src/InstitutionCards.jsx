// import React from "react"
// import institutions from "./institutions" 

// export default function InstitutionCards() {
//   return (
//     <div id ="institutions" className="bg-gray-100 py-10 px-6 md:px-20">
//       <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
//         LNCT Group Institutions
//       </h2>

//       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {institutions.map((inst, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-2xl transition-all"
//           >
//             <img
//               src={inst.logo}
//               alt={`${inst.name} logo`}
//               className="w-full h-40 object-contain p-4 bg-gray-50"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-gray-800">
//                 {inst.name}
//               </h3>
//               <p className="text-sm text-gray-600 mt-1">
//                 <strong>Type:</strong> {inst.type}
//               </p>
//               <p className="text-sm text-gray-600">
//                 <strong>City:</strong> {inst.city}
//               </p>
//               <a
//                 href={inst.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
//               >
//                 Visit Site
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import institutions from "./institutions";
// import Card from "./Card";

// export default function InstitutionCards() {
//   return (
//     <div id="institutions" className="pt-24 px-6 md:px-20 pb-12 bg-gray-50 min-h-screen">
//       <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
//         LNCT Group Institutions
//       </h2>

//       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {institutions.map((inst, index) => (
//           <Card key={index} {...inst} direction={index % 2 === 0 ? "left" : "right"} />
//         ))}
//       </div>
//     </div>
//   );
// }



// components/InstitutionCards.jsx


import React from "react";
import { motion } from "framer-motion";
import institutions from "./institutions";
import "./institutioncard.css"


const cardVariantsLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const cardVariantsRight = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function InstitutionCards() {
  return (
    <section id="institutions" className="pt-24 pb-16 bg-gray-100 px-6 md:px-20 ">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Our Institutions
      </h2>
      <div id="institutecard" className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 ">
        {institutions.map((inst, index) => (
          // <motion.div
          //   key={index}
          //   // className="bg-white rounded-2xl shadow-md border overflow-hidden"
          //   id="maincard"
          //   className=" mt-4 h-auto bg-white p-6 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-blue-200 hover:shadow-2xl"
          //   // className="bg-white hover:bg-blue-100 p-6 rounded-2xl shadow-md w-80 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          //   initial="hidden"
          //   whileInView="visible"
          //   viewport={{ once: true }}
          //   transition={{ duration: 0.4, delay: index * 0.1 }}
          //   variants={index % 2 === 0 ? cardVariantsLeft : cardVariantsRight}
          // >
          //   <img
          //     src={inst.logo}
          //     alt={`${inst.name} logo`}
          //     className="w-full h-40 object-contain p-4 bg-gray-50"
          //   />
          //   <div className="p-3">
          //     <h3 className="text-xl font-semibold text-gray-800">{inst.name}</h3>
          //     <p className="text-sm text-gray-600 mt-1">
          //       <strong>Type:</strong> {inst.type}
          //     </p>
          //     <p className="text-sm text-gray-600">
          //       <strong>City:</strong> {inst.city}
          //     </p>
          //     <a
          //       href={inst.website}
          //       target="_blank"
          //       rel="noopener noreferrer"
          //       className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white  rounded-md hover:bg-blue-700 text-sm"
          //     >
          //       Visit Site
          //     </a>
          //   </div>
          // </motion.div>

          <motion.div
  key={index}
  className="bg-white p-3 sm:p-6 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-blue-200 hover:shadow-2xl flex flex-col  min-h-[220px] sm:min-h-[420px]"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: index * 0.1 }}
  variants={index % 2 === 0 ? cardVariantsLeft : cardVariantsRight}
>
  <div className="h-15 sm:h-40 flex items-center justify-center bg-gray-50 p-2">
  <img
    src={inst.logo}
    alt={`${inst.name} logo`}
    // className="w-full h-40 object-contain p-4 bg-gray-50"
    className="max-h-full max-w-full object-contain"
  />
  </div>
  <div className="p-3 flex-grow">
    <h3 className="text-xl font-semibold text-gray-800">{inst.name}</h3>
    <p className="text-sm text-gray-600 mt-1">
      <strong>Type:</strong> {inst.type}
    </p>
    <p className="text-sm text-gray-600">
      <strong>City:</strong> {inst.city}
    </p>
  </div>
  <a
    href={inst.website}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
  >
    Visit Site
  </a>
</motion.div>
        ))}
      </div>
    </section>
  );
}








// import React from "react";
// import { motion } from "framer-motion";
// import "./institutioncard.css";

// const cardVariantsLeft = {
//   hidden: { x: -100, opacity: 0 },
//   visible: { x: 0, opacity: 1 },
// };

// const cardVariantsRight = {
//   hidden: { x: 100, opacity: 0 },
//   visible: { x: 0, opacity: 1 },
// };

// export default function InstitutionCards({ institutions }) {
//   return (
//     <section id="institutions" className="pt-24 pb-16 bg-gray-100 px-6 md:px-20">
//       <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
//         Our Institutions
//       </h2>

//       {institutions.length === 0 ? (
//         <p className="text-center text-gray-600">No institutions found.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {institutions.map((inst, index) => (
//             <motion.div
//               key={index}
//               className="mt-4 h-auto bg-white p-6 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-blue-200 hover:shadow-2xl"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               variants={index % 2 === 0 ? cardVariantsLeft : cardVariantsRight}
//             >
//               <img
//                 src={inst.logo}
//                 alt={`${inst.name} logo`}
//                 className="w-full h-40 object-contain p-4 bg-gray-50"
//               />
//               <div className="p-5">
//                 <h3 className="text-xl font-semibold text-gray-800">{inst.name}</h3>
//                 <p className="text-sm text-gray-600 mt-1">
//                   <strong>Type:</strong> {inst.type}
//                 </p>
//                 <p className="text-sm text-gray-600">
//                   <strong>City:</strong> {inst.city}
//                 </p>
//                 <a
//                   href={inst.website}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
//                 >
//                   Visit Site
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }
