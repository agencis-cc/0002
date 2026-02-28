import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference text-white"
    >
      <Link to="/" className="font-display font-black text-2xl tracking-tighter uppercase">
        AGENCIS.
      </Link>
      
      <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium uppercase tracking-widest">
        <Link to="/work" className="hover:text-[#FF6600] transition-colors">Work</Link>
        <Link to="/services" className="hover:text-[#FF6600] transition-colors">Serviços</Link>
        <Link to="/agency" className="hover:text-[#FF6600] transition-colors">A Agência</Link>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center gap-2 border border-white/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest hover:border-[#FF6600] hover:text-[#FF6600] transition-colors bracket-hover">
          Start a Project
        </button>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </motion.nav>
  );
};

export const Footer = () => {
  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="bg-[#FF6600] text-[#3D3A3C] pt-24 pb-12"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <motion.div variants={fadeUp} className="md:col-span-2">
            <h2 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tighter leading-none mb-6">
              AGENCIS.
            </h2>
            <p className="font-sans text-sm font-bold uppercase tracking-widest max-w-sm">
              The B2B Creative Powerhouse.
            </p>
          </motion.div>
          
          <motion.div variants={fadeUp}>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 border-b border-[#3D3A3C]/20 pb-4">Navigation</h4>
            <ul className="space-y-4 font-display font-bold text-xl uppercase">
              <li><Link to="/work" className="hover:text-white transition-colors">Work</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Serviços</Link></li>
              <li><Link to="/agency" className="hover:text-white transition-colors">A Agência</Link></li>
              <li><Link to="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </motion.div>
          
          <motion.div variants={fadeUp}>
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest mb-6 border-b border-[#3D3A3C]/20 pb-4">Connect</h4>
            <ul className="space-y-4 font-sans text-sm font-medium">
              <li>hello@agencis.com</li>
              <li>+55 (16) 99999-9999</li>
              <li className="pt-4">
                Ribeirão Preto/SP<br/>
                Brasil
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div variants={fadeUp} className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#3D3A3C]/20 font-sans text-xs font-bold uppercase tracking-widest">
          <div>&copy; {new Date().getFullYear()} Agencis. All rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};
