
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

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10">
        <Languages className="h-4 w-4" />
        <span className="text-lg">{selectedLanguage.flag}</span>
        <span className="hidden sm:block text-sm">{selectedLanguage.currency}</span>
        <ChevronDown className="h-3 w-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black/90 backdrop-blur-lg border border-red-500/20 text-white min-w-[200px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => setSelectedLanguage(language)}
            className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-red-500/20 transition-colors ${
              selectedLanguage.code === language.code ? 'bg-red-500/30' : ''
            }`}
          >
            <div className="flex items-center space-x-3">
              <span className="text-lg">{language.flag}</span>
              <span className="font-medium">{language.name}</span>
            </div>
            <div className="text-red-400 text-sm">
              {language.currencySymbol} {language.currency}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
