
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-[#091633] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/lovable-uploads/587e73b9-66cb-4960-9273-72cd8dec3f0b.png" 
                alt="BDR Group Logo" 
                className="h-16"
              />
            </div>
            <p className="mb-4 text-gray-300 max-w-md">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#comunicaciones" className="hover:text-[#e81f76] transition-colors">{t('nav.comunicaciones')}</a></li>
              <li><a href="#odoo" className="hover:text-[#e81f76] transition-colors">{t('nav.odoo')}</a></li>
              <li><a href="#ski" className="hover:text-[#e81f76] transition-colors">{t('nav.ski')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>info@bdrinformatica.com</li>
              <li>+34 900 123 456</li>
              <li>Barcelona, España</li>
              <li>Andorra la Vella, Andorra</li>
              <li>
                <Link to="/blog" className="hover:text-[#e81f76] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} BDR Group. {t('footer.rights')}
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="https://www.instagram.com/bdrgroup.eu/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/bdrinformatica/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/bdrinf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
