
import { useState } from 'react';
import { Languages, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Language {
  code: string;
  name: string;
  flag: string;
  currency: string;
  currencySymbol: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇺🇸', currency: 'USD', currencySymbol: '$' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', currency: 'RUB', currencySymbol: '₽' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷', currency: 'TRY', currencySymbol: '₺' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', currency: 'SAR', currencySymbol: 'ر.س' },
];

const FloatingLanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger className="glass-effect rounded-full px-6 py-4 shadow-2xl flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/10">
          <Languages className="h-5 w-5" />
          <span className="text-xl">{selectedLanguage.flag}</span>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{selectedLanguage.currency}</span>
            <span className="text-xs text-gray-400">{selectedLanguage.name}</span>
          </div>
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          side="top" 
          align="end"
          className="bg-black/90 backdrop-blur-lg border border-red-500/20 text-white min-w-[250px] mb-2"
        >
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => setSelectedLanguage(language)}
              className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-red-500/20 transition-colors ${
                selectedLanguage.code === language.code ? 'bg-red-500/30' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-xl">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
              </div>
              <div className="text-red-400 text-sm">
                {language.currencySymbol} {language.currency}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FloatingLanguageSelector;
