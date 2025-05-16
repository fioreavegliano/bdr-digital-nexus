
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Network, Phone, Cctv, Database, Calendar, Smartphone } from 'lucide-react';

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
}

const ServiceCard = ({ service }: { service: ServiceProps }) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className={`p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4 ${service.color}`}>
          {service.icon}
        </div>
        <CardTitle className="text-2xl">{service.title}</CardTitle>
        <CardDescription className="text-base">{service.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {service.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1 text-[#7e57c5]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-gradient-to-r from-[#091633] to-[#304375] hover:from-[#091633] hover:to-[#1a2851]">
          Más información
        </Button>
      </CardFooter>
    </Card>
  );
};

const services = [
  {
    id: "comunicaciones",
    title: "BDR Comunicaciones",
    description: "Soluciones integrales de conectividad y comunicación para empresas",
    color: "bg-[#091633]/10 text-[#091633]",
    icon: <Network className="h-8 w-8" />,
    items: [
      "Infraestructura de redes y conectividad",
      "Telefonía VoIP y comunicaciones unificadas",
      "Sistemas de videovigilancia CCTV",
      "Mantenimiento y soporte técnico",
      "Soluciones de conectividad inalámbrica"
    ]
  },
  {
    id: "odoo",
    title: "BDR Odoo",
    description: "Gestión empresarial integral con el ERP Odoo personalizado para tu negocio",
    color: "bg-[#e81f76]/10 text-[#e81f76]",
    icon: <Database className="h-8 w-8" />,
    items: [
      "Consultoría e implementación de Odoo ERP",
      "Desarrollo de módulos personalizados",
      "Integración con sistemas existentes",
      "Migración y actualización de versiones",
      "Formación y soporte continuo"
    ]
  },
  {
    id: "ski",
    title: "BDR Ski Solution",
    description: "Software y hardware especializado para estaciones de esquí y montaña",
    color: "bg-[#7e57c5]/10 text-[#7e57c5]",
    icon: <Calendar className="h-8 w-8" />,
    items: [
      "Control de accesos para estaciones",
      "Gestión de forfaits y reservas",
      "Apps móviles personalizadas",
      "Sistemas de información para visitantes",
      "Integración con sistemas meteorológicos"
    ]
  }
];

const ServiceSection = () => {
  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros servicios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desarrollamos soluciones tecnológicas integrales adaptadas a las necesidades específicas de cada sector
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
