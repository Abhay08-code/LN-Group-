import React from "react"
import institutions from "./institutions" 

export default function InstitutionCards() {
  return (
    <div className="bg-gray-100 py-10 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
        LNCT Group Institutions
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {institutions.map((inst, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden border hover:shadow-2xl transition-all"
          >
            <img
              src={inst.logo}
              alt={`${inst.name} logo`}
              className="w-full h-40 object-contain p-4 bg-gray-50"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {inst.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                <strong>Type:</strong> {inst.type}
              </p>
              <p className="text-sm text-gray-600">
                <strong>City:</strong> {inst.city}
              </p>
              <a
                href={inst.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
              >
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
