import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { lang } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const contacts = [
    {
      icon: Mail,
      label: lang === 'fr' ? 'Email' : 'Email',
      value: 'fotemrobinson@gmail.com',
      href: 'mailto:fotemrobinson@gmail.com',
    },
    {
      icon: Linkedin,
      label: lang === 'fr' ? 'Téléphone' : 'Phone',
      value: '+237 690 121 807',
      href: 'tel:+237690121807',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Roberson237',
      href: 'https://github.com/Roberson237',
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background pattern kept, gradients removed */}
      <div className="absolute inset-0 -z-10 opacity-5" style={{ backgroundImage: 'url(/manus-storage/accent-pattern_92aba9d0.png)', backgroundSize: '200px 200px' }} />

      <div className="container">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-sm font-mono text-accent">{lang === 'fr' ? 'CONTACT' : 'CONTACT'}</span>
            <div className="w-8 h-0.5 bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {lang === 'fr' ? 'Parlons ensemble' : "Let's talk"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {lang === 'fr'
              ? "Vous avez un projet en tête ou des questions ? N'hésitez pas à me contacter. Je répondrai dès que possible."
              : "Have a project or questions? Feel free to reach out. I'll reply as soon as possible."}
          </p>
         </div>

         <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
           {/* Contact Info */}
           <div className="space-y-8">
             <div>
              <h3 className="text-xl font-bold mb-6 text-foreground">{lang === 'fr' ? 'Informations de contact' : 'Contact information'}</h3>
               <div className="space-y-4">
                 {contacts.map((contact, index) => {
                   const Icon = contact.icon;
                   return (
                     <a
                       key={index}
                       href={contact.href}
                       className="group flex items-start gap-4 p-4 rounded-lg border border-border hover:border-accent/50 transition-all duration-300"
                     >
                       <div className="flex-shrink-0 mt-1">
                         <Icon className="w-5 h-5 text-accent group-hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.4)] transition-all" />
                       </div>
                       <div>
                         <p className="text-sm text-muted-foreground">{contact.label}</p>
                         <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                           {contact.value}
                         </p>
                       </div>
                       <ExternalLink size={16} className="ml-auto text-muted-foreground group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100" />
                     </a>
                   );
                 })}
               </div>
             </div>

             {/* Social Links */}
             <div>
              <h3 className="text-xl font-bold mb-6 text-foreground">{lang === 'fr' ? 'Réseaux sociaux' : 'Social'}</h3>
               <div className="flex gap-4">
                 <a 
                   href="#"
                   className="p-3 rounded-lg border border-border text-accent hover:border-accent hover:bg-accent/10 transition-all hover:drop-shadow-[0_0_12px_rgba(0,217,255,0.3)]"
                 >
                   <Github size={20} />
                 </a>
                 <a 
                   href="#"
                   className="p-3 rounded-lg border border-border text-accent hover:border-accent hover:bg-accent/10 transition-all hover:drop-shadow-[0_0_12px_rgba(0,217,255,0.3)]"
                 >
                   <Linkedin size={20} />
                 </a>
                 <a 
                   href="#"
                   className="p-3 rounded-lg border border-border text-accent hover:border-accent hover:bg-accent/10 transition-all hover:drop-shadow-[0_0_12px_rgba(0,217,255,0.3)]"
                 >
                   <Mail size={20} />
                 </a>
               </div>
             </div>
           </div>

           {/* Contact Form */}
          <div className="p-8 rounded-lg border border-border bg-card/30">
            <h3 className="text-xl font-bold mb-6 text-foreground">{lang === 'fr' ? 'Envoyez-moi un message' : 'Send me a message'}</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm">
                {lang === 'fr'
                  ? 'Vous pouvez me contacter directement via email ou téléphone. Je répondrai dans les 24h.'
                  : 'You can reach me directly via email or phone. I will reply within 24 hours.'}
              </p>
              <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
                <p className="text-sm text-muted-foreground mb-2">{lang === 'fr' ? 'Email :' : 'Email:'}</p>
                <a href="mailto:fotemrobinson@gmail.com" className="text-accent hover:text-accent/80 font-mono break-all">
                  fotemrobinson@gmail.com
                </a>
              </div>
              <div className="p-4 rounded-lg border border-accent/30 bg-accent/5">
                <p className="text-sm text-muted-foreground mb-2">{lang === 'fr' ? 'Téléphone :' : 'Phone:'}</p>
                <a href="tel:+237690121807" className="text-accent hover:text-accent/80 font-mono">
                  +237 690 121 807
                </a>
              </div>
            </div>
          </div>
         </div>
       </div>
     </section>
   );
 }
