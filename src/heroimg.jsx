// import { useState } from 'react';

// const institutions = 
// [
//   {
//     name: 'LNCT Bhopal',
//     image: 'src/lnct main logo.png',
//     link: 'src/lnct bhopal img.jpeg',
//   },
//   {
//     name: 'LNCTE Bhopal',
//     image: 'src/lncte.png',
//     link: 'https://www.lncte.ac.in/',
//   },
//   {
//     name: 'LNCTU',
//     image: 'src/lnct university.jpeg',
//     link: 'https://www.lnctu.ac.in/',
//   },
//   {
//     name: 'LNCTS',
//     image: '/institutions/lncts.jpg',
//     link: 'src/lncts.jpeg',
//   },
//   // ➕ add more as needed
// ];

// [
  // Medical - Bhopal
//   {
//     name: "LNCT Pharmacy College Bhopal",
//     type: "Medical",
//     city: "Bhopal",
//     image: "src/lncp bhpal.png",
//     website: "https://lncpbhopal.in/",
//   },
  // {
  //   name: "LNCT Paramedical Sciences",
  //   type: "Medical",
  //   city: "Bhopal",
  //   logo: "/images/lncps.png",
  //   website: "https://lncps.in/",
  // },



//   {
//     name: "LN Ayurved College",
//     type: "Medical",
//     city: "Bhopal",
//     image: "src/ln ayurvedic colelge.jpeg",
//     website: "https://www.lnayurvedcollege.com/",
//   },
//   {
//     name: "CLC Homeopathy",
//     type: "Medical",
//     city: "bilaspur",
//     image: "src/clchomeopathy.png",
//     website: "https://clchomeopathy.in/",
//   },

//   // Medical - Indore
//   {
//     name: "LNMC Indore",
//     type: "Medical",
//     city: "Indore",
//     image: "src/lnmc indore.png",
//     website: "https://indorelnmc.com/",
//   },
//   {
//     name: "LNCT Rishiraj College",
//     type: "Medical",
//     city: "Indore",
//     image: "src/lnct rishiraj.jpg",
//     website: "https://www.lnctrishiraj.ac.in/",
//   },

//   // Engineering - Bhopal
//   {
//     name: "LNCT Bhopal",
//     type: "Engineering",
//     city: "Bhopal",
//     image: "src/lnct bhopal img.jpeg",
//     website: "https://lnct.ac.in/",
//   },
//   {
//     name: "JNCT Bhopal",
//     type: "Engineering",
//     city: "Bhopal",
//     image: "src/jnct image.png",
//     website: "https://www.jnctbhopal.ac.in/",
//   },
//   {
//     name: "LNCTE",
//     type: "Engineering",
//     city: "Bhopal",
//     image: "src/lncte.png",
//     website: "http://lncte.in/",
//   },
//   {
//     name: "LNCTS",
//     type: "Engineering",
//     city: "Bhopal",
//     image: "src/lncts.jpeg",
//     website: "http://lncts.in/",
//   },
//   {
//     name: "LNCT MCA",
//     type: "Engineering",
//     city: "Bhopal",
//     image: "src/lnct bhopal img.jpeg",
//     website: "https://lnctmca.in/",
//   },
//   {
//     name: "LNCTUJ",
//     type: "Engineering",
//     city: "Jabalpur",
//     image: "src/lnctujimg.png",
//     website: "https://lnctuj.com/",
//   },
//   {
//     name: "JNCT Professional University",
//     type: "Engineering",
//     city: "Bhopal",
//     image: "src/jnctpu logo.jpeg",
//     website: "https://www.jnctpu.edu.in/",
//   },

//   // Engineering - Indore
//   {
//     name: "LNCTS OP Indore",
//     type: "Engineering",
//     city: "Indore",
//     image: "src/lncts indore.jpeg",
//     website: "https://lnctsopindore.in/",
//   },
//   {
//     name: "LNCT Indore Campus",
//     type: "Engineering",
//     city: "Indore",
//     image: "src/lnct indore.jpeg",
//     website: "https://lnct.ac.in/lnct-bpl-indore-campus/",
//   },

