import { Code2, Database, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { lang } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      title: lang === 'fr' ? 'Systèmes Temps Réel' : 'Real-time Systems',
      description: lang === 'fr' ? 'Collecte et analyse de données en temps réel avec WebSocket, UDP, Syslog.' : 'Real-time data collection and analysis with WebSocket, UDP, Syslog.',
    },
    {
      icon: Database,
      title: lang === 'fr' ? 'Scalabilité' : 'Scalability',
      description: lang === 'fr' ? 'Architectures distribuées avec Galera Cluster, indexation optimisée, dédoublonnage.' : 'Distributed architectures with Galera Cluster, optimized indexing, deduplication.',
    },
    {
      icon: Zap,
      title: lang === 'fr' ? 'IA & DevOps' : 'AI & DevOps',
      description: lang === 'fr' ? 'Intégration LiteLLM, IaC, Docker, et orchestration de systèmes complexes.' : 'Integration of LiteLLM, IaC, Docker, and orchestration of complex systems.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: 'url(/manus-storage/accent-pattern_92aba9d0.png)',
          backgroundSize: '200px 200px',
        }}
      />

      <div className="container">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-sm font-mono text-accent">{lang === 'fr' ? 'À PROPOS' : 'ABOUT'}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Fotem Lyonel Roberson
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            {lang === 'fr'
              ? "Développeur backend depuis 2 ans spécialisé en scalabilité et nouvelles approches de l'ingénierie logicielle et DevOps. Actuellement en poste chez Infopatcom (AI & Cloud Solutions pour l'Afrique), en transition vers le freelance."
              : 'Backend developer with 2 years experience, specialized in scalability, distributed systems and DevOps. Currently at Infopatcom, transitioning to freelance.'}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{lang === 'fr' ? 'Mon parcours' : 'My background'}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {lang === 'fr'
                ? "Je suis Fotem Lyonel Roberson, développeur backend spécialisé en scalabilité, systèmes temps réel et DevOps. Mon expertise inclut Galera Cluster, traitement de flux et intégration d'IA/ML."
                : 'I am Fotem Lyonel Roberson, a backend developer specialized in scalability, real-time systems and DevOps. Experienced with Galera Cluster, data streaming, and AI/ML integration.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {lang === 'fr'
                ? "Actuellement chez Infopatcom, en transition vers le freelance. Mes projets démontrent une maîtrise de la collecte et l'analyse en temps réel, optimisation de bases et création d'APIs performantes."
                : 'Currently at Infopatcom and transitioning to freelance. My projects demonstrate expertise in real-time collection and analysis, DB optimization, and high-performance APIs.'}
            </p>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="p-6 rounded-3xl border border-border bg-card/70">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                    <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
