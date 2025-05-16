
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  const languages = [
    { code: 'es', name: 'ES' },
    { code: 'ca', name: 'CAT' },
    { code: 'en', name: 'EN' },
    { code: 'fr', name: 'FR' }
  ];

  return (
    <div className="flex space-x-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant="ghost"
          size="sm"
          className={`px-2 py-1 text-xs ${language === lang.code ? 'bg-accent text-accent-foreground' : ''}`}
          onClick={() => setLanguage(lang.code as 'es' | 'ca' | 'en' | 'fr')}
        >
          {lang.name}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
