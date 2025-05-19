
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PartnersSection = () => {
  const { t } = useLanguage();
  
  const partners = [
    { id: 1, name: "Proxmox", logo: "/lovable-uploads/42bc626d-9158-4bc2-9397-8f5ff4ec0a64.png" },
    { id: 2, name: "Odoo", logo: "/lovable-uploads/4d37ad58-3893-404c-99e0-1b4715e746cf.png" },
    { id: 3, name: "VMware", logo: "/lovable-uploads/037fe743-708b-478a-8acc-a48d2ba121e9.png" },
    { id: 4, name: "Veeam", logo: "/lovable-uploads/039004d5-0c15-4c21-a37f-f4b67b1234f2.png" },
    { id: 5, name: "3CX", logo: "/lovable-uploads/d64f035a-381c-4364-beda-331c94adaf23.png" },
    { id: 6, name: "Bitdefender", logo: "/lovable-uploads/133c3614-855a-48ef-ac6a-7072efe49d96.png" },
    { id: 7, name: "Office 365", logo: "/lovable-uploads/b5a6ab16-12ed-4082-8111-29e35fbb0948.png" },
    { id: 8, name: "Ubiquiti", logo: "/lovable-uploads/866c4e34-eb41-4cea-a80c-5a4e3f1e2ca8.png" },
    { id: 9, name: "HP Enterprise", logo: "/lovable-uploads/77761c54-9441-46e2-aa6f-ae5a1aef622f.png" },
    { id: 10, name: "MikroTik", logo: "/lovable-uploads/8cdd0758-a432-40f6-92b0-08b6fa8e521b.png" },
    { id: 11, name: "Cisco", logo: "/lovable-uploads/f2a3e8c5-6aca-48a4-b641-b4291b82638c.png" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">{t('partners.title')}</h2>
          <p className="text-gray-600">{t('partners.subtitle')}</p>
        </div>
        
        <div className="max-w-5xl mx-auto px-8 md:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {partners.map((partner) => (
                <CarouselItem key={partner.id} className="md:basis-1/3 lg:basis-1/4 h-24 flex items-center justify-center">
                  <div className="p-2 h-full w-full flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-16 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 lg:-left-8" />
            <CarouselNext className="absolute -right-4 lg:-right-8" />
          </Carousel>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Presencia en España y Andorra</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-medium text-lg mb-2">España</h4>
              <p className="text-gray-600">
                Barcelona · Madrid · Valencia
                <br />
                Servicios para toda España
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 shadow-sm">
              <h4 className="font-medium text-lg mb-2">Andorra</h4>
              <p className="text-gray-600">
                Andorra la Vella
                <br />
                Soluciones para el sector turístico y empresarial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
