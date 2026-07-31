import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Projects() {
  const { lang } = useLanguage();

  const projects = [
    {
      title: 'Syslog Collector with AI Analysis',
      description: lang === 'fr'
        ? "Système de collecte et d'analyse de logs réseau en temps réel utilisant l'IA. Collecte les messages syslog via UDP, les analyse avec LiteLLM, les stocke dans MongoDB avec dédoublonnage intelligent, et fournit une interface web complète."
        : 'Real-time network log collection and analysis system using AI. Collects syslog messages via UDP, analyzes with LiteLLM, stores in MongoDB with smart deduplication, and provides a web UI.',
      technologies: ['Node.js', 'MongoDB', 'LiteLLM', 'WebSocket', 'Docker', 'HTML/JS'],
      highlights: [
        lang === 'fr' ? 'Dédoublonnage intelligent avec hash SHA256' : 'Smart deduplication with SHA256',
        lang === 'fr' ? 'Analyse IA multi-modèles selon sévérité' : 'Multi-model AI analysis by severity',
        lang === 'fr' ? 'Traitement par lots optimisé (20 logs/5min)' : 'Optimized batch processing (20 logs/5min)',
        lang === 'fr' ? 'Synthèse vocale et interface temps réel' : 'Voice synthesis and real-time UI',
        lang === 'fr' ? 'Rotation automatique des logs (7/30/90/365j)' : 'Automatic log rotation (7/30/90/365d)',
      ],
      link: 'https://github.com/Roberson237/syslog-prototype',
      github: 'https://github.com/Roberson237/syslog-prototype',
    },
    {
      title: 'Sender - File Sharing Platform',
      description: lang === 'fr'
        ? "Application full-stack de partage de fichiers via liens sécurisés. Construit avec Next.js, Prisma et Google OAuth."
        : 'Full-stack file sharing app with secure links. Built with Next.js, Prisma and Google OAuth.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Google OAuth', 'JavaScript'],
      highlights: [
        lang === 'fr' ? 'Authentification OAuth intégrée' : 'Integrated OAuth authentication',
        lang === 'fr' ? 'Architecture full-stack moderne' : 'Modern full-stack architecture',
        lang === 'fr' ? 'ORM Prisma pour gestion BD' : 'Prisma ORM for DB handling',
        lang === 'fr' ? 'Sécurité et gestion des permissions' : 'Security and permission management',
        lang === 'fr' ? 'Maintenance active (CVE patches)' : 'Active maintenance (CVE patches)',
      ],
      link: 'https://github.com/Roberson237/sender',
      github: 'https://github.com/Roberson237/sender',
    },
    {
      title: 'Sendsey - Secure File Sharing',
      description: lang === 'fr'
        ? "Application permettant de partager des fichiers de manière sécurisée via des liens temporaires."
        : 'App enabling secure file sharing via temporary links.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'File Storage'],
      highlights: [
        lang === 'fr' ? 'Gestion sécurisée des fichiers' : 'Secure file handling',
        lang === 'fr' ? 'Liens temporaires avec expiration' : 'Temporary links with expiry',
        lang === 'fr' ? 'Architecture scalable' : 'Scalable architecture',
        lang === 'fr' ? 'Authentification JWT' : 'JWT-based authentication',
        lang === 'fr' ? 'Optimisation de stockage' : 'Storage optimization',
      ],
      link: 'https://github.com/Roberson237/sendsey',
      github: 'https://github.com/Roberson237/sendsey',
    },
    {
      title: 'Calculator - Qt Application',
      description: lang === 'fr'
        ? "Application de calcul développée avec Qt. Démontre l'expertise en développement desktop et C++."
        : 'Calculator desktop app built with Qt showcasing C++ and GUI expertise.',
      technologies: ['C++', 'Qt', 'Desktop Development'],
      highlights: [
        lang === 'fr' ? 'Interface graphique Qt' : 'Qt GUI',
        lang === 'fr' ? 'Programmation C++ moderne' : 'Modern C++ programming',
        lang === 'fr' ? 'Application desktop performante' : 'High-performance desktop app',
        lang === 'fr' ? 'Gestion d\'événements' : 'Event handling',
        lang === 'fr' ? 'Architecture modulaire' : 'Modular architecture',
      ],
      link: 'https://github.com/Roberson237/calculator',
      github: 'https://github.com/Roberson237/calculator',
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: 'url(/manus-storage/tech-badges-bg_c73de2b2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-sm font-mono text-accent">{lang === 'fr' ? 'PROJETS' : 'PROJECTS'}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{lang === 'fr' ? 'Projets Sélectionnés' : 'Selected Projects'}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {lang === 'fr'
              ? "Voici quelques-uns de mes projets les plus significatifs. Chaque projet représente des défis techniques résolus et des apprentissages appliqués."
              : 'Here are some of my most significant projects. Each project represents solved technical challenges and applied learnings.'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-lg border border-border bg-card/30 transition-all duration-300 overflow-hidden"
            >
              {/* Visual accents simplified (gradients removed) */}

               <div className="grid md:grid-cols-3 gap-8">
                 {/* Content */}
                 <div className="md:col-span-2">
                   <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                     {project.title}
                   </h3>
                   <p className="text-muted-foreground mb-6 leading-relaxed">
                     {project.description}
                   </p>
                   <div className="flex gap-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="border-accent/50 text-accent hover:border-accent hover:bg-accent/10">
                        <ExternalLink size={16} className="mr-2" />
                        {lang === 'fr' ? 'Voir le projet' : 'View project'}
                      </Button>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="border-accent/50 text-accent hover:border-accent hover:bg-accent/10">
                        <Github size={16} className="mr-2" />
                        {lang === 'fr' ? 'Code' : 'Code'}
                      </Button>
                    </a>
                   </div>
                 </div>

                 {/* Visual Accent */}
                 <div className="hidden md:flex items-center justify-center">
                   <div className="relative w-32 h-32">
                    <div className="absolute inset-0 rounded-lg border border-accent/30" />
                    <div className="absolute inset-0 border border-accent/30 rounded-lg" />
                   </div>
                 </div>
               </div>
             </div>
           ))}
         </div>

         {/* CTA */}
         <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">{lang === 'fr' ? 'Découvrez plus de projets sur mon GitHub' : 'Discover more projects on my GitHub'}</p>
           <a href="https://github.com/Roberson237" target="_blank" rel="noopener noreferrer">
             <Button 
               size="lg"
               className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-[0_0_24px_rgba(0,217,255,0.5)]"
             >
              {lang === 'fr' ? 'Visiter mon GitHub' : 'Visit my GitHub'}
             </Button>
           </a>
         </div>
       </div>
     </section>
   );
 }
