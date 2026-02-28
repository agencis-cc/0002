import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Target, BarChart3, PenTool, Diamond } from 'lucide-react';
import { fadeUp, staggerContainer } from '../components/Shared';

const ServicesHero = () => {
  return (
    <section className="relative pt-40 pb-24 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 50% 0%, #FF6600 0%, transparent 60%)',
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={fadeUp}
            className="font-display font-black text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter mb-8 leading-[0.9]"
          >
            Atuação 360º: <br/>
            <span className="text-[#FF6600]">Nosso Ecossistema de Soluções</span>
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            className="font-serif italic text-xl md:text-2xl max-w-2xl mx-auto opacity-80 mb-12"
          >
            Do pixel à impressão. Da estratégia à conversão. Nós cuidamos de cada ponto de contato da sua marca.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 md:gap-8 font-sans text-xs md:text-sm font-bold uppercase tracking-widest">
            <a href="#consultoria" className="border border-[var(--border-color)] px-6 py-3 hover:border-[#FF6600] hover:text-[#FF6600] transition-colors rounded-full">Consultoria</a>
            <a href="#digital" className="border border-[var(--border-color)] px-6 py-3 hover:border-[#FF6600] hover:text-[#FF6600] transition-colors rounded-full">Digital</a>
            <a href="#offline" className="border border-[var(--border-color)] px-6 py-3 hover:border-[#FF6600] hover:text-[#FF6600] transition-colors rounded-full">Offline</a>
            <a href="#branding" className="border border-[var(--border-color)] px-6 py-3 hover:border-[#FF6600] hover:text-[#FF6600] transition-colors rounded-full">Branding</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceBlock = ({ id, title, subtitle, desc, services, icon: Icon, reversed = false, index }) => {
  return (
    <motion.section 
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-24 border-t border-[var(--border-color)]"
    >
      <div className="container mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          
          <motion.div variants={fadeUp} className={`order-2 ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="font-display font-black text-8xl text-[var(--border-color)] opacity-30 mb-6 leading-none">
              0{index}
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter mb-4">
              {title}
            </h2>
            <h3 className="font-serif italic text-2xl text-[#FF6600] mb-6">
              {subtitle}
            </h3>
            <p className="font-sans text-lg opacity-80 mb-8 max-w-lg">
              {desc}
            </p>
            
            {services && (
              <ul className="space-y-4">
                {services.map((service, i) => (
                  <li key={i} className="flex items-start gap-4 font-sans text-sm md:text-base font-medium uppercase tracking-wider opacity-90">
                    <span className="text-[#FF6600] mt-1">■</span>
                    {service}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
          
          <motion.div 
            variants={fadeUp} 
            className={`order-1 ${reversed ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}
          >
            <div className="relative w-full max-w-md aspect-square bg-[var(--text-primary)] text-[var(--bg-primary)] flex items-center justify-center p-12 group overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, #FF6600 0%, transparent 70%)',
              }} />
              <Icon size={120} strokeWidth={1} className="relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:text-[#FF6600]" />
              
              {/* Decorative grid lines inside the box */}
              <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
};

const ServicesList = () => {
  return (
    <div>
      <ServiceBlock 
        id="consultoria"
        index={1}
        title="Consultoria Estratégica"
        subtitle="A base de tudo."
        desc="Diagnósticos profundos e planejamento focado em negócios. Aplicamos inteligência de mercado para posicionar sua marca na vanguarda do seu setor."
        icon={Target}
        reversed={false}
      />
      
      <ServiceBlock 
        id="digital"
        index={2}
        title="Marketing Digital e Performance"
        subtitle="Alcance e Conversão."
        desc="Estratégias data-driven para dominar o ambiente online."
        services={[
          "SEO & SEM",
          "Gestão de Mídias Sociais",
          "Inbound & E-mail Marketing",
          "Tráfego Pago (Performance)",
          "Automação"
        ]}
        icon={BarChart3}
        reversed={true}
      />
      
      <ServiceBlock 
        id="offline"
        index={3}
        title="Comunicação Offline & Design"
        subtitle="Impacto físico e tangível."
        desc="A experiência da sua marca no mundo real, com acabamento impecável e design que prende a atenção."
        services={[
          "Campanhas Publicitárias (OOH, Rádio, TV)",
          "Projetos Editoriais (Revistas, Livros Corporativos, Relatórios)",
          "Identidade Visual",
          "Comunicação Visual de PDV e Papelaria Institucional"
        ]}
        icon={PenTool}
        reversed={false}
      />
      
      <ServiceBlock 
        id="branding"
        index={4}
        title="Branding"
        subtitle="A alma da sua empresa."
        desc="Criação, gestão e reposicionamento de marcas. Nós construímos percepção de valor, autoridade e desejo."
        icon={Diamond}
        reversed={true}
      />
    </div>
  );
};

const ServicesCTA = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-32 bg-[#FF6600] text-[#3D3A3C] text-center"
    >
      <div className="container mx-auto px-6 flex flex-col items-center">
        <motion.h2 variants={fadeUp} className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-12 max-w-3xl">
          Qual é o próximo passo da sua marca?
        </motion.h2>
        <motion.button variants={fadeUp} className="flex items-center gap-2 bg-[#3D3A3C] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#3D3A3C] transition-colors">
          Fale com nossos especialistas <ArrowUpRight size={18} />
        </motion.button>
      </div>
    </motion.section>
  );
};

export default function Services() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
    </motion.main>
  );
}
