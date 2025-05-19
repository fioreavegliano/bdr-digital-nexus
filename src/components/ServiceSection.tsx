import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Network, Phone, Cctv, Database, Calendar, Smartphone } from 'lucide-react';
import { useLanguage } from '@/contexts/language';

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
  url: string;
}

const ServiceCard = ({ service }: { service: ServiceProps }) => {
  const { t } = useLanguage();
  
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
        <Button 
          className="w-full bg-gradient-to-r from-[#091633] to-[#304375] hover:from-[#091633] hover:to-[#1a2851]"
          onClick={() => window.open(service.url, '_blank')}
        >
          {t('service.more')}
        </Button>
      </CardFooter>
    </Card>
  );
};

const ServiceSection = () => {
  const { t, language } = useLanguage();
  
  const services = [
    {
      id: "comunicaciones",
      title: t('service.comunicaciones.title'),
      description: t('service.comunicaciones.description'),
      color: "bg-[#091633]/10 text-[#091633]",
      icon: <Network className="h-8 w-8" />,
      items: [
        t('service.comunicaciones.item1'),
        t('service.comunicaciones.item2'),
        t('service.comunicaciones.item3'),
        t('service.comunicaciones.item4'),
        t('service.comunicaciones.item5')
      ],
      url: "https://bdrinformatica.com"
    },
    {
      id: "odoo",
      title: t('service.odoo.title'),
      description: t('service.odoo.description'),
      color: "bg-[#e81f76]/10 text-[#e81f76]",
      icon: <Database className="h-8 w-8" />,
      items: [
        t('service.odoo.item1'),
        t('service.odoo.item2'),
        t('service.odoo.item3'),
        t('service.odoo.item4'),
        t('service.odoo.item5')
      ],
      url: "https://odooandorra.com"
    },
    {
      id: "ski",
      title: t('service.ski.title'),
      description: t('service.ski.description'),
      color: "bg-[#7e57c5]/10 text-[#7e57c5]",
      icon: <Calendar className="h-8 w-8" />,
      items: [
        t('service.ski.item1'),
        t('service.ski.item2'),
        t('service.ski.item3'),
        t('service.ski.item4'),
        t('service.ski.item5')
      ],
      url: "https://skisolution360.com"
    }
  ];

  return (
    <section id="servicios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('service.title')}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('service.subtitle')}
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