//   // Engineering - Other
//   {
//     name: "CEC Bilaspur",
//     type: "Engineering",
//     city: "Bilaspur",
//     image: "src/cecbilaspur img.png",
//     website: "https://cecbilaspur.ac.in/",
//   },

//   // Schools
//   {
//     name: "LNCT World Schools",
//     type: "School",
//     city: "Multiple",
//     image: "src/lnct world school.jpeg",
//     website: "https://www.lnctworldschools.com/",
//   },

//   // University
//   {
//     name: "LNCT University",
//     type: "University",
//     city: "Bhopal",
//     image: "src/lnct university.jpeg",
//     website: "https://lnctvu.ac.in/",
//   },

//   // E-learning Platform
//   {
//     name: "LNCT Guru",
//     type: "E-learning",
//     city: "Bhopal",
//     image: "src/lnct guru.png",
//     website: "https://lnctguru.com/",
//   },
// ];

// const InstitutionShowcase = () => {
//   const [selected, setSelected] = useState(institutions[0]);

//   return (
//     <div className="w-full bg-white text-black">
//       {/* Main View */}
//       <div className="relative w-full h-[75vh] overflow-hidden">
//         <img
//           src={selected.image}
//           alt={selected.name}
//           className="w-full h-full object-cover transition duration-500"
//         />
//         <div className="absolute bottom-10 left-10 bg-white/40 backdrop-blur-lg p-4 rounded-xl shadow-md">
//           <h2 className="text-3xl font-bold">{selected.name}</h2>
//           <a
//             href={selected.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-2 inline-block text-blue-600 hover:underline"
//           >
//             Visit Website →
//           </a>
//         </div>
//       </div>

//       {/* Thumbnail Strip */}
//       <div className="flex overflow-x-auto space-x-4 p-4 bg-gray-100">
//         {institutions.map((inst, index) => (
//           <div
//             key={index}
//             onClick={() => setSelected(inst)}
//             className={`w-40 h-24 cursor-pointer transform transition hover:scale-105 ${
//               selected.name === inst.name ? 'ring-2 ring-blue-500' : ''
//             }`}
//           >
//             <img
//               src={inst.image}
//               alt={inst.name}
//               className="w-full h-full object-cover rounded-md"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default InstitutionShowcase;





// import { useState, useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: Lucide icons

// const institutions = [{
//     name: "LNCT Pharmacy College Bhopal",
//     type: "Medical",
//     city: "Bhopal",
//     image: "src/lncp bhpal.png",
//     website: "https://lncpbhopal.in/",
//   },
//   // {
//   //   name: "LNCT Paramedical Sciences",
//   //   type: "Medical",
//   //   city: "Bhopal",
//   //   logo: "/images/lncps.png",
//   //   website: "https://lncps.in/",
//   // },
//   {
//     name: "LN Ayurved College",
//     type: "Medical",
//     city: "Bhopal",
//     image: "src/ln ayurvedic colelge.jpeg",
//     website: "https://www.lnayurvedcollege.com/",
//   },
//   {
//     name: "CLC Homeopathy",
//     type: "Medical",
//     city: "bilaspur",
//     image: "src/clchomeopathy.png",
//     website: "https://clchomeopathy.in/",
//   },

//   // Medical - Indore
//   {
//     name: "LNMC Indore",
//     type: "Medical",
//     city: "Indore",
//     image: "src/lnmc indore.png",
//     website: "https://indorelnmc.com/",
//   },
//   {
//     name: "LNCT Rishiraj College",
//     type: "Medical",
//     city: "Indore",
//     image: "src/lnct rishiraj.jpg",
//     website: "https://www.lnctrishiraj.ac.in/",
//   },

