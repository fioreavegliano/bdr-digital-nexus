
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Tecnología que <span className="bg-gradient-to-r from-[#e81f76] to-[#7e57c5] text-transparent bg-clip-text">conecta, gestiona y transforma</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Soluciones tecnológicas integrales para empresas que buscan innovación, eficiencia y crecimiento en la era digital.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#091633] hover:bg-[#091633]/90 text-white">
                <a href="#servicios">Descubre nuestros servicios</a>
              </Button>
              <Button variant="outline" className="border-[#7e57c5] text-[#7e57c5] hover:bg-[#7e57c5]/10">
                <a href="#contacto">Contactar ahora</a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-[#e81f76]/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[#7e57c5]/10 rounded-full blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" 
                alt="Tecnología innovadora" 
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
