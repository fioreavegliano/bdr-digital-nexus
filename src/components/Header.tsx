
import React from 'react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu } from 'lucide-react';

const Header = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="font-bold text-2xl bg-gradient-to-r from-[#091633] via-[#7e57c5] to-[#e81f76] text-transparent bg-clip-text">
            BDR Group
          </div>
        </div>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6" />
            </Button>
            {mobileMenuOpen && (
              <div className="fixed inset-0 top-16 bg-white z-40 px-4 py-6 flex flex-col space-y-6">
                <a href="#comunicaciones" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                  BDR Comunicaciones
                </a>
                <a href="#odoo" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                  BDR Odoo
                </a>
                <a href="#ski" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                  BDR Ski Solution
                </a>
                <a href="#contacto" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Contacto
                </a>
                <Button className="mt-4 bg-[#091633] hover:bg-[#091633]/90">
                  <a href="#contacto">Solicita información</a>
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuLink href="#comunicaciones" className={navigationMenuTriggerStyle()}>
                  BDR Comunicaciones
                </NavigationMenuLink>
                <NavigationMenuLink href="#odoo" className={navigationMenuTriggerStyle()}>
                  BDR Odoo
                </NavigationMenuLink>
                <NavigationMenuLink href="#ski" className={navigationMenuTriggerStyle()}>
                  BDR Ski Solution
                </NavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu>
            <Button className="bg-[#091633] hover:bg-[#091633]/90">
              <a href="#contacto">Solicita información</a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
