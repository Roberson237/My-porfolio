import React, { createContext, useContext, useEffect, useState } from 'react';

type Lang = 'en' | 'fr';

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getDefault = (): Lang => {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'fr' || saved === 'en') return saved;
    } catch (e) {
      // ignore
    }
    if (typeof navigator !== 'undefined') {
      return navigator.language?.startsWith('fr') ? 'fr' : 'en';
    }
    return 'en';
  };

  const [lang, setLangState] = useState<Lang>(getDefault);

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang);
    } catch (e) {
      // ignore
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggleLang = () => setLangState((s) => (s === 'en' ? 'fr' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};

export default LanguageContext;
