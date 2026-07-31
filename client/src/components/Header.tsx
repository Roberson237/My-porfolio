import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
 
  const { lang, toggleLang } = useLanguage();

  const t = {
    en: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      infopatcom: 'Infopatcom',
      contactMe: 'Contact me',
    },
    fr: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
      infopatcom: 'Infopatcom',
      contactMe: 'Me contacter',
    },
  } as const;

  const navLinks = [
    { label: t[lang].home, href: '#hero' },
    { label: t[lang].about, href: '#about' },
    { label: t[lang].skills, href: '#skills' },
    { label: t[lang].projects, href: '#projects' },
    { label: t[lang].contact, href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img 
            src="/manus-storage/logo-backend_c0e323aa.png" 
            alt="Logo" 
            className="w-8 h-8 group-hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.6)] transition-all"
          />
          <span className="text-lg font-bold text-foreground hidden sm:inline">Fotem Lyonel</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex gap-4 items-center">
          <a href="https://infopatcom.com" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline" 
              size="sm"
              className="border-accent text-accent hover:bg-accent/10"
            >
              {t[lang].infopatcom}
            </Button>
          </a>
          <a href="#contact">
            <Button 
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-[0_0_16px_rgba(0,217,255,0.4)]"
            >
              {t[lang].contactMe}
            </Button>
          </a>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLang}
            aria-label={lang === 'en' ? 'Switch to French' : 'Switch to English'}
            className="text-muted-foreground"
          >
            {lang.toUpperCase()}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-accent"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <nav className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 pt-2 border-t border-border items-center">
              <a href="https://infopatcom.com" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex-1 border-accent text-accent"
                >
                  {t[lang].infopatcom}
                </Button>
              </a>
              <a href="#contact" className="flex-1">
                <Button 
                  size="sm"
                  className="flex-1 bg-accent text-accent-foreground"
                >
                  {t[lang].contact}
                </Button>
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLang}
                aria-label={lang === 'en' ? 'Switch to French' : 'Switch to English'}
                className="text-muted-foreground"
              >
                {lang.toUpperCase()}
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
