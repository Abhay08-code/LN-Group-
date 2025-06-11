// import { useState } from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import InstitutionCards from './InstitutionCards'
// import NavBar from './NavBar'
// import BusinessCards from './BusinessCards'
// // import DarkModeToggle from './DarkModeToggle'
// import ContactUs from './ContactUs'
// import ScrollToTopButton from './ScrollToTopButton'
// import InstitutionShowcase from './heroimg'
// import AboutLNCT from '../public/AboutLNCT'
// import LeadershipSection from '../public/LeadershipSection'
// import BusinessShowcase from '../public/BusinessShowcase'
// function App() {


//   return (
//     <div>
//      <>
//       <NavBar  />
//       {/* <DarkModeToggle/> */}
  
//       </>
//       < section id="home" className="pt-20">
   
//       </section>
//       <div className="relative">
//       {/* Your content here */}
//       <ScrollToTopButton />
//     </div>
//     <>
//     <AboutLNCT/>
//     <LeadershipSection/>
//     </>
//       <div className="pt-24 bg-gray-100 min-h-screen"> 
//       <InstitutionCards/>
//       </div>
//             <div className="pt-24 bg-gray-100 min-h-screen"> 
//       <BusinessCards/>
//       </div>
//       <>
//          <InstitutionShowcase/>
        
//       </>
//       <div> <BusinessShowcase/></div>
//       <ContactUs/>
      
//     </div>
//   );
// }

// export default App;




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import ScrollToTopButton from './ScrollToTopButton';
import ContactUs from './ContactUs';

// Landing Page Components
import AboutLNCT from '../public/AboutLNCT';
import LeadershipSection from '../public/LeadershipSection';

// Institution Page Components
import InstitutionCards from './InstitutionCards';
import InstitutionShowcase from './heroimg';

// Business Page Components
import BusinessCards from './BusinessCards';
import BusinessShowcase from '../public/BusinessShowcase';

// Pages
const Home = () => (
  <>
    <section id="home" className="pt-20"></section>
    <ScrollToTopButton />
    <AboutLNCT />
    <LeadershipSection />
      <InstitutionShowcase />
       <BusinessShowcase />
    <ContactUs />
  </>
);

const InstitutionsPage = () => (
  <div className="pt-24 bg-gray-100 min-h-screen">
    <InstitutionCards />
   
  </div>
);

const BusinessesPage = () => (
  <div className="pt-24 bg-gray-100 min-h-screen">
    <BusinessCards />
   
  </div>
);

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/institutions" element={<InstitutionsPage />} />
        <Route path="/businesses" element={<BusinessesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
