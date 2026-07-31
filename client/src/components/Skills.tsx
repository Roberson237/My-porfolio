import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Skills() {
  const { lang } = useLanguage();

  const skillCategories = [
    {
      title: lang === 'fr' ? 'Langages & Runtime' : 'Languages & Runtime',
      skills: ['Node.js', 'JavaScript', 'TypeScript', 'C++', 'Python', 'SQL'],
    },
    {
      title: lang === 'fr' ? 'Frameworks & ORM' : 'Frameworks & ORM',
      skills: ['Next.js', 'Express', 'Prisma', 'LiteLLM', 'Qt', 'REST APIs'],
    },
    {
      title: lang === 'fr' ? 'Bases de Données & Stockage' : 'Databases & Storage',
      skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Indexing', 'Deduplication', 'Log Rotation'],
    },
    {
      title: lang === 'fr' ? 'DevOps & Scalabilité' : 'DevOps & Scalability',
      skills: ['Docker', 'docker-compose', 'WebSocket', 'UDP/Syslog', 'Batch Processing', 'Galera Cluster'],
    },
    {
      title: lang === 'fr' ? 'Architecture & Patterns' : 'Architecture & Patterns',
      skills: ['Microservices', 'Real-time Systems', 'Event-Driven', 'OAuth 2.0', 'JWT', 'API Design'],
    },
    {
      title: lang === 'fr' ? 'AI & Machine Learning' : 'AI & Machine Learning',
      skills: ['LiteLLM', 'Multi-Model AI', 'Llama3', 'Phi3', 'Gemma', 'AI Analysis'],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background pattern kept, gradients removed */}
      <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: 'url(/manus-storage/accent-pattern_92aba9d0.png)', backgroundSize: '200px 200px' }} />

      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-sm font-mono text-accent">{lang === 'fr' ? 'COMPÉTENCES' : 'SKILLS'}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            {lang === 'fr' ? 'Technologies & Expertise' : 'Technologies & Expertise'}
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <h3 className="text-xl font-bold mb-6 text-foreground group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="outline"
                    className="px-4 py-2 border-accent/50 text-accent hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_12px_rgba(0,217,255,0.3)] transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 rounded-lg border border-border bg-card/30">
          <h3 className="text-lg font-bold mb-4 text-foreground">{lang === 'fr' ? 'Domaines de spécialisation' : 'Areas of Specialization'}</h3>
           <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
             <li className="flex items-start gap-3">
               <span className="text-accent mt-1">→</span>
              <span>{lang === 'fr' ? 'Systèmes temps réel et traitement de flux (WebSocket, UDP, Syslog)' : 'Real-time systems and stream processing (WebSocket, UDP, Syslog)'}</span>
             </li>
             <li className="flex items-start gap-3">
               <span className="text-accent mt-1">→</span>
              <span>{lang === 'fr' ? 'Scalabilité et architectures distribuées (Galera Cluster)' : 'Scalability and distributed architectures (Galera Cluster)'}</span>
             </li>
             <li className="flex items-start gap-3">
               <span className="text-accent mt-1">→</span>
              <span>{lang === 'fr' ? 'Intégration IA/ML (LiteLLM, multi-modèles)' : 'AI/ML integration (LiteLLM, multi-models)'}</span>
             </li>
             <li className="flex items-start gap-3">
               <span className="text-accent mt-1">→</span>
              <span>{lang === 'fr' ? 'Dédoublonnage intelligent et optimisation des données' : 'Smart deduplication and data optimization'}</span>
             </li>
             <li className="flex items-start gap-3">
               <span className="text-accent mt-1">→</span>
              <span>{lang === 'fr' ? 'Full-stack moderne (Next.js, Prisma, OAuth)' : 'Modern full-stack (Next.js, Prisma, OAuth)'}</span>
             </li>
             <li className="flex items-start gap-3">
               <span className="text-accent mt-1">→</span>
              <span>{lang === 'fr' ? 'Containerisation et DevOps (Docker, docker-compose)' : 'Containerization and DevOps (Docker, docker-compose)'}</span>
             </li>
           </ul>
         </div>
       </div>
     </section>
   );
 }
