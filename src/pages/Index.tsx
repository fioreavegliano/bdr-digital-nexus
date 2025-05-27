
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServiceSection from '@/components/ServiceSection';
import PartnersSection from '@/components/PartnersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language, t } = useLanguage();
  
  const getPageTitle = () => {
    switch (language) {
      case 'ca':
        return 'BDR Group - Tecnologia que connecta, gestiona i transforma';
      case 'en':
        return 'BDR Group - Technology that connects, manages and transforms';
      case 'fr':
        return 'BDR Group - Technologie qui connecte, gère et transforme';
      default:
        return 'BDR Group - Tecnología que conecta, gestiona y transforma';
    }
  };
  
  const getMetaDescription = () => {
    switch (language) {
      case 'ca':
        return 'BDR Group ofereix solucions tecnològiques integrals per a empreses a Andorra i Espanya: connectivitat, ERP Odoo i solucions per a estacions d\'esquí.';
      case 'en':
        return 'BDR Group provides comprehensive technology solutions for companies in Andorra and Spain: connectivity, Odoo ERP, and ski resort solutions.';
      case 'fr':
        return 'BDR Group propose des solutions technologiques complètes pour les entreprises en Andorre et en Espagne: connectivité, ERP Odoo et solutions pour les stations de ski.';
      default:
        return 'BDR Group ofrece soluciones tecnológicas integrales para empresas en Andorra y España: conectividad, ERP Odoo y soluciones para estaciones de esquí.';
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getMetaDescription()} />
        <meta name="keywords" content="BDR Group, tecnología, Odoo, comunicaciones, ski, Andorra, España, Spain" />
        <meta name="geo.region" content="ES, AD" />
        <meta name="geo.placename" content="Barcelona, Andorra la Vella" />
        <link rel="alternate" hrefLang="es" href="https://bdrinformatica.com/" />
        <link rel="alternate" hrefLang="ca" href="https://bdrinformatica.com/?lang=ca" />
        <link rel="alternate" hrefLang="en" href="https://bdrinformatica.com/?lang=en" />
        <link rel="alternate" hrefLang="fr" href="https://bdrinformatica.com/?lang=fr" />
        <link rel="canonical" href="https://bdrinformatica.com/" />
      </Helmet>
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
