
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'ca', name: 'Català' },
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' }
  ];

  // Find the current language name
  const currentLanguage = languages.find(lang => lang.code === language)?.name || 'Español';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex gap-1.5 items-center">
          <Globe className="h-4 w-4" />
          <span>{currentLanguage}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as 'es' | 'ca' | 'en' | 'fr')}
            className={`${language === lang.code ? 'bg-accent text-accent-foreground' : ''} cursor-pointer`}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
