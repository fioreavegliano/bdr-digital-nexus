
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'es' | 'ca' | 'en' | 'fr';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    'nav.comunicaciones': 'BDR Comunicaciones',
    'nav.odoo': 'BDR Odoo',
    'nav.ski': 'BDR Ski Solution',
    'nav.contacto': 'Contacto',
    'nav.info': 'Solicita información',
    
    // Hero Section
    'hero.title': 'Tecnología que conecta, gestiona y transforma',
    'hero.subtitle': 'Soluciones tecnológicas integrales para empresas',
    'hero.cta': 'Descubre nuestros servicios',
    
    // Service Sections
    'service.comunicaciones.title': 'BDR Comunicaciones',
    'service.comunicaciones.description': 'Soluciones en conectividad, redes, VoIP, sistemas de videovigilancia, y soporte técnico empresarial.',
    'service.odoo.title': 'BDR Odoo',
    'service.odoo.description': 'Consultoría, implantación y desarrollo a medida del ERP Odoo para empresas.',
    'service.ski.title': 'BDR Ski Solution',
    'service.ski.description': 'Software y hardware especializado para estaciones de esquí (control de accesos, gestión de forfaits, apps personalizadas).',
    'service.more': 'Más información',
    
    // Partners Section
    'partners.title': 'Nuestros colaboradores',
    'partners.subtitle': 'Trabajamos con los mejores partners tecnológicos',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Listo para transformar tu negocio?',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar mensaje',
    'contact.success': 'Mensaje enviado con éxito',
    
    // Footer
    'footer.description': 'Tecnología que conecta, gestiona y transforma. Soluciones tecnológicas integrales para empresas que buscan innovación, eficiencia y crecimiento en la era digital.',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
  },
  ca: {
    // Navigation
    'nav.comunicaciones': 'BDR Comunicacions',
    'nav.odoo': 'BDR Odoo',
    'nav.ski': 'BDR Ski Solution',
    'nav.contacto': 'Contacte',
    'nav.info': 'Sol·licita informació',
    
    // Hero Section
    'hero.title': 'Tecnologia que connecta, gestiona i transforma',
    'hero.subtitle': 'Solucions tecnològiques integrals per a empreses',
    'hero.cta': 'Descobreix els nostres serveis',
    
    // Service Sections
    'service.comunicaciones.title': 'BDR Comunicacions',
    'service.comunicaciones.description': 'Solucions en connectivitat, xarxes, VoIP, sistemes de videovigilància i suport tècnic empresarial.',
    'service.odoo.title': 'BDR Odoo',
    'service.odoo.description': 'Consultoria, implantació i desenvolupament a mida del ERP Odoo per a empreses.',
    'service.ski.title': 'BDR Ski Solution',
    'service.ski.description': 'Software i hardware especialitzat per a estacions d\'esquí (control d\'accessos, gestió de forfets, apps personalitzades).',
    'service.more': 'Més informació',
    
    // Partners Section
    'partners.title': 'Els nostres col·laboradors',
    'partners.subtitle': 'Treballem amb els millors partners tecnològics',
    
    // Contact Section
    'contact.title': 'Contacte',
    'contact.subtitle': 'Preparat per transformar el teu negoci?',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Missatge',
    'contact.send': 'Enviar missatge',
    'contact.success': 'Missatge enviat amb èxit',
    
    // Footer
    'footer.description': 'Tecnologia que connecta, gestiona i transforma. Solucions tecnològiques integrals per a empreses que busquen innovació, eficiència i creixement a l\'era digital.',
    'footer.services': 'Serveis',
    'footer.contact': 'Contacte',
    'footer.rights': 'Tots els drets reservats.',
  },
  en: {
    // Navigation
    'nav.comunicaciones': 'BDR Communications',
    'nav.odoo': 'BDR Odoo',
    'nav.ski': 'BDR Ski Solution',
    'nav.contacto': 'Contact',
    'nav.info': 'Request information',
    
    // Hero Section
    'hero.title': 'Technology that connects, manages and transforms',
    'hero.subtitle': 'Comprehensive technology solutions for businesses',
    'hero.cta': 'Discover our services',
    
    // Service Sections
    'service.comunicaciones.title': 'BDR Communications',
    'service.comunicaciones.description': 'Solutions in connectivity, networks, VoIP, video surveillance systems, and business technical support.',
    'service.odoo.title': 'BDR Odoo',
    'service.odoo.description': 'Consulting, implementation and custom development of Odoo ERP for companies.',
    'service.ski.title': 'BDR Ski Solution',
    'service.ski.description': 'Specialized software and hardware for ski resorts (access control, ski pass management, custom apps).',
    'service.more': 'More information',
    
    // Partners Section
    'partners.title': 'Our partners',
    'partners.subtitle': 'We work with the best technology partners',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Ready to transform your business?',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.success': 'Message sent successfully',
    
    // Footer
    'footer.description': 'Technology that connects, manages and transforms. Comprehensive technology solutions for businesses seeking innovation, efficiency and growth in the digital age.',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.comunicaciones': 'BDR Communications',
    'nav.odoo': 'BDR Odoo',
    'nav.ski': 'BDR Ski Solution',
    'nav.contacto': 'Contact',
    'nav.info': 'Demander des informations',
    
    // Hero Section
    'hero.title': 'Technologie qui connecte, gère et transforme',
    'hero.subtitle': 'Solutions technologiques complètes pour les entreprises',
    'hero.cta': 'Découvrez nos services',
    
    // Service Sections
    'service.comunicaciones.title': 'BDR Communications',
    'service.comunicaciones.description': 'Solutions de connectivité, réseaux, VoIP, systèmes de vidéosurveillance et support technique aux entreprises.',
    'service.odoo.title': 'BDR Odoo',
    'service.odoo.description': 'Conseil, implémentation et développement personnalisé de l\'ERP Odoo pour les entreprises.',
    'service.ski.title': 'BDR Ski Solution',
    'service.ski.description': 'Logiciels et matériels spécialisés pour les stations de ski (contrôle d\'accès, gestion des forfaits, applications personnalisées).',
    'service.more': 'Plus d\'informations',
    
    // Partners Section
    'partners.title': 'Nos partenaires',
    'partners.subtitle': 'Nous travaillons avec les meilleurs partenaires technologiques',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': 'Prêt à transformer votre entreprise?',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer le message',
    'contact.success': 'Message envoyé avec succès',
    
    // Footer
    'footer.description': 'Technologie qui connecte, gère et transforme. Solutions technologiques complètes pour les entreprises à la recherche d\'innovation, d\'efficacité et de croissance à l\'ère numérique.',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