//   // Engineering - Bhopal
//   {
//     name: "LNCT Bhopal",
//     type: "Engineering",
//     city: "Bhopal",
//     image: "src/lnct bhopal img.jpeg",
//     website: "https://lnct.ac.in/",
//   },
//   {
//     name: "JNCT Bhopal",
//     type: "Engineering",
//     city: "Bhopal",
//     image: "src/jnct image.png",
//     website: "https://www.jnctbhopal.ac.in/",
//   },
//   {
//     name: "LNCTE",
//     type: "Engineering",
//     city: "Bhopal",
//     image: "src/lncte.png",
//     website: "http://lncte.in/",
//   },
//   {
//     name: "LNCTS",
//     type: "Engineering",
//     city: "Bhopal",
//     image: "src/lncts.jpeg",
//     website: "http://lncts.in/",
//   },
//   {
//     name: "LNCT MCA",
//     type: "Engineering",
//     city: "Bhopal",
//     image: "src/lnct bhopal img.jpeg",
//     website: "https://lnctmca.in/",
//   },
//   {
//     name: "LNCTUJ",
//     type: "Engineering",
//     city: "Jabalpur",
//     image: "src/lnctujimg.png",
//     website: "https://lnctuj.com/",
//   },
//   {
//     name: "JNCT Professional University",
//     type: "Engineering",
//     city: "Bhopal",
//     image: "src/jnctpu logo.jpeg",
//     website: "https://www.jnctpu.edu.in/",
//   },

//   // Engineering - Indore
//   {
//     name: "LNCTS OP Indore",
//     type: "Engineering",
//     city: "Indore",
//     image: "src/lncts indore.jpeg",
//     website: "https://lnctsopindore.in/",
//   },
//   {
//     name: "LNCT Indore Campus",
//     type: "Engineering",
//     city: "Indore",
//     image: "src/lnct indore.jpeg",
//     website: "https://lnct.ac.in/lnct-bpl-indore-campus/",
//   },

//   // Engineering - Other
//   {
//     name: "CEC Bilaspur",
//     type: "Engineering",
//     city: "Bilaspur",
//     image: "src/cecbilaspur img.png",
//     website: "https://cecbilaspur.ac.in/",
//   },

//   // Schools
//   {
//     name: "LNCT World Schools",
//     type: "School",
//     city: "Multiple",
//     image: "src/lnct world school.jpeg",
//     website: "https://www.lnctworldschools.com/",
//   },

//   // University
//   {
//     name: "LNCT University",
//     type: "University",
//     city: "Bhopal",
//     image: "src/lnct university.jpeg",
//     website: "https://lnctvu.ac.in/",
//   },

//   // E-learning Platform
//   {
//     name: "LNCT Guru",
//     type: "E-learning",
//     city: "Bhopal",
//     image: "src/lnct guru.png",
//     website: "https://lnctguru.com/",
//   },
// ];

// const InstitutionShowcase = () => {
//   const [selected, setSelected] = useState(institutions[0]);
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     if (!current) return;
//     const scrollAmount = 300;
//     current.scrollBy({
//       left: direction === "left" ? -scrollAmount : scrollAmount,
//       behavior: "smooth",
//     });
//   };



//   return (
//     <div className="w-full bg-white text-black">
//       {/* Main View */}
//       <div className="relative w-full h-[75vh] overflow-hidden">
//         <img
//           src={selected.image}
//           alt={selected.name}
//           className="w-full h-full object-cover transition duration-500"
//         />
//         <div className="absolute bottom-10 left-10 bg-white/40 backdrop-blur-lg p-4 rounded-xl shadow-md">
//           <h2 className="text-3xl font-bold">{selected.name}</h2>
//           <a
//             href={selected.website}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="mt-2 inline-block text-blue-600 hover:underline"
//           >
//             Visit Website →
//           </a>
//         </div>
//       </div>

//       {/* Thumbnail Strip with Scroll Arrows */}
//       <div className="relative bg-gray-100 p-4">
//         {/* Left Scroll Button */}
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-200"
//         >
//           <ChevronLeft size={24} />
//         </button>

