
import React from 'react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';
import { useLanguage } from '@/contexts/language';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { t } = useLanguage();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/ed0682f8-1b3a-4521-9a5d-e15e05530804.png" 
            alt="BDR Group Logo" 
            className="h-8 md:h-10 dark:invert" 
          />
        </div>

        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
            {mobileMenuOpen && (
              <div className="fixed inset-0 top-16 bg-white z-40 px-4 py-6 flex flex-col space-y-6">
                <a href="https://bdrinformatica.com" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                  BDR Informática
                </a>
                <a href="https://odooandorra.com" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                  {t('nav.odoo')}
                </a>
                <a href="https://skisolution360.com" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                  {t('nav.ski')}
                </a>
                <a href="#contacto" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                  {t('nav.contacto')}
                </a>
                <Button className="mt-4 bg-[#091633] hover:bg-[#091633]/90">
                  <a href="#contacto">{t('nav.info')}</a>
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuLink href="https://bdrinformatica.com" className={navigationMenuTriggerStyle()}>
                  BDR Informática
                </NavigationMenuLink>
                <NavigationMenuLink href="https://odooandorra.com" className={navigationMenuTriggerStyle()}>
                  {t('nav.odoo')}
                </NavigationMenuLink>
                <NavigationMenuLink href="https://skisolution360.com" className={navigationMenuTriggerStyle()}>
                  {t('nav.ski')}
                </NavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu>
            <LanguageSwitcher />
            <Button className="bg-[#091633] hover:bg-[#091633]/90">
              <a href="#contacto">{t('nav.info')}</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
