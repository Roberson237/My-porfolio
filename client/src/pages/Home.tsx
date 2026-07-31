import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Portfolio Backend Developer
 * Design: Dark Mode Developer Aesthetic
 * 
 * Sections:
 * - Header: Navigation sticky avec logo et CTA
 * - Hero: Section d'introduction avec gradient et animations
 * - About: À propos du développeur
 * - Skills: Compétences techniques et technologies
 * - Projects: Projets sélectionnés avec détails
 * - Contact: Formulaire de contact et informations
 * - Footer: Navigation et liens sociaux
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
