import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { lang } = useLanguage();

  const t = {
    en: {
      role: 'Backend Developer',
      accentLine: 'Backend Developer',
      heading1: 'Architectures',
      heading2: 'real-time and scalable',
      heading3: 'for production',
      subtitle:
        'Backend developer specialized in scalability, distributed systems and real-time processing. Experienced with Galera Cluster, AI/ML, IaC.',
      ctaProjects: 'See my projects',
      ctaCompany: 'Infopatcom',
      follow: 'Follow me:',
      scroll: 'Scroll',
    },
    fr: {
      role: 'Développeur Backend',
      accentLine: 'Backend Developer',
      heading1: 'Architectures',
      heading2: 'temps réel et scalables',
      heading3: "pour la production",
      subtitle:
        "Développeur backend spécialisé en scalabilité, systèmes distribués et traitement temps réel. Expérience avec Galera Cluster, IA/ML, IaC.",
      ctaProjects: 'Voir mes projets',
      ctaCompany: 'Infopatcom',
      follow: 'Me suivre:',
      scroll: 'Scroll',
    },
  } as const;

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url(/manus-storage/hero-background_6413b02f.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Animated Background Elements (kept subtle) */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Accent Line */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-accent" />
            <span className="text-sm font-mono text-accent">{t[lang].accentLine}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">{t[lang].heading1}</span>
            <br />
            <span className="text-accent">{t[lang].heading2}</span>
            <br />
            <span className="text-foreground">{t[lang].heading3}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            {t[lang].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#projects">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(0,217,255,0.5)] transition-all group"
              >
                {t[lang].ctaProjects}
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://infopatcom.com" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
              >
                {t[lang].ctaCompany}
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">{t[lang].follow}</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/Roberson237"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.4)]"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:fotemrobinson@gmail.com"
                className="text-muted-foreground hover:text-accent transition-colors hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.4)]"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+237690121807"
                className="text-muted-foreground hover:text-accent transition-colors hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.4)]"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">{t[lang].scroll}</span>
          <div className="w-0.5 h-6 bg-accent" />
        </div>
      </div>
    </section>
  );
}
