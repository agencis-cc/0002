import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { fadeUp, staggerContainer } from '../components/Shared';

const AgencyHero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-end overflow-hidden pt-32 pb-24">
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2569&auto=format&fit=crop" 
          alt="Agencis Headquarters" 
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.h1 
            variants={fadeUp}
            className="font-display font-black text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter mb-8"
          >
            O DNA <br/>
            <span className="text-[#FF6600]">Agencis</span>
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            className="font-serif italic text-xl md:text-3xl max-w-3xl leading-relaxed opacity-90"
          >
            Há mais de 8 anos, em Ribeirão Preto/SP, nascia a Agencis Comunicação. Uma agência construída sobre a crença de que a comunicação deve ser viva, dinâmica e focada em resultados. Nossa trajetória é marcada pela evolução constante, saindo da execução tradicional para nos tornarmos um hub completo de inteligência estratégica para o agronegócio, varejo e serviços.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

const OctopusPhilosophy = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-24 md:py-32 border-t border-[var(--border-color)] relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp} className="order-2 lg:order-1">
            <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-8">
              Inspirados pela Natureza. <br/>
              <span className="text-[#FF6600]">Movidos por Resultados.</span>
            </h2>
            <p className="font-sans text-lg opacity-80 mb-12 max-w-lg">
              Na natureza, o polvo domina seu ambiente com inteligência, adaptação e versatilidade incomparáveis. A Agencis é esse polvo para a sua marca.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "Versatilidade", desc: "Atuamos em múltiplas frentes de forma simultânea e coordenada." },
                { title: "Adaptação", desc: "Compreendemos cenários complexos e ajustamos rotas com agilidade." },
                { title: "Múltiplas Direções", desc: "Uma visão 360º que integra o digital ao offline com perfeição." }
              ].map((item, i) => (
                <motion.div variants={fadeUp} key={i} className="flex gap-6">
                  <div className="font-display font-black text-3xl text-[#FF6600] opacity-50">0{i + 1}</div>
                  <div>
                    <h3 className="font-sans font-bold text-xl uppercase tracking-widest mb-2">{item.title}</h3>
                    <p className="font-sans opacity-70">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeUp} 
            className="order-1 lg:order-2 relative h-[400px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Abstract Octopus Graphic */}
            <div className="absolute inset-0 opacity-30 dark:opacity-20" style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #FF6600 0%, transparent 60%)',
            }} />
            <svg viewBox="0 0 200 200" className="w-full h-full max-w-md text-[var(--text-primary)] opacity-80" fill="none" stroke="currentColor" strokeWidth="1">
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M100 50 C100 50, 130 20, 160 50 C190 80, 160 110, 160 110 C160 110, 180 140, 150 170 C120 200, 100 160, 100 160 C100 160, 80 200, 50 170 C20 140, 40 110, 40 110 C40 110, 10 80, 40 50 C70 20, 100 50, 100 50 Z" 
              />
              <motion.circle 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
                cx="100" cy="100" r="20" fill="currentColor" className="text-[#FF6600]" 
              />
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                d="M100 120 C100 120, 120 150, 100 180" stroke="#FF6600" strokeWidth="2" 
              />
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.7 }}
                d="M100 120 C100 120, 80 150, 100 180" stroke="#FF6600" strokeWidth="2" 
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const Team = () => {
  const team = [
    { name: "Carlos Silva", role: "CEO & Estrategista", quote: "Visão além do alcance.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
    { name: "Marina Costa", role: "Diretora de Criação", quote: "Design com propósito.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
    { name: "Rafael Mendes", role: "Head de Performance", quote: "Dados guiam o caminho.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" },
    { name: "Juliana Rocha", role: "Atendimento", quote: "O cliente no centro.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" },
    { name: "Fernando Lima", role: "Tech Lead", quote: "Código como arte.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
    { name: "Amanda Alves", role: "Copywriter", quote: "Palavras que convertem.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-24 md:py-32 border-t border-[var(--border-color)] bg-[var(--text-primary)] text-[var(--bg-primary)]"
    >
      <div className="container mx-auto px-6">
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">
            As Mentes Por Trás <br/>
            <span className="text-[#FF6600]">Dos Seus Resultados</span>
          </h2>
          <p className="font-sans text-lg opacity-80 max-w-2xl">
            Uma equipe multidisciplinar de especialistas, apaixonados por comunicação e obcecados por excelência. Conheça as pessoas que cuidam da sua marca.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div 
              variants={fadeUp}
              key={i} 
              className="group relative aspect-[3/4] overflow-hidden bg-gray-900"
            >
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <div className="font-sans text-xs uppercase tracking-widest text-[#FF6600] font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {member.role}
                </div>
                <h3 className="font-display font-bold text-2xl uppercase text-white mb-2">{member.name}</h3>
                <p className="font-serif italic text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  "{member.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default function Agency() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AgencyHero />
      <OctopusPhilosophy />
      <Team />
    </motion.main>
  );
}
