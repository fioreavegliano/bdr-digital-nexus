
import React from 'react';
import { Calendar, Users, Target, Star, Lightbulb, Shield, Heart, HandHeart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const timelineEvents = [
    {
      year: "1998",
      title: "Nacimiento",
      description: "Comenzamos como un emprendimiento en Barcelona, enfocado en el mundo del esquí, ganando reconocimiento por nuestro enfoque centrado en el cliente y adaptación al mercado.",
      icon: <Star className="h-6 w-6" />
    },
    {
      year: "2005",
      title: "Delegación en Andorra",
      description: "Creamos la delegación de Andorra para acercar soluciones a los clientes de los Pirineos.",
      icon: <Target className="h-6 w-6" />
    },
    {
      year: "2007",
      title: "Alianzas estratégicas",
      description: "Establecimos acuerdos estratégicos con fabricantes especializados en control de acceso en estaciones de esquí, posicionándonos como líderes nacionales en el sector.",
      icon: <HandHeart className="h-6 w-6" />
    },
    {
      year: "2010",
      title: "Expansión del equipo",
      description: "Triplicamos nuestro equipo técnico, formando un grupo multidisciplinario que nos convirtió en especialistas en integraciones.",
      icon: <Users className="h-6 w-6" />
    },
    {
      year: "2012",
      title: "Desarrollo propio",
      description: "Desarrollamos nuestras propias interfaces y APIs, cubriendo al 100% las necesidades de las estaciones de esquí, consolidándonos como líderes en el sector.",
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      year: "2019",
      title: "SKI SOLUTION 360",
      description: "Iniciamos la migración a nuevas plataformas tecnológicas y bases de datos, dando paso a nuestra nueva aplicación para estaciones de esquí, el SKI SOLUTION 360.",
      icon: <Target className="h-6 w-6" />
    },
    {
      year: "2023",
      title: "25 aniversario",
      description: "Celebramos nuestro 25 aniversario, con presencia en el 70% de las estaciones de esquí de la península Ibérica y siendo agentes de Odoo.",
      icon: <Calendar className="h-6 w-6" />
    }
  ];

  const values = [
    {
      title: "EXCELENCIA",
      description: "Buscamos constantemente la excelencia en nuestros productos, servicios y operaciones, superando las expectativas del cliente y manteniendo altos estándares de calidad.",
      icon: <Star className="h-8 w-8" />,
      color: "bg-[#091633]/10 text-[#091633]"
    },
    {
      title: "INNOVACIÓN",
      description: "Abrazamos la innovación como pilar fundamental, buscando continuamente nuevas soluciones y tecnologías para brindar ventajas competitivas a nuestros clientes.",
      icon: <Lightbulb className="h-8 w-8" />,
      color: "bg-[#7e57c5]/10 text-[#7e57c5]"
    },
    {
      title: "INTEGRIDAD",
      description: "Valoramos la honestidad, transparencia y ética en todas nuestras interacciones y decisiones, actuando con responsabilidad y respeto hacia nuestros clientes, empleados y socios comerciales.",
      icon: <Shield className="h-8 w-8" />,
      color: "bg-[#e81f76]/10 text-[#e81f76]"
    },
    {
      title: "ORIENTACIÓN AL CLIENTE",
      description: "La satisfacción del cliente es una prioridad para nosotros. Escuchamos activamente sus necesidades y ofrecemos soluciones personalizadas que agregan valor a sus negocios.",
      icon: <Heart className="h-8 w-8" />,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "TRABAJO EN EQUIPO",
      description: "Fomentamos un ambiente de colaboración y respeto mutuo entre nuestros empleados, reconociendo que el trabajo en equipo es esencial para lograr resultados excepcionales y enfrentar desafíos con éxito.",
      icon: <Users className="h-8 w-8" />,
      color: "bg-green-500/10 text-green-600"
    }
  ];

  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">BDR GROUP: Conoce Nuestro Enfoque y Valores</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            BDR es una empresa tecnológica fundada en 1998 con el objetivo de ofrecer soluciones innovadoras y de calidad en el campo de las tecnologías de la información. A lo largo de los años, hemos experimentado un crecimiento constante, ampliando nuestros servicios para atender a diversos sectores, desde pequeñas empresas hasta grandes corporaciones. Nuestra dedicación a la excelencia y compromiso con la innovación nos han convertido en un referente en el ámbito tecnológico regional y más allá.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Nuestra historia</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#091633] to-[#7e57c5] hidden md:block"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-full bg-[#7e57c5]/10 text-[#7e57c5]`}>
                          {event.icon}
                        </div>
                        <h4 className="text-xl font-bold">{event.title}</h4>
                      </div>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline marker */}
                  <div className="relative flex items-center justify-center w-16 h-16 mx-4 my-4 md:my-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#091633] to-[#7e57c5] rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {event.year.slice(-2)}
                    </div>
                  </div>
                  
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-left md:pl-8' : 'md:text-right md:pr-8'}`}>
                    <div className="text-3xl font-bold text-[#7e57c5]">{event.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="mb-20 bg-gradient-to-br from-[#091633] to-[#304375] rounded-lg p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Misión</h3>
          <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto">
            En BDR, nuestra misión es proporcionar soluciones tecnológicas integrales y vanguardistas para satisfacer las necesidades específicas de nuestros clientes. Nos enfocamos en ser un socio confiable que empodera a las organizaciones y personas mediante la optimización de procesos y eficiencia tecnológica. Impulsamos la eficiencia, la productividad y la competitividad de nuestros clientes, manteniéndonos a la vanguardia de la innovación y adaptándonos a los desafíos del mundo digital.
          </p>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">Valores</h3>
          <p className="text-lg text-gray-600 text-center mb-12">Nuestro éxito se basa en sólidos valores fundamentales:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={value.title} className="bg-white p-6 rounded-lg shadow-lg border hover:shadow-xl transition-shadow duration-300">
                <div className={`p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 ${value.color}`}>
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            En BDR, estamos comprometidos con la excelencia, la innovación y la satisfacción del cliente, y continuamos esforzándonos por brindar soluciones tecnológicas efectivas que marquen la diferencia en el mercado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
