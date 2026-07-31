import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border bg-background/50">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/manus-storage/logo-backend_c0e323aa.png" 
                alt="Logo" 
                className="w-6 h-6"
              />
              <span className="font-bold text-foreground">Fotem Lyonel</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {lang === 'fr' ? "Développeur backend spécialisé en scalabilité, systèmes distribués et traitement temps réel." : 'Backend developer specialized in scalability, distributed systems and real-time processing.'}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{lang === 'fr' ? 'Navigation' : 'Navigation'}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#hero" className="hover:text-accent transition-colors">{lang === 'fr' ? 'Accueil' : 'Home'}</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">{lang === 'fr' ? 'À propos' : 'About'}</a></li>
              <li><a href="#skills" className="hover:text-accent transition-colors">{lang === 'fr' ? 'Compétences' : 'Skills'}</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">{lang === 'fr' ? 'Projets' : 'Projects'}</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">{lang === 'fr' ? 'Contact' : 'Contact'}</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{lang === 'fr' ? 'Ressources' : 'Resources'}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://github.com/Roberson237" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a></li>
              <li><a href="https://infopatcom.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Infopatcom</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">{lang === 'fr' ? 'À Propos' : 'About'}</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">{lang === 'fr' ? 'Contact' : 'Contact'}</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{lang === 'fr' ? 'Suivez-moi' : 'Follow'}</h4>
            <div className="flex gap-3">
              <a 
                href="https://github.com/Roberson237"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all"
              >
                <Github size={18} />
              </a>
              <a 
                href="mailto:fotemrobinson@gmail.com"
                className="p-2 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all"
              >
                <Mail size={18} />
              </a>
              <a 
                href="tel:+237690121807"
                className="p-2 rounded-lg border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {lang === 'fr' ? '© 2024 Fotem Lyonel Roberson. Tous droits réservés.' : '© 2024 Fotem Lyonel Roberson. All rights reserved.'}
           </p>
           <button
             onClick={scrollToTop}
             className="p-2 rounded-lg border border-border text-accent hover:border-accent hover:bg-accent/10 transition-all hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.3)]"
             aria-label="Retour au haut"
           >
             <ArrowUp size={18} />
           </button>
         </div>
       </div>
     </footer>
   );
 }
