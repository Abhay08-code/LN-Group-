import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const businesses = [
  {
    name: "Ananjay Private Limited",
    image: "ananjay business img.jpg",
    description: "Empowering industries through innovation and excellence.",
    link: "https://www.ananjay.co.in/",
  },
  {
    name: "Kalchuri Contractors Ltd.",
    image: "kalchuri con. img.png",
    description: "Leaders in infrastructure and construction solutions.",
    link: "https://kalchuricontractors.ltd/",
  },
  {
    name: "Parvati Sweetners",
    image: "parvati sweetners.jpg",
    description: "Sweetening lives with quality and purity.",
    link: "http://parvatisweetners.co.in/",
  },
  {
    name: "Ananjay Pharma",
    image: "ananjaypharma.png",
    description: "Innovative pharmaceutical solutions.",
    link: "https://ananjaypharma.co.in/",
  },
  {
    name: "Dabra Alcobrew",
    image: "Screenshot 2025-05-31 151707.png",
    description: "Crafting excellence in brewing.",
    link: "https://dabraalcobrew.com/",
  },
  {
    name: "Vitamax Healthcare",
    image: "vitamax img.png",
    description: "",
    link: "https://vitamax.co.in/",
  },
];

export default function BusinessShowcase() {
  const [selected, setSelected] = useState(businesses[0]);

  return (
    <>
      <div className="hidden md:flex">
    <section className="flex flex-col md:flex-row h-[90vh] w-full overflow-hidden bg-gradient-to-r from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 pb-20">
         {/* Careers Label */}
  <div className="relative w-full md:w-2/3 p-4 flex items-center justify-center">
  <div className="absolute top-4 left-4 bg-white shadow-md px-4 py-2 rounded-sm z-10">
    <h2 className="text-xl font-semibold text-gray-800">businesses</h2>
  </div>
      {/* Left Preview Section */}
      <div className="md:w-2/3 w-full mt-15 flex items-center justify-center p-6 bg-white dark:bg-gray-900">
       {/* Careers Label */}

        <AnimatePresence mode="wait">
          <motion.div
            key={selected.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            // className="text-center max-w-md"
             className="text-center max-w-md w-full  bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 shadow-xl"
          >
        
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full max-h-[300px] object-contain mx-auto rounded-xl shadow-lg mb-6"
            />
            <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {selected.description}
            </p>
            <a
              href={selected.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              Visit Website
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
      </div>

      {/* Right Scrollable Thumbnails */}
      <div className="md:w-1/3 mt-15 w-full md:h-full h-1/2 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-800 space-y-4 pr-2 ">
        {businesses.map((biz) => (
          <motion.div
            key={biz.name}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelected(biz)}
            className={`cursor-pointer bg-white dark:bg-gray-700 p-3 rounded-xl shadow-md transition-all border-2 ${
              selected.name === biz.name
                ? "border-blue-600 dark:border-blue-400"
                : "border-transparent"
            }`}
          >
            <div className="flex items-center gap-4">
              <img
                src={biz.image}
                alt={biz.name}
                className="w-14 h-14 object-contain rounded"
              />
              <div>
                <h4 className="font-semibold text-md">{biz.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-300 line-clamp-2">
                  {biz.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
        
     {/* --- Mobile View --- */}
      <section className="md:hidden flex flex-col w-full px-4 py-6 bg-white dark:bg-gray-900">
      {/* Section Title */}
  <div className="mb-4 bg-white shadow-md px-4 py-2 rounded-sm w-max self-start">
    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">businesses</h2>
  </div>
        {/* Active Large Card */}
        <motion.div
          key={selected.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-lg p-4 mb-4"
        >
          <img
            src={selected.image}
            alt={selected.name}
            className="w-full h-40 object-contain mb-4"
          />
          <h2 className="text-lg font-semibold text-center mb-2">{selected.name}</h2>
          <p className="text-sm text-center text-gray-600 dark:text-gray-300">{selected.description}</p>
          <a
            href={selected.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-xl font-medium"
          >
            Visit Website
          </a>
        </motion.div>

        {/* Small Cards Grid */}
        <div className="grid grid-cols-3 gap-3">
          {businesses.map((biz, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(biz)}
              className={`cursor-pointer bg-white dark:bg-gray-700 p-2 rounded-xl shadow-md transition-all border-2 ${
                selected.name === biz.name ? "border-blue-600" : "border-transparent"
              }`}
            >
              <img src={biz.image} alt={biz.name} className="h-12 w-full object-contain mb-1" />
              <p className="text-[10px] text-center truncate">{biz.name}</p>
            </div>
          ))}
        </div>
      </section>
      
      </>
  );
}

