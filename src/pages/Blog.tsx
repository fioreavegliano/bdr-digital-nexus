
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import { useLanguage } from '@/contexts/LanguageContext';

const Blog = () => {
  const { language, t } = useLanguage();
  
  const getPageTitle = () => {
    switch (language) {
      case 'ca':
        return 'Blog - BDR Group | Notícies i actualitat tecnològica';
      case 'en':
        return 'Blog - BDR Group | Technology news and updates';
      case 'fr':
        return 'Blog - BDR Group | Actualités et mises à jour technologiques';
      default:
        return 'Blog - BDR Group | Noticias y actualidad tecnológica';
    }
  };
  
  const getMetaDescription = () => {
    switch (language) {
      case 'ca':
        return 'Mantingues-te al dia amb les últimes notícies tecnològiques, actualitzacions d\'Odoo, solucions per a estacions d\'esquí i més al blog de BDR Group.';
      case 'en':
        return 'Stay up to date with the latest technology news, Odoo updates, ski resort solutions and more on the BDR Group blog.';
      case 'fr':
        return 'Restez à jour avec les dernières actualités technologiques, les mises à jour d\'Odoo, les solutions pour les stations de ski et plus encore sur le blog de BDR Group.';
      default:
        return 'Mantente al día con las últimas noticias tecnológicas, actualizaciones de Odoo, soluciones para estaciones de esquí y más en el blog de BDR Group.';
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={getMetaDescription()} />
        <meta name="keywords" content="blog, tecnología, Odoo, esquí, BDR Group, noticias" />
      </Helmet>
      <Header />
      <main className="flex-grow pt-16">
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