//         {/* Thumbnails */}
//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth px-10"
//         >
//           {institutions.map((inst, index) => (
//             <div
//               key={index}
//               onClick={() => setSelected(inst)}
//               className={`w-40 h-24 flex-shrink-0 cursor-pointer transform transition hover:scale-105 ${
//                 selected.name === inst.name ? "ring-2 ring-blue-500" : ""
//               }`}
//             >
//               <img
//                 src={inst.image}
//                 alt={inst.name}
//                 className="w-full h-full object-cover rounded-md"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Right Scroll Button */}
//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow-md p-2 hover:bg-gray-200"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InstitutionShowcase;




// 


import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const institutions = [{
    name: "LNCT Pharmacy College Bhopal",
    type: "Medical",
    city: "Bhopal",
    image: "src/lncp hero img.jpg",
    website: "https://lncpbhopal.in/",
  },
  // {
  //   name: "LNCT Paramedical Sciences",
  //   type: "Medical",
  //   city: "Bhopal",
  //   logo: "/images/lncps.png",
  //   website: "https://lncps.in/",
  // },
  {
    name: "LN Ayurved College",
    type: "Medical",
    city: "Bhopal",
    image: "src/ln ayurvedic college & hospital hero img.jpeg",
    website: "https://www.lnayurvedcollege.com/",
  },
  {
    name: "CLC Homeopathy",
    type: "Medical",
    city: "bilaspur",
    image: "src/clchomeopathy.png",
    website: "https://clchomeopathy.in/",
  },

  // Medical - Indore
  {
    name: "LNMC Indore",
    type: "Medical",
    city: "Indore",
    image: "src/lnct medical college indore hero img.jpg",
    website: "https://indorelnmc.com/",
  },
  {
    name: "LNCT Rishiraj College",
    type: "Medical",
    city: "bhoapl",
    image: "src/rishiraj college hero img.jpg",
    website: "https://www.lnctrishiraj.ac.in/",
  },

  // Engineering - Bhopal
  {
    name: "LNCT Bhopal",
    type: "Engineering",
    city: "Bhopal",
    image: "src/lnctmain hero img.jpeg",
    website: "https://lnct.ac.in/",
  },
  {
    name: "JNCT Bhopal",
    type: "Engineering",
    city: "Bhopal",
    image: "src/jnct bhopal hero img.jpg",
    website: "https://www.jnctbhopal.ac.in/",
  },
  {
    name: "LNCTE",
    type: "Engineering",
    city: "Bhopal",
    image: "src/lncte hero  img.jpg",
    website: "http://lncte.in/",
  },
  {
    name: "LNCTS",
    type: "Engineering",
    city: "Bhopal",
    image: "src/lncts hero img.jpeg",
    website: "http://lncts.in/",
  },
  {
    name: "LNCT MCA",
    type: "Engineering",
    city: "Bhopal",
    image: "src/lnct mca hero img.jpg",
    website: "https://lnctmca.in/",
  },
  {
    name: "LNCTUJ",
    type: "Engineering",
    city: "Jabalpur",
    image: "src/lnct jabalpur hero img dow..jpg",
    website: "https://lnctuj.com/",
  },
  {
    name: "JNCT Professional University",
    type: "Engineering",
    city: "Bhopal",
    image: "src/jnct bhopal hero img.jpg",
    website: "https://www.jnctpu.edu.in/",
  },

  // Engineering - Indore
  {
    name: "LNCTS OP Indore",
    type: "Engineering",
    city: "Indore",
    image: "src/lncts indore hero img.jpg",
    website: "https://lnctsopindore.in/",
  },
  {
    name: "LNCT Indore Campus",
    type: "Engineering",
    city: "Indore",
    image: "src/lnct bhopal indore campus hero img.png",
    website: "https://lnct.ac.in/lnct-bpl-indore-campus/",
  },

  // Engineering - Other
  {
    name: "CEC Bilaspur",
    type: "Engineering",
    city: "Bilaspur",
    image: "src/cec bilaspur hero img.jpg",
    website: "https://cecbilaspur.ac.in/",
  },

  // Schools
  {
    name: "LNCT World Schools",
    type: "School",
    city: "Multiple",
    image: "src/lnct world school hero img.jpg",
    website: "https://www.lnctworldschools.com/",
  },

  // University
  {
    name: "LNCT University",
    type: "University",
    city: "Bhopal",
    image: "src/lnct university hero img.jpg",
    website: "https://lnctvu.ac.in/",
  },

    {
    name: "LN medical college",
    type: "medical",
    city: "bhopal",
    image: "src/ln medical college hero img.jpg",
    website: "https://lnctu.ac.in/ln-medical-college/",
  },

  // E-learning Platform
  {
    name: "LNCT Guru",
    type: "E-learning",
    city: "Bhopal",
    image: "src/lnct guru.png",
    website: "https://lnctguru.com/",
  },];

