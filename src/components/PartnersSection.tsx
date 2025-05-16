
import React from 'react';

const PartnersSection = () => {
  const partners = [
    { id: 1, name: "Microsoft", logoClass: "opacity-60 hover:opacity-100 transition-opacity" },
    { id: 2, name: "Cisco", logoClass: "opacity-60 hover:opacity-100 transition-opacity" },
    { id: 3, name: "Odoo", logoClass: "opacity-60 hover:opacity-100 transition-opacity" },
    { id: 4, name: "HP", logoClass: "opacity-60 hover:opacity-100 transition-opacity" },
    { id: 5, name: "Dell", logoClass: "opacity-60 hover:opacity-100 transition-opacity" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Nuestros colaboradores</h2>
          <p className="text-gray-600">Trabajamos con los mejores partners tecnológicos</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          {partners.map((partner) => (
            <div key={partner.id} className={partner.logoClass}>
              <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-500">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
