import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '../components/Shared';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-1/4 right-10 md:right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-[#FF6600] to-[#F54041] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-60 z-0"
      />
      <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-1/4 left-10 md:left-1/4 w-72 h-72 md:w-[500px] md:h-[500px] bg-gradient-to-tr from-[#3D3A3C] to-transparent rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-40 z-0"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-7xl"
        >
          <motion.h1 
            variants={fadeUp}
            className="font-display font-black text-[15vw] leading-[0.8] tracking-tighter uppercase ml-[-1vw]"
          >
            AMPLIFY
          </motion.h1>
          <motion.div 
            variants={fadeUp}
            className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <p className="font-serif italic text-2xl md:text-4xl max-w-2xl text-opacity-80">
              We engineer bold ideas for enterprise innovators.
            </p>
            <div className="font-sans text-xs uppercase tracking-widest max-w-xs border-l border-current pl-4 opacity-70">
              Strategic Advertising & Digital Experiences for B2B Leaders.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-24 md:py-32 border-t border-[var(--border-color)] relative"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
          <motion.div variants={fadeUp} className="md:col-span-5">
            <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">
              Measurable <br/>Impact.
            </h2>
            <p className="font-sans text-lg opacity-70 max-w-md">
              We don't just create campaigns; we build scalable growth engines for the world's most ambitious B2B brands.
            </p>
          </motion.div>
          
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-0 border-t md:border-t-0 md:border-l border-[var(--border-color)]">
            {[
              { value: "120+", label: "Global Clients" },
              { value: "300+", label: "Campaigns Delivered" },
              { value: "18", label: "Industry Awards" }
            ].map((stat, i) => (
              <motion.div 
                variants={fadeUp}
                key={i} 
                className={`relative pt-8 md:pt-0 md:px-8 ${i !== 0 ? 'md:border-l border-[var(--border-color)]' : ''}`}
              >
                <div className="absolute top-0 left-0 w-2 h-2 bg-[#FF6600] -translate-x-1/2 -translate-y-1/2 hidden md:block" />
                <div className="font-display font-black text-5xl md:text-7xl mb-2">{stat.value}</div>
                <div className="font-sans text-xs uppercase tracking-widest opacity-70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const VisualTransition = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 0.3]);

  return (
    <section ref={ref} className="h-[50vh] md:h-[70vh] w-full relative overflow-hidden bg-[#3D3A3C] dark:bg-[#1A1A1A] flex items-center justify-center">
      <div className="absolute inset-0 opacity-20 z-10" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #FF6600 0%, transparent 50%)',
        backgroundSize: '100% 100%'
      }} />
      <motion.img 
        style={{ scale, opacity }}
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
        alt="Abstract 3D" 
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 0.1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-display font-black text-6xl md:text-9xl text-white uppercase tracking-tighter"
        >
          Momentum
        </motion.h2>
      </div>
    </section>
  );
};

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    "Brand Strategy",
    "Digital Campaigns",
    "Performance Marketing",
    "Content Architecture",
    "Innovation Design"
  ];

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-24 md:py-32 border-t border-[var(--border-color)]" 
      id="services"
    >
      <div className="container mx-auto px-6">
        <motion.h2 variants={fadeUp} className="font-serif italic text-3xl md:text-5xl mb-16 max-w-3xl">
          High-level creative solutions and services for complex markets.
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 flex flex-col gap-4">
            {services.map((service, i) => (
              <motion.button 
                variants={fadeUp}
                key={i}
                onMouseEnter={() => setActiveService(i)}
                className={`text-left font-display font-bold text-2xl md:text-4xl uppercase tracking-tight py-4 border-b border-[var(--border-color)] transition-colors ${activeService === i ? 'text-[#FF6600]' : 'opacity-50 hover:opacity-100'}`}
              >
                {service}
              </motion.button>
            ))}
          </div>
          
          <motion.div variants={fadeUp} className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              <div className="group relative border border-[var(--border-color)] p-8 flex flex-col justify-between min-h-[300px] hover:border-[#FF6600] transition-colors bg-[var(--bg-primary)]">
                <div className="absolute top-0 left-0 w-full h-full border-2 border-transparent group-hover:border-[#FF6600] transition-colors pointer-events-none" style={{ clipPath: 'polygon(0 0, 20px 0, 20px 2px, 2px 2px, 2px 20px, 0 20px, 0 100%, 20px 100%, 20px calc(100% - 2px), 2px calc(100% - 2px), 2px calc(100% - 20px), 0 calc(100% - 20px))' }} />
                
                <div className="font-sans text-xs uppercase tracking-widest opacity-70 mb-8">Featured Case Study</div>
                <div>
                  <h3 className="font-display font-bold text-2xl uppercase mb-4">Fintech Disruption</h3>
                  <p className="font-sans text-sm opacity-70 mb-8">Repositioning a legacy financial institution for the Web3 era.</p>
                </div>
                <div className="flex items-center gap-2 text-[#FF6600] font-sans text-xs uppercase tracking-widest font-bold">
                  Learn More <ArrowUpRight size={16} />
                </div>
              </div>
              
              <div className="border border-[var(--border-color)] p-8 flex flex-col justify-center items-center text-center min-h-[300px] bg-[var(--text-primary)] text-[var(--bg-primary)] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center"
                  >
                    <div className="font-display font-black text-6xl mb-4 text-[#FF6600]">0{activeService + 1}</div>
                    <div className="font-sans text-sm uppercase tracking-widest opacity-70">{services[activeService]}</div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const FeaturedWork = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden group" id="work">
      <motion.img 
        style={{ y, scale: 1.1 }}
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" 
        alt="Featured Work" 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60 transition-opacity duration-500" />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-24 text-white"
      >
        <div className="max-w-4xl">
          <motion.div variants={fadeUp} className="font-sans text-xs uppercase tracking-widest mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#FF6600]"></span>
            Featured Project
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-display font-black text-5xl md:text-8xl uppercase tracking-tighter mb-6 leading-none">
            Nexus <br/>Industrial
          </motion.h2>
          <motion.p variants={fadeUp} className="font-serif italic text-xl md:text-2xl mb-10 max-w-2xl opacity-90">
            A complete brand overhaul and global digital rollout for a leading robotics manufacturer.
          </motion.p>
          <motion.button variants={fadeUp} className="flex items-center gap-2 bg-[#FF6600] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#F54041] transition-colors">
            View Case Study <ArrowUpRight size={18} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

const Capabilities = () => {
  const caps = [
    { title: "Brand Identity", desc: "Visual systems and positioning for enterprise scale." },
    { title: "Digital Platforms", desc: "High-performance web and app experiences." },
    { title: "B2B Campaigns", desc: "Targeted account-based marketing and lead generation." },
    { title: "Motion & 3D", desc: "Immersive product visualization and storytelling." }
  ];

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-24 md:py-32 border-t border-[var(--border-color)]"
    >
      <div className="container mx-auto px-6">
        <motion.div variants={fadeUp} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter">
            Core <br/>Capabilities
          </h2>
          <p className="font-sans text-sm uppercase tracking-widest opacity-70 max-w-xs text-right">
            End-to-end solutions for modern B2B challenges.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caps.map((cap, i) => (
            <motion.div 
              variants={fadeUp}
              key={i} 
              className="group border border-[var(--border-color)] p-8 hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-300 flex flex-col h-[320px]"
            >
              <div className="font-sans text-xs uppercase tracking-widest opacity-50 mb-auto">0{i + 1}</div>
              <div>
                <h3 className="font-display font-bold text-2xl uppercase mb-4 group-hover:text-[#FF6600] transition-colors">{cap.title}</h3>
                <p className="font-sans text-sm opacity-70">{cap.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const CTA = () => {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="py-32 md:py-48 bg-[#3D3A3C] text-white relative overflow-hidden text-center"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0" 
        style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, #FF6600 0%, transparent 70%)',
        }} 
      />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.h2 variants={fadeUp} className="font-display font-black text-5xl md:text-8xl uppercase tracking-tighter mb-8 max-w-5xl leading-[0.9]">
          When You Build Bold, <br/>
          <span className="text-[#FF6600]">We Amplify It.</span>
        </motion.h2>
        <motion.p variants={fadeUp} className="font-serif italic text-xl md:text-2xl mb-12 max-w-2xl opacity-80">
          Ready to transform your market presence? Let's engineer your next breakthrough.
        </motion.p>
        <motion.button variants={fadeUp} className="flex items-center gap-2 bg-[#FF6600] text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-[#3D3A3C] transition-colors">
          Initiate Project <ArrowUpRight size={18} />
        </motion.button>
      </div>
    </motion.section>
  );
};

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Stats />
      <VisualTransition />
      <Services />
      <FeaturedWork />
      <Capabilities />
      <CTA />
    </motion.main>
  );
}
