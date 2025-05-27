
// Translation keys and content
export interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

export const translations = {
  es: {
    // Navigation
    'nav.comunicaciones': 'Informática',
    'nav.odoo': 'Odoo ERP',
    'nav.ski': 'Ski Solution',
    'nav.contacto': 'Contacto',
    
    // Hero Section
    'hero.title': 'Tecnología que conecta, gestiona y transforma',
    'hero.subtitle': 'BDR Group es tu socio tecnológico integral en Andorra y España. Ofrecemos soluciones completas desde comunicaciones hasta gestión empresarial.',
    'hero.cta': 'Descubre nuestros servicios',
    
    // Services
    'service.title': 'Nuestros Servicios',
    'service.subtitle': 'Soluciones tecnológicas integrales para impulsar tu negocio',
    'service.more': 'Más información',
    
    // BDR Informática
    'service.comunicaciones.title': 'BDR Informática',
    'service.comunicaciones.description': 'Soluciones tecnológicas integrales para empresas',
    'service.comunicaciones.item1': 'Soporte técnico especializado y mantenimiento',
    'service.comunicaciones.item2': 'Infraestructura de comunicaciones y redes',
    'service.comunicaciones.item3': 'Desarrollo web y aplicaciones empresariales',
    'service.comunicaciones.item4': 'Implementación y gestión de sistemas',
    'service.comunicaciones.item5': 'Consultoría tecnológica personalizada',
    
    // Odoo ERP
    'service.odoo.title': 'Odoo ERP',
    'service.odoo.description': 'Gestión empresarial completa con Odoo',
    'service.odoo.item1': 'Implementación personalizada de Odoo',
    'service.odoo.item2': 'Migración de datos y sistemas legacy',
    'service.odoo.item3': 'Formación y soporte continuo',
    'service.odoo.item4': 'Desarrollo de módulos específicos',
    'service.odoo.item5': 'Integración con sistemas existentes',
    
    // Ski Solution
    'service.ski.title': 'Ski Solution 360',
    'service.ski.description': 'Gestión integral para estaciones de esquí',
    'service.ski.item1': 'Sistema de venta online de forfaits',
    'service.ski.item2': 'Gestión de pistas y remontes',
    'service.ski.item3': 'Control de accesos y aforo',
    'service.ski.item4': 'App móvil para esquiadores',
    'service.ski.item5': 'Analytics y reporting avanzado',

    // Cloud Services
    'service.cloud.title': 'Cloud Services',
    'service.cloud.description': 'Soluciones en la nube escalables y seguras',
    'service.cloud.item1': 'Migración a la nube (AWS, Azure, Google Cloud)',
    'service.cloud.item2': 'Backup y recuperación de datos',
    'service.cloud.item3': 'Infraestructura como servicio (IaaS)',
    'service.cloud.item4': 'Monitorización y optimización 24/7',
    'service.cloud.item5': 'Escalabilidad automática según demanda',

    // TutumSec
    'service.tutum.title': 'TutumSec',
    'service.tutum.description': 'Ciberseguridad premium para empresas',
    'service.tutum.item1': 'Auditorías de seguridad avanzadas',
    'service.tutum.item2': 'Protección contra amenazas cibernéticas',
    'service.tutum.item3': 'Cumplimiento normativo (GDPR, ISO 27001)',
    'service.tutum.item4': 'Formación en concienciación de seguridad',
    'service.tutum.item5': 'Respuesta a incidentes 24/7',

    // Nevola
    'service.nevola.title': 'Nevola',
    'service.nevola.description': 'Agencia de marketing digital especializada',
    'service.nevola.item1': 'Estrategias de marketing digital integral',
    'service.nevola.item2': 'Gestión de redes sociales y contenido',
    'service.nevola.item3': 'SEO y SEM para máxima visibilidad',
    'service.nevola.item4': 'Diseño gráfico y branding corporativo',
    'service.nevola.item5': 'Analítica web y métricas de rendimiento',
    
    // Footer
    'footer.description': 'Transformamos la tecnología en oportunidades de negocio. Somos tu partner tecnológico de confianza.',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    
    // Partners
    'partners.title': 'Nuestros Colaboradores',
    'partners.subtitle': 'Trabajamos con las mejores marcas tecnológicas'
  },
  ca: {
    // Navigation
    'nav.comunicaciones': 'Informàtica',
    'nav.odoo': 'Odoo ERP',
    'nav.ski': 'Ski Solution',
    'nav.contacto': 'Contacte',
    
    // Hero Section
    'hero.title': 'Tecnologia que connecta, gestiona i transforma',
    'hero.subtitle': 'BDR Group és el teu soci tecnològic integral a Andorra i Espanya. Oferim solucions completes des de comunicacions fins a gestió empresarial.',
    'hero.cta': 'Descobreix els nostres serveis',
    
    // Services
    'service.title': 'Els Nostres Serveis',
    'service.subtitle': 'Solucions tecnològiques integrals per impulsar el teu negoci',
    'service.more': 'Més informació',
    
    // BDR Informática
    'service.comunicaciones.title': 'BDR Informàtica',
    'service.comunicaciones.description': 'Solucions tecnològiques integrals per a empreses',
    'service.comunicaciones.item1': 'Suport tècnic especialitzat i manteniment',
    'service.comunicaciones.item2': 'Infraestructura de comunicacions i xarxes',
    'service.comunicaciones.item3': 'Desenvolupament web i aplicacions empresarials',
    'service.comunicaciones.item4': 'Implementació i gestió de sistemes',
    'service.comunicaciones.item5': 'Consultoria tecnològica personalitzada',
    
    // Odoo ERP
    'service.odoo.title': 'Odoo ERP',
    'service.odoo.description': 'Gestió empresarial completa amb Odoo',
    'service.odoo.item1': 'Implementació personalitzada d\'Odoo',
    'service.odoo.item2': 'Migració de dades i sistemes legacy',
    'service.odoo.item3': 'Formació i suport continu',
    'service.odoo.item4': 'Desenvolupament de mòduls específics',
    'service.odoo.item5': 'Integració amb sistemes existents',
    
    // Ski Solution
    'service.ski.title': 'Ski Solution 360',
    'service.ski.description': 'Gestió integral per a estacions d\'esquí',
    'service.ski.item1': 'Sistema de venda online de forfaits',
    'service.ski.item2': 'Gestió de pistes i remuntadors',
    'service.ski.item3': 'Control d\'accessos i aforament',
    'service.ski.item4': 'App mòbil per a esquiadors',
    'service.ski.item5': 'Analytics i reporting avançat',

    // Cloud Services
    'service.cloud.title': 'Cloud Services',
    'service.cloud.description': 'Solucions al núvol escalables i segures',
    'service.cloud.item1': 'Migració al núvol (AWS, Azure, Google Cloud)',
    'service.cloud.item2': 'Backup i recuperació de dades',
    'service.cloud.item3': 'Infraestructura com a servei (IaaS)',
    'service.cloud.item4': 'Monitorització i optimització 24/7',
    'service.cloud.item5': 'Escalabilitat automàtica segons demanda',

    // TutumSec
    'service.tutum.title': 'TutumSec',
    'service.tutum.description': 'Ciberseguretat premium per a empreses',
    'service.tutum.item1': 'Auditories de seguretat avançades',
    'service.tutum.item2': 'Protecció contra amenaces cibernètiques',
    'service.tutum.item3': 'Compliment normatiu (GDPR, ISO 27001)',
    'service.tutum.item4': 'Formació en conscienciació de seguretat',
    'service.tutum.item5': 'Resposta a incidents 24/7',

    // Nevola
    'service.nevola.title': 'Nevola',
    'service.nevola.description': 'Agència de màrqueting digital especialitzada',
    'service.nevola.item1': 'Estratègies de màrqueting digital integral',
    'service.nevola.item2': 'Gestió de xarxes socials i contingut',
    'service.nevola.item3': 'SEO i SEM per a màxima visibilitat',
    'service.nevola.item4': 'Disseny gràfic i branding corporatiu',
    'service.nevola.item5': 'Analítica web i mètriques de rendiment',
    
    // Footer
    'footer.description': 'Transformem la tecnologia en oportunitats de negoci. Som el teu partner tecnològic de confiança.',
    'footer.services': 'Serveis',
    'footer.contact': 'Contacte',
    'footer.rights': 'Tots els drets reservats.',
    
    // Partners
    'partners.title': 'Els Nostres Col·laboradors',
    'partners.subtitle': 'Treballem amb les millors marques tecnològiques'
  },
  en: {
    // Navigation
    'nav.comunicaciones': 'IT Services',
    'nav.odoo': 'Odoo ERP',
    'nav.ski': 'Ski Solution',
    'nav.contacto': 'Contact',
    
    // Hero Section
    'hero.title': 'Technology that connects, manages and transforms',
    'hero.subtitle': 'BDR Group is your comprehensive technology partner in Andorra and Spain. We offer complete solutions from communications to business management.',
    'hero.cta': 'Discover our services',
    
    // Services
    'service.title': 'Our Services',
    'service.subtitle': 'Comprehensive technology solutions to boost your business',
    'service.more': 'Learn more',
    
    // BDR Informática
    'service.comunicaciones.title': 'BDR IT Services',
    'service.comunicaciones.description': 'Comprehensive technology solutions for businesses',
    'service.comunicaciones.item1': 'Specialized technical support and maintenance',
    'service.comunicaciones.item2': 'Communications infrastructure and networks',
    'service.comunicaciones.item3': 'Web development and business applications',
    'service.comunicaciones.item4': 'Systems implementation and management',
    'service.comunicaciones.item5': 'Personalized technology consulting',
    
    // Odoo ERP
    'service.odoo.title': 'Odoo ERP',
    'service.odoo.description': 'Complete business management with Odoo',
    'service.odoo.item1': 'Customized Odoo implementation',
    'service.odoo.item2': 'Data migration and legacy systems',
    'service.odoo.item3': 'Training and continuous support',
    'service.odoo.item4': 'Specific module development',
    'service.odoo.item5': 'Integration with existing systems',
    
    // Ski Solution
    'service.ski.title': 'Ski Solution 360',
    'service.ski.description': 'Comprehensive management for ski resorts',
    'service.ski.item1': 'Online ski pass sales system',
    'service.ski.item2': 'Slope and lift management',
    'service.ski.item3': 'Access control and capacity management',
    'service.ski.item4': 'Mobile app for skiers',
    'service.ski.item5': 'Advanced analytics and reporting',

    // Cloud Services
    'service.cloud.title': 'Cloud Services',
    'service.cloud.description': 'Scalable and secure cloud solutions',
    'service.cloud.item1': 'Cloud migration (AWS, Azure, Google Cloud)',
    'service.cloud.item2': 'Data backup and recovery',
    'service.cloud.item3': 'Infrastructure as a Service (IaaS)',
    'service.cloud.item4': '24/7 monitoring and optimization',
    'service.cloud.item5': 'Automatic scaling based on demand',

    // TutumSec
    'service.tutum.title': 'TutumSec',
    'service.tutum.description': 'Premium cybersecurity for businesses',
    'service.tutum.item1': 'Advanced security audits',
    'service.tutum.item2': 'Cyber threat protection',
    'service.tutum.item3': 'Regulatory compliance (GDPR, ISO 27001)',
    'service.tutum.item4': 'Security awareness training',
    'service.tutum.item5': '24/7 incident response',

    // Nevola
    'service.nevola.title': 'Nevola',
    'service.nevola.description': 'Specialized digital marketing agency',
    'service.nevola.item1': 'Comprehensive digital marketing strategies',
    'service.nevola.item2': 'Social media and content management',
    'service.nevola.item3': 'SEO and SEM for maximum visibility',
    'service.nevola.item4': 'Graphic design and corporate branding',
    'service.nevola.item5': 'Web analytics and performance metrics',
    
    // Footer
    'footer.description': 'We transform technology into business opportunities. We are your trusted technology partner.',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    
    // Partners
    'partners.title': 'Our Partners',
    'partners.subtitle': 'We work with the best technology brands'
  },
  fr: {
    // Navigation
    'nav.comunicaciones': 'Informatique',
    'nav.odoo': 'Odoo ERP',
    'nav.ski': 'Ski Solution',
    'nav.contacto': 'Contact',
    
    // Hero Section
    'hero.title': 'Technologie qui connecte, gère et transforme',
    'hero.subtitle': 'BDR Group est votre partenaire technologique intégral en Andorre et en Espagne. Nous offrons des solutions complètes depuis les communications jusqu\'à la gestion d\'entreprise.',
    'hero.cta': 'Découvrez nos services',
    
    // Services
    'service.title': 'Nos Services',
    'service.subtitle': 'Solutions technologiques intégrales pour stimuler votre entreprise',
    'service.more': 'En savoir plus',
    
    // BDR Informática
    'service.comunicaciones.title': 'BDR Informatique',
    'service.comunicaciones.description': 'Solutions technologiques intégrales pour entreprises',
    'service.comunicaciones.item1': 'Support technique spécialisé et maintenance',
    'service.comunicaciones.item2': 'Infrastructure de communications et réseaux',
    'service.comunicaciones.item3': 'Développement web et applications d\'entreprise',
    'service.comunicaciones.item4': 'Implémentation et gestion de systèmes',
    'service.comunicaciones.item5': 'Conseil technologique personnalisé',
    
    // Odoo ERP
    'service.odoo.title': 'Odoo ERP',
    'service.odoo.description': 'Gestion d\'entreprise complète avec Odoo',
    'service.odoo.item1': 'Implémentation personnalisée d\'Odoo',
    'service.odoo.item2': 'Migration de données et systèmes legacy',
    'service.odoo.item3': 'Formation et support continu',
    'service.odoo.item4': 'Développement de modules spécifiques',
    'service.odoo.item5': 'Intégration avec systèmes existants',
    
    // Ski Solution
    'service.ski.title': 'Ski Solution 360',
    'service.ski.description': 'Gestion intégrale pour stations de ski',
    'service.ski.item1': 'Système de vente en ligne de forfaits',
    'service.ski.item2': 'Gestion des pistes et remontées',
    'service.ski.item3': 'Contrôle d\'accès et de capacité',
    'service.ski.item4': 'App mobile pour skieurs',
    'service.ski.item5': 'Analytics et reporting avancé',

    // Cloud Services
    'service.cloud.title': 'Services Cloud',
    'service.cloud.description': 'Solutions cloud évolutives et sécurisées',
    'service.cloud.item1': 'Migration vers le cloud (AWS, Azure, Google Cloud)',
    'service.cloud.item2': 'Sauvegarde et récupération de données',
    'service.cloud.item3': 'Infrastructure en tant que service (IaaS)',
    'service.cloud.item4': 'Surveillance et optimisation 24/7',
    'service.cloud.item5': 'Évolutivité automatique selon la demande',

    // TutumSec
    'service.tutum.title': 'TutumSec',
    'service.tutum.description': 'Cybersécurité premium pour entreprises',
    'service.tutum.item1': 'Audits de sécurité avancés',
    'service.tutum.item2': 'Protection contre les menaces cybernétiques',
    'service.tutum.item3': 'Conformité réglementaire (GDPR, ISO 27001)',
    'service.tutum.item4': 'Formation en sensibilisation à la sécurité',
    'service.tutum.item5': 'Réponse aux incidents 24/7',

    // Nevola
    'service.nevola.title': 'Nevola',
    'service.nevola.description': 'Agence de marketing digital spécialisée',
    'service.nevola.item1': 'Stratégies de marketing digital intégral',
    'service.nevola.item2': 'Gestion des réseaux sociaux et contenu',
    'service.nevola.item3': 'SEO et SEM pour visibilité maximale',
    'service.nevola.item4': 'Design graphique et branding corporatif',
    'service.nevola.item5': 'Analytique web et métriques de performance',
    
    // Footer
    'footer.description': 'Nous transformons la technologie en opportunités commerciales. Nous sommes votre partenaire technologique de confiance.',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    
    // Partners
    'partners.title': 'Nos Partenaires',
    'partners.subtitle': 'Nous travaillons avec les meilleures marques technologiques'
  }
};