const InstitutionShowcase = () => {
  const [selected, setSelected] = useState(institutions[0]);
  const scrollRef = useRef(null);

  

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };
  


  return (

  
    <div className="relative w-full object-cover h-[85vh] overflow-hidden text-white font-sans ">

       <div className="absolute top-4 left-4 bg-white shadow-md px-4 py-2 rounded-sm z-10">
    <h2 className="text-xl font-semibold text-gray-800">INSTITUTIONS</h2>
  </div> 
      {/* Background Image */}
      <div className="absolute inset-0  flex items-center justify-center z-0 px-10">
      <img
        src={selected.image}
        alt={selected.name}
        // className="absolute inset-0 w-full h-full object-cover z-0"
        // className="h-full w-full max-w-screen-2xl mx-auto  px-[30px] rounded-xl object-contain"
        className="max-w-full h-[420px] mb-25 object-contain"
      />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35 z-10" />

      {/* Main Info Text */}
      <div className="absolute top-1/4 left-10 z-20 space-y-4 max-w-[70%]">
        <p className="text-sm text-white/70">Our Institutions</p>
        <h2 className="text-4xl md:text-5xl font-bold !text-gray-50 leading-tight">{selected.name}</h2>
        <a
          href={selected.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition"
        >
          Visit Website →
        </a>
      </div>

      {/* Thumbnails Row */}
      <div className="absolute bottom-0  w-full bg-black px-6 py-6 z-30">
        <div className="relative h-[100px] bg-black/80  p-1 rounded-xl shadow-lg overflow-visible">

        {/* Left Gradient Overlay */}
<div className="absolute left-0 top-0 h-full w-30 bg-transparent z-40 pointer-events-none bg-gradient-to-r from-black via-black/70 to-transparent rounded-l-xl" />

{/* Right Gradient Overlay */}
<div className="absolute right-0 top-0 h-full w-30 bg-transparent z-40 pointer-events-none bg-gradient-to-l from-black via-black/70 to-transparent  rounded-r-xl" />
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-3/5 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 z-50"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Scrollable Thumbnails */}
          <div
            ref={scrollRef}
            className=" relative  flex overflow-x-scroll gap-4 scrollbar-hide px-24 py-0 relative z-20"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {institutions.map((inst, idx) => (
     

      <div
  key={idx}
  onClick={() => setSelected(inst)}
  className={` relative  min-w-[100px] h-[94px] shrink-0 rounded cursor-pointer overflow-hidden ring-2 transition-all duration-300 group ${
    selected.name === inst.name
      ? "ring-neutral-700"
      : "ring-transparent"
  } hover:-translate-y-2 hover:shadow-lg hover:z-50`}
>
  <img
    src={inst.image}
    alt={inst.name}
    className="w-full h-full object-contain "
  />
  {/* Hover Overlay */}
  <div className="absolute inset-0 bg-black/70  opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-20">
    <p className="text-white text-xs font-bold text-center px-2">
                   {inst.name}
    </p>
  </div>
</div>

            ))}
            
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-3/5 -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 z-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  
  );
};

export default InstitutionShowcase;
