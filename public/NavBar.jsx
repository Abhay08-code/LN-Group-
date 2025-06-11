// export default function NavBar(){
//     let styles = {
//         display:"flex",
//         alignItems:"end",
//         justifyContent:"space-Between",
        
//         fontFamily:"arial",
//         color:"blue",
        
       



//     }
//     return(
//         <nav className="z-50 bg-white">
//                   <div className="h-10vh flex justify-between lg:py-5 px-20  py -20 border-b"></div>
//  <div className="flex items-center flex-1">
//           <h2 className="text-3xl font-bold text-pink-500 "> lnct </h2>
//          </div>
//         <div>
//         <ul style={styles} className="flex gap-8 mr-16 text-[18px]">
//             <li>Home</li>
//             <li>institution</li>

//             <li>Business</li>
//             <li>Contact Us</li>
//         </ul>
//                </div>
//                 </div>
//                 </nav>
//     );
// };
// const NavBar = () => {
//   return (
//     <nav className="z-50 bg-white">
//       <div className="h-10vh flex justify-between lg:py-5 px-20  py -20 border-b">
//         <div className="flex items-center flex-1">
//           <h2 className="text-3xl font-bold text-pink-500 "> BOWANA </h2>
//         </div>
//         <div>
//           <ul className="flex gap-8 mr-16 text-[18px]">
//             <Link to="/"><li>Home</li></Link>
//             <Link to="/"><li>Blogs</li></Link>
//             <Link to="/"><li>Services</li></Link>
//             <Link to="/"><li>Book An Appointment</li></Link>
//             <Link to="/"><li>Contact Us</li></Link>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default NavBar;
// export default function NavBar() {
//   return (
//     <nav className="z-50 bg-white border-b">
//       <div className="h-[10vh] flex justify-between items-center px-20 py-5">
//         <div className="flex items-center flex-1">
//           <h2 className="text-3xl font-bold text-pink-500">lnct</h2>
//         </div>

//         <div>
//           <ul className="flex gap-8 mr-16 text-[18px] font-medium text-blue-600">
//             <li className="hover:text-pink-500 cursor-pointer">Home</li>
//             <li className="hover:text-pink-500 cursor-pointer">Institution</li>
//             <li className="hover:text-pink-500 cursor-pointer">Business</li>
//             <li className="hover:text-pink-500 cursor-pointer">Contact Us</li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }


import React from 'react';

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <h2 className="text-3xl font-bold text-pink-500">lnct</h2>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-10 text-lg font-medium text-blue-700">
          <li className="hover:text-pink-500 cursor-pointer">Home</li>
          <li className="hover:text-pink-500 cursor-pointer">Institution</li>
          <li className="hover:text-pink-500 cursor-pointer">Business</li>
          <li className="hover:text-pink-500 cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}
