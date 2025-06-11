

// import React from 'react';
// import "./NavBar.css"
// import DarkModeToggle from './DarkModeToggle';
// export default function NavBar() {

//       const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };


//   return (
//      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md    ">

//       <div className="flex justify-between items-center px-8 py-4">
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <h2 className="text-3xl font-bold text-pink-500">lnct</h2>
        
//         </div>

//         {/* Navigation Links */}
//         <ul className="flex gap-10 text-lg font-medium text-blue-700">
//           <li  onClick={() => scrollToSection('home')} className="hover:text-pink-500 cursor-pointer"> <a href="#" className="transition">Home</a></li>
//           <li onClick={() => scrollToSection('institutions')} className="hover:text-pink-500 cursor-pointer"><a href="#institutions" className="hover:text-blue-600 transition">Institutions</a></li>
//           <li onClick={() => scrollToSection('businesses')} className="hover:text-pink-500 cursor-pointer"><a href="#businesses" className="hover:text-pink-600 transition">Businesses</a></li>
//           <li onClick={() => scrollToSection('contact')}  className="hover:text-pink-500 cursor-pointer"><a href="#ContactUs" className="transition">Contact Us</a></li>
         
        
//         </ul>
//       </div>
//     </nav>
//   );
// }


// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react'; // You can use any icon
// import "./NavBar.css";
// import DarkModeToggle from './DarkModeToggle';

// export default function NavBar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       setMenuOpen(false); // Close mobile menu on click
//     }
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
//       <div className="flex justify-between items-center px-8 py-4">
//         {/* Logo */}
//         <h2 className="text-3xl font-bold text-pink-500">lnct</h2>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex gap-10 text-lg font-medium text-blue-700">
//           <li onClick={() => scrollToSection('home')} className="hover:text-pink-500 cursor-pointer">Home</li>
//           <li onClick={() => scrollToSection('institutions')} className="hover:text-pink-500 cursor-pointer">Institutions</li>
//           <li onClick={() => scrollToSection('businesses')} className="hover:text-pink-500 cursor-pointer">Businesses</li>
//           <li onClick={() => scrollToSection('ContactUs')} className="hover:text-pink-500 cursor-pointer">Contact Us</li>
//         </ul>

//         {/* Hamburger icon for mobile */}
//         <div className="lg:hidden">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="lg:hidden px-8 pb-4 bg-white shadow-md">
//           <ul className="flex flex-col gap-4 text-lg font-medium text-blue-700">
//             <li onClick={() => scrollToSection('home')} className="hover:text-pink-500 cursor-pointer">Home</li>
//             <li onClick={() => scrollToSection('institutions')} className="hover:text-pink-500 cursor-pointer">Institutions</li>
//             <li onClick={() => scrollToSection('businesses')} className="hover:text-pink-500 cursor-pointer">Businesses</li>
//             <li onClick={() => scrollToSection('ContactUs')} className="hover:text-pink-500 cursor-pointer">Contact Us</li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }








import  { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ onSearch }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // send value to parent for filtering
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <h2 className="text-3xl font-bold !text-teal-700">LN Group</h2>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 text-lg font-medium text-blue-700">
          <li onClick={() => scrollToSection('home')} className="hover:text-pink-500 cursor-pointer">Home</li>
          <li onClick={() => scrollToSection('institutions')} className="hover:text-pink-500 cursor-pointer"><Link to="/institutions">Institutions</Link></li>
          <li onClick={() => scrollToSection('businesses')} className="hover:text-pink-500 cursor-pointer"><Link to="/businesses">Businesses</Link></li>
          <li onClick={() => scrollToSection('ContactUs')} className="hover:text-pink-500 cursor-pointer">Contact Us</li>
        </ul>

        {/* Right side: Search + Menu */}
        {/* <div className="flex items-center gap-4"> */}
          {/* Search */}
          {/* <div className="relative hidden lg:block">
            {showSearch && (
              <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="p-1 px-3 text-black border rounded-md focus:outline-none"
              />
            )} */}
            {/* <Search
              className="ml-2 text-blue-700 hover:text-pink-500 cursor-pointer"
              size={20}
              onClick={() => setShowSearch(prev => !prev)}
            />
          </div> */}

          {/* Mobile Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        {/* </div> */}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-8 pb-4 bg-white shadow-md">
          <ul className="flex flex-col gap-4 text-lg font-medium text-blue-700">
            <li onClick={() => scrollToSection('home')} className="hover:text-pink-500 cursor-pointer">Home</li>
            <li onClick={() => scrollToSection('institutions')} className="hover:text-pink-500 cursor-pointer">Institutions</li>
            <li onClick={() => scrollToSection('businesses')} className="hover:text-pink-500 cursor-pointer">Businesses</li>
            <li onClick={() => scrollToSection('ContactUs')} className="hover:text-pink-500 cursor-pointer">Contact Us</li>
          </ul>

          {/* Mobile Search */}
          <div className="mt-4 flex items-center gap-2">
            <input
              type="text"
              value={query}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="flex-1 p-1 px-3 text-black border rounded-md focus:outline-none"
            />
            <Search
              className="text-blue-700 hover:text-pink-500 cursor-pointer"
              size={20}
              onClick={() => setShowSearch(prev => !prev)}
            />
          </div>
        </div>
      )}
    </nav>
  );
}
