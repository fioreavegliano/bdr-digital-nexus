
// All translations for our application organized by language
export type Language = 'es' | 'ca' | 'en' | 'fr';

export const translations: Record<Language, Record<string, string>> = {
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
    'service.title': 'Nuestros servicios',
    'service.subtitle': 'Desarrollamos soluciones tecnológicas integrales adaptadas a las necesidades específicas de cada sector',
    'service.comunicaciones.title': 'BDR Comunicaciones',
    'service.comunicaciones.description': 'Soluciones integrales de conectividad y comunicación para empresas',
    'service.comunicaciones.item1': 'Infraestructura de redes y conectividad',
    'service.comunicaciones.item2': 'Telefonía VoIP y comunicaciones unificadas',
    'service.comunicaciones.item3': 'Sistemas de videovigilancia CCTV',
    'service.comunicaciones.item4': 'Mantenimiento y soporte técnico',
    'service.comunicaciones.item5': 'Soluciones de conectividad inalámbrica',
    
    'service.odoo.title': 'BDR Odoo',
    'service.odoo.description': 'Gestión empresarial integral con el ERP Odoo personalizado para tu negocio',
    'service.odoo.item1': 'Consultoría e implementación de Odoo ERP',
    'service.odoo.item2': 'Desarrollo de módulos personalizados',
    'service.odoo.item3': 'Integración con sistemas existentes',
    'service.odoo.item4': 'Migración y actualización de versiones',
    'service.odoo.item5': 'Formación y soporte continuo',
    
    'service.ski.title': 'BDR Ski Solution',
    'service.ski.description': 'Software y hardware especializado para estaciones de esquí y montaña',
    'service.ski.item1': 'Control de accesos para estaciones',
    'service.ski.item2': 'Gestión de forfaits y reservas',
    'service.ski.item3': 'Apps móviles personalizadas',
    'service.ski.item4': 'Sistemas de información para visitantes',
    'service.ski.item5': 'Integración con sistemas meteorológicos',
    
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
    'service.title': 'Els nostres serveis',
    'service.subtitle': 'Desenvolupem solucions tecnològiques integrals adaptades a les necessitats específiques de cada sector',
    'service.comunicaciones.title': 'BDR Comunicacions',
    'service.comunicaciones.description': 'Solucions integrals de connectivitat i comunicació per a empreses',
    'service.comunicaciones.item1': 'Infraestructura de xarxes i connectivitat',
    'service.comunicaciones.item2': 'Telefonia VoIP i comunicacions unificades',
    'service.comunicaciones.item3': 'Sistemes de videovigilància CCTV',
    'service.comunicaciones.item4': 'Manteniment i suport tècnic',
    'service.comunicaciones.item5': 'Solucions de connectivitat sense fils',
    
    'service.odoo.title': 'BDR Odoo',
    'service.odoo.description': 'Gestió empresarial integral amb l\'ERP Odoo personalitzat per al teu negoci',
    'service.odoo.item1': 'Consultoria i implementació d\'Odoo ERP',
    'service.odoo.item2': 'Desenvolupament de mòduls personalitzats',
    'service.odoo.item3': 'Integració amb sistemes existents',
    'service.odoo.item4': 'Migració i actualització de versions',
    'service.odoo.item5': 'Formació i suport continu',
    
    'service.ski.title': 'BDR Ski Solution',
    'service.ski.description': 'Software i hardware especialitzat per a estacions d\'esquí i muntanya',
    'service.ski.item1': 'Control d\'accessos per a estacions',
    'service.ski.item2': 'Gestió de forfets i reserves',
    'service.ski.item3': 'Apps mòbils personalitzades',
    'service.ski.item4': 'Sistemes d\'informació per a visitants',
    'service.ski.item5': 'Integració amb sistemes meteorològics',
    
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
    'service.title': 'Our services',
    'service.subtitle': 'We develop comprehensive technological solutions adapted to the specific needs of each sector',
    'service.comunicaciones.title': 'BDR Communications',
    'service.comunicaciones.description': 'Comprehensive connectivity and communication solutions for companies',
    'service.comunicaciones.item1': 'Network infrastructure and connectivity',
    'service.comunicaciones.item2': 'VoIP telephony and unified communications',
    'service.comunicaciones.item3': 'CCTV video surveillance systems',
    'service.comunicaciones.item4': 'Maintenance and technical support',
    'service.comunicaciones.item5': 'Wireless connectivity solutions',
    
    'service.odoo.title': 'BDR Odoo',
    'service.odoo.description': 'Comprehensive business management with Odoo ERP customized for your business',
    'service.odoo.item1': 'Odoo ERP consulting and implementation',
    'service.odoo.item2': 'Custom module development',
    'service.odoo.item3': 'Integration with existing systems',
    'service.odoo.item4': 'Version migration and updates',
    'service.odoo.item5': 'Training and ongoing support',
    
    'service.ski.title': 'BDR Ski Solution',
    'service.ski.description': 'Specialized software and hardware for ski resorts and mountains',
    'service.ski.item1': 'Access control for resorts',
    'service.ski.item2': 'Ski pass and reservation management',
    'service.ski.item3': 'Customized mobile apps',
    'service.ski.item4': 'Visitor information systems',
    'service.ski.item5': 'Integration with meteorological systems',
    
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
    'service.title': 'Nos services',
    'service.subtitle': 'Nous développons des solutions technologiques complètes adaptées aux besoins spécifiques de chaque secteur',
    'service.comunicaciones.title': 'BDR Communications',
    'service.comunicaciones.description': 'Solutions complètes de connectivité et de communication pour les entreprises',
    'service.comunicaciones.item1': 'Infrastructure réseau et connectivité',
    'service.comunicaciones.item2': 'Téléphonie VoIP et communications unifiées',
    'service.comunicaciones.item3': 'Systèmes de vidéosurveillance CCTV',
    'service.comunicaciones.item4': 'Maintenance et support technique',
    'service.comunicaciones.item5': 'Solutions de connectivité sans fil',
    
    'service.odoo.title': 'BDR Odoo',
    'service.odoo.description': 'Gestion d\'entreprise complète avec Odoo ERP personnalisé pour votre entreprise',
    'service.odoo.item1': 'Conseil et implémentation d\'Odoo ERP',
    'service.odoo.item2': 'Développement de modules personnalisés',
    'service.odoo.item3': 'Intégration aux systèmes existants',
    'service.odoo.item4': 'Migration et mise à jour des versions',
    'service.odoo.item5': 'Formation et support continu',
    
    'service.ski.title': 'BDR Ski Solution',
    'service.ski.description': 'Logiciels et matériels spécialisés pour les stations de ski et de montagne',
    'service.ski.item1': 'Contrôle d\'accès pour les stations',
    'service.ski.item2': 'Gestion des forfaits de ski et des réservations',
    'service.ski.item3': 'Applications mobiles personnalisées',
    'service.ski.item4': 'Systèmes d\'information pour les visiteurs',
    'service.ski.item5': 'Intégration avec des systèmes météorologiques',
    
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
