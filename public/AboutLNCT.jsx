import React from "react";


export default function AboutLNCT() {
  return (
    <section id="about-lnct" className="bg-white px-6 md:px-20 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          
          <h2 className="text-4xl font-bold !text-teal-700 mb-8">LNCT Group</h2>
           <p className="text-sm font-semibold !text-slate-600 uppercase mb-">
            Working Towards Being the Best
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
           A leading institution that plays a key role in advancing technical education and career opportunities in Madhya Pradesh and Chhattisgarh.
</p>
          <p className="text-gray-700 leading-relaxed">
            Founded in 1994, <span className="font-semibold">LNCT Group</span> is the visionary force behind the <span className="font-semibold">LNCT Group of Colleges</span> –  Central India’s No.1 most respected and fastest-growing educational groups. With a legacy of excellence, innovation, and dedication to nation-building through education.
          </p>
          <button className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-md hover:opacity-90"><a href="https://lnct.ac.in/" className="text-white no-underline block">
            DISCOVER NOW</a>
          </button>
        </div>

        {/* Image Section */}
        <div className="space-y-6">
          <img src="src/LNCT GROUP CAMPUS IMG.jpg" alt="LNCT Campus 1" className="rounded-lg shadow-lg" />
          {/* <img src="src/LNCT CAMPUS 2 IMG.jpg" alt="LNCT Campus 2" className="rounded-lg shadow-lg" /> */}
        </div>
      </div>
    </section>
  );
}


