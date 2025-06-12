// import React from "react";

// const ContactUs = () => {
//   return (
//     <section className="bg-white text-gray-800 py-16 px-6 max-w-7xl mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>

//       <div className="grid md:grid-cols-3 gap-6 border-t border-b border-gray-300 py-10 relative">
//         {/* Column 1: Group Head Office */}
//         <div className="text-center px-4">
//           <h3 className="text-xl font-semibold mb-2">Head Office</h3>
//           <p className="text-gray-600">LNCT Group Campus,<br /> Raisen Road, Bhopal, MP</p>
//           <p className="mt-2">📧 info@lnctgroup.in</p>
//           <p>📞 +91-755-1234567</p>
//         </div>

//         {/* Vertical Line 1 */}
//         <div className="hidden md:block absolute left-1/3 top-10 bottom-10 border-1 border-dotted border-gray-300 opacity-70" />

//         {/* Column 2: Institutions */}
//         <div className="text-center px-4">
//           <h3 className="text-xl font-semibold mb-2">Institutions</h3>
//           <p className="text-gray-600">LNCT University, LNCT Bhopal, LNCTE, Rishiraj Nursing, etc.</p>
//           <p className="mt-2">📧 admissions@lnctu.ac.in</p>
//           <p>📞 +91-755-6789012</p>
//         </div>

//         {/* Vertical Line 2 */}
//         <div className="hidden md:block absolute left-2/3 top-10 bottom-10 border-l border-dotted border-gray-300 opacity-70" />

//         {/* Column 3: Businesses */}
//         <div className="text-center px-4">
//           <h3 className="text-xl font-semibold mb-2">Business Ventures</h3>
//           <p className="text-gray-600">LNCT Hospitals, Media, IT Solutions, etc.</p>
//           <p className="mt-2">📧 business@lnctgroup.in</p>
//           <p>📞 +91-755-7890123</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;



import { motion } from "framer-motion";

const contactData = {
  headOffice: {
    title: "Head Office LNCT Group",
    address: " LNCT Campus, Kalchuri Nagar, (P.O. Kolua) Raisen Road, Bhopal-462022 (M.P).",
    email: "info@lnctgroup.in",
    phone: "+91-755-1234567",
  },

   corporateOffice: {
    title: "Corporate Office LNCT Group",
    address: "31 Shyamla Hills, Bharat Bhawan Rd, Bhopal, Madhya Pradesh",
    email: "corporate@lnctgroup.in",
    phone: "+91-7201800001",
  },
  institutions: [
    { name: "LNCT University", link: "https://www.lnctu.ac.in" },
    { name: "LNCT Bhopal", link: "https://lnct.ac.in" },
    { name: "LNCTE", link: "https://lncte.ac.in" },
    { name: "Rishiraj Nursing", link: "https://rishirajnursingcollege.in" },
    { name: "LNCT World School", link: "https://lnctworldschool.ac.in" },
    {name:"LNCTS", link:"http://lncts.in"},
    {name:"LNCT Pharmacy College Bhopal", link:"https://lncpbhopal.in"},
    {name:"LN Ayurved College", link:"https://www.lnayurvedcollege.com./"},
    {name: "LNCT MCA", link:"https://lnctmca.in/"},
    {name: "JNCT Professional University" , link:"https://www.jnctpu.edu.in/"},
    {name:"LNCT Guru", link:"https://lnctguru.com/"}
  ],
  businesses: [
    { name: "Ananjay Private Limited", link: "https://www.ananjay.co.in/" },
    { name: "Kalchuri Contractors Ltd.", link: "https://kalchuricontractors.ltd/" },
    { name: "Parvati Sweetners", link: "http://parvatisweetners.co.in/" },
     { name: "Ananjay Pharma", link: "https://ananjaypharma.co.in/" },
      { name: "Dabra Alcobrew", link: "https://dabraalcobrew.com/" },
      {name:"Vitamax Healthcare", link :"https://vitamax.co.in/"},
      {name:"jayant jaggery", link:"https://jayantjaggery.com/"}
  ],
};

const ContactUs = () => {
  return (
    <section id="ContactUs" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Contact Us
      </motion.h2>

      <div className="grid md:grid-cols-4 gap-6 border-y border-gray-300 relative px-4 max-w-7xl mx-auto">

        {/* Head Office */}
        <div className="p-6 backdrop-blur-sm bg-white/20 dark:bg-white/10 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">{contactData.headOffice.title}</h3>
          <p className="text-sm mb-2">{contactData.headOffice.address}</p>
          <p className="text-sm">📧 {contactData.headOffice.email}</p>
          <p className="text-sm">📞 {contactData.headOffice.phone}</p>

         <div className="mt-4">
  <iframe
    title="LNCT Map"
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.776907958862!2d77.52023868262768!3d23.25120393795531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4244c97d6f29%3A0x72457a4e85fd116c!2sLNCT%20Group%20of%20Colleges!5e0!3m2!1sen!2sin!4v1748752714841!5m2!1sen!2sin" 
   
    width="100%"
    height="200"
    style={{ border: 0, borderRadius: "12px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
 </div>       

  <div className="hidden md:block absolute left-1/4 top-10 bottom-10 border-l border-dotted border-gray-400 opacity-40" />

 {/* Corporate Office */}
<div className="p-6 backdrop-blur-sm bg-white/20 dark:bg-white/10 rounded-2xl shadow-md">
  <h3 className="text-xl font-semibold mb-3">{contactData.corporateOffice.title}</h3>
  <p className="text-sm mb-2">{contactData.corporateOffice.address}</p>
  <p className="text-sm">📧 {contactData.corporateOffice.email}</p>
  <p className="text-sm">📞 {contactData.corporateOffice.phone}</p>

   <div className="mt-4">
  <iframe
    title="LNCT corporate office"
     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d469235.58258173807!2d77.392894!3d23.246617!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42a6cff56083%3A0x3c71c74bd6711580!2sBharat%20Bhawan%20Rd%2C%20Shymala%20Hills%2C%20Bhopal%2C%20Madhya%20Pradesh%20462002%2C%20India!5e0!3m2!1sen!2sus!4v1749372286410!5m2!1sen!2sus" 
   
    width="100%"
    height="200"
    style={{ border: 0, borderRadius: "12px" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
</div>


      {/* Divider 1 */}
        <div className="hidden md:block absolute left-2/4 top-10 bottom-10 border-l border-dotted border-gray-400 opacity-40" />

        {/* Institutions */}
        <div className="p-6 backdrop-blur-sm bg-white/20 dark:bg-white/10 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Institutions</h3>
          <ul className="space-y-2">
            {contactData.institutions.map((inst) => (
              <li key={inst.name}>
                <a
                  href={inst.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:text-blue-700 dark:hover:text-blue-400 hover:underline"
                >
                  {inst.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider 2 */}
        <div className="hidden md:block absolute left-3/4 top-10 bottom-10 border-l border-dotted border-gray-400 opacity-40" />

        {/* Businesses */}
        <div className="p-6 backdrop-blur-sm bg-white/20 dark:bg-white/10 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold mb-3">Businesses</h3>
          <ul className="space-y-2">
            {contactData.businesses.map((biz) => (
              <li key={biz.name}>
                <a
                  href={biz.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:text-blue-700 dark:hover:text-blue-400 hover:underline"
                >
                  {biz.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
