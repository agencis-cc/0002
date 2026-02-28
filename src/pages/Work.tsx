import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import { fadeUp, staggerContainer } from '../components/Shared';

const casesData = [
  {
    id: 'abrapa',
    title: 'ABRAPA',
    subtitle: 'Visibilidade Institucional',
    category: ['Offline & Editorial', 'Agronegócio'],
    image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c6c1d?q=80&w=2000&auto=format&fit=crop',
    results: '+150% Engajamento',
    challenge: 'A ABRAPA precisava unificar sua comunicação e fortalecer sua presença institucional tanto no mercado interno quanto externo, enfrentando a fragmentação de informações.',
    solution: 'Desenvolvemos uma estratégia de comunicação 360º, focada em reposicionamento de marca e criação de materiais editoriais de alto padrão para stakeholders.',
    actions: ['Revista Institucional', 'Campanha de Valorização', 'Estratégia Digital', 'Eventos e PR']
  },
  {
    id: 'nessa',
    title: 'Nessa Distribuidora',
    subtitle: 'Branding',
    category: ['Branding', 'Varejo'],
    image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=2000&auto=format&fit=crop',
    results: 'Novo Posicionamento',
    challenge: 'A distribuidora possuía uma marca defasada que não refletia seu tamanho e capacidade logística atual, perdendo espaço para concorrentes mais modernos.',
    solution: 'Um rebranding completo, desde a concepção do novo logotipo até a frota de caminhões, trazendo uma identidade visual forte, moderna e confiável.',
    actions: ['Redesign de Logotipo', 'Identidade Visual', 'Envelopamento de Frota', 'Material de PDV']
  },
  {
    id: 'abiec',
    title: 'ABIEC',
    subtitle: 'Visibilidade Internacional',
    category: ['Digital', 'Agronegócio'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000&auto=format&fit=crop',
    results: '+200% Alcance Global',
    challenge: 'Posicionar a carne brasileira como referência de qualidade e sustentabilidade no mercado internacional, combatendo desinformações.',
    solution: 'Campanha digital global focada em transparência e qualidade, utilizando dados e storytelling para conectar com compradores internacionais.',
    actions: ['Portal Internacional', 'Vídeos Manifestos', 'Campanhas em Redes Sociais', 'Relatórios de Sustentabilidade']
  }
];

const filters = ['Todos', 'Digital', 'Offline & Editorial', 'Branding', 'Agronegócio', 'Varejo'];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [filteredCases, setFilteredCases] = useState(casesData);
  const [selectedCase, setSelectedCase] = useState(null);

  useEffect(() => {
    if (activeFilter === 'Todos') {
      setFilteredCases(casesData);
    } else {
      setFilteredCases(casesData.filter(c => c.category.includes(activeFilter)));
    }
  }, [activeFilter]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCase) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCase]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 min-h-screen"
    >
      {/* Hero & Filters */}
      <section className="container mx-auto px-6 mb-16">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.h1 
            variants={fadeUp}
            className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter mb-12"
          >
            Nosso <span className="text-[#FF6600]">Portfólio</span>
          </motion.h1>
          
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 max-w-4xl">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full font-sans text-xs md:text-sm font-bold uppercase tracking-widest transition-colors border ${
                  activeFilter === filter 
                    ? 'bg-[#FF6600] border-[#FF6600] text-white' 
                    : 'border-[var(--border-color)] hover:border-[#FF6600] hover:text-[#FF6600]'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCases.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedCase(item)}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-[var(--text-primary)]"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="font-sans text-xs uppercase tracking-widest text-[#FF6600] font-bold mb-3">
                    {item.category.join(' • ')}
                  </div>
                  <h3 className="font-display font-black text-3xl uppercase text-white mb-2 leading-none">
                    {item.title}
                  </h3>
                  <p className="font-serif italic text-white/80 text-lg">
                    {item.subtitle}
                  </p>
                  
                  <div className="mt-6 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-[#FF6600] group-hover:border-[#FF6600] transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* CTA Slot */}
          <motion.div 
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative aspect-[4/5] border-2 border-dashed border-[var(--border-color)] hover:border-[#FF6600] transition-colors flex flex-col items-center justify-center text-center p-8 group cursor-pointer bg-[var(--bg-primary)]"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #FF6600 0%, transparent 70%)',
            }} />
            
            <div className="w-16 h-16 rounded-full border border-dashed border-[var(--border-color)] group-hover:border-[#FF6600] flex items-center justify-center mb-8 text-[#FF6600] group-hover:scale-110 transition-transform duration-500">
              <ArrowUpRight size={24} />
            </div>
            
            <h3 className="font-display font-black text-2xl uppercase tracking-tighter mb-4 group-hover:text-[#FF6600] transition-colors">
              Reserve o Espaço <br/>da Sua Marca Aqui
            </h3>
            <p className="font-serif italic text-lg opacity-70 mb-8">
              Sua história de sucesso é o nosso próximo projeto.
            </p>
            
            <button className="bg-[#FF6600] text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#F54041] transition-colors">
              Vamos Iniciar
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Case Details Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[var(--bg-primary)] overflow-y-auto"
          >
            <div className="min-h-screen flex flex-col">
              {/* Modal Header */}
              <div className="sticky top-0 z-10 flex justify-between items-center p-6 mix-blend-difference text-white">
                <div className="font-display font-black text-xl tracking-tighter uppercase">
                  AGENCIS.
                </div>
                <button 
                  onClick={() => setSelectedCase(null)}
                  className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Case Hero */}
              <div className="relative h-[60vh] w-full -mt-[88px]">
                <img 
                  src={selectedCase.image} 
                  alt={selectedCase.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 lg:p-24 text-white">
                  <div className="font-sans text-xs uppercase tracking-widest text-[#FF6600] font-bold mb-4">
                    {selectedCase.category.join(' • ')}
                  </div>
                  <h1 className="font-display font-black text-5xl md:text-8xl uppercase tracking-tighter mb-4 leading-none">
                    {selectedCase.title}
                  </h1>
                  <p className="font-serif italic text-2xl md:text-4xl opacity-90">
                    {selectedCase.subtitle}
                  </p>
                </div>
              </div>

              {/* Case Content */}
              <div className="container mx-auto px-6 py-24 flex-grow">
                <div className="max-w-4xl mx-auto">
                  
                  {/* Results (Giant Numbers) */}
                  <div className="mb-24 text-center">
                    <div className="font-sans text-xs uppercase tracking-widest opacity-50 mb-6">Os Resultados</div>
                    <h2 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-[#FF6600] tracking-tighter leading-none">
                      {selectedCase.results}
                    </h2>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
                    <div>
                      <h3 className="font-display font-black text-3xl uppercase mb-6 flex items-center gap-4">
                        <span className="w-8 h-[2px] bg-[var(--text-primary)]"></span>
                        O Desafio
                      </h3>
                      <p className="font-sans text-lg opacity-80 leading-relaxed">
                        {selectedCase.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-display font-black text-3xl uppercase mb-6 flex items-center gap-4">
                        <span className="w-8 h-[2px] bg-[#FF6600]"></span>
                        A Solução Agencis
                      </h3>
                      <p className="font-sans text-lg opacity-80 leading-relaxed">
                        {selectedCase.solution}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="bg-[var(--text-primary)] text-[var(--bg-primary)] p-12 md:p-16">
                    <h3 className="font-display font-black text-3xl uppercase mb-10 text-[#FF6600]">
                      As Ações Implementadas
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {selectedCase.actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-4 font-sans text-lg font-medium uppercase tracking-wider">
                          <span className="text-[#FF6600] mt-1">■</span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
