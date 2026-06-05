/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Rocket,
  Code2,
  Users,
  Monitor,
  LayoutTemplate,
  LineChart,
  Laptop,
  Package,
  Phone,
  Instagram,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';

const Logo = () => (
  <div className="flex items-center gap-1">
    <span className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
      NivyTech
    </span>
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background ambient glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/10 blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">A Marca</a>
            <a href="#diferenciais" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Diferenciais</a>
            <a href="#servicos" className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors">Serviços</a>
            <a href="#contato" className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              Fale Conosco
            </a>
          </div>

          <button 
            className="md:hidden p-2 text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-[#020617] border-b border-white/5 p-6 flex flex-col gap-4 shadow-2xl">
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-slate-300">A Marca</a>
            <a href="#diferenciais" onClick={() => setIsMenuOpen(false)} className="text-slate-300">Diferenciais</a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-slate-300">Serviços</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-blue-400 font-medium mt-2">Fale Conosco</a>
          </div>
        )}
      </nav>

      <main className="relative pt-20">
        
        {/* Hero Section */}
        <section id="sobre" className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 md:pt-40 md:pb-48">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Lançamento
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
              <span className="block text-white">UMA NOVA MARCA.</span>
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent pb-2">
                O MESMO PROPÓSITO.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed mb-10">
              É com orgulho que apresentamos nossa nova identidade: <strong className="text-blue-400 font-medium">NivyTech.</strong><br className="hidden md:block"/>
              Mais moderna, mais inovadora e ainda mais conectada com o <strong className="text-blue-400 font-medium">futuro da tecnologia.</strong>
            </p>

            <a href="#servicos" className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.4)]">
              Conheça nossas soluções
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </section>

        {/* Diferenciais Section */}
        <section id="diferenciais" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Rocket className="w-6 h-6 text-blue-400" />,
                title: "INOVAÇÃO",
                desc: "Soluções inteligentes para um futuro melhor."
              },
              {
                icon: <Code2 className="w-6 h-6 text-blue-400" />,
                title: "TECNOLOGIA",
                desc: "Desenvolvimento de sistemas e soluções personalizadas."
              },
              {
                icon: <Users className="w-6 h-6 text-blue-400" />,
                title: "CONEXÃO",
                desc: "Parcerias verdadeiras e resultados que transformam."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all hover:bg-white/[0.04] flex flex-col items-start gap-4"
              >
                <div className="w-14 h-14 rounded-xl border border-blue-500/20 bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="max-w-7xl mx-auto px-6 py-24 relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold tracking-[0.2em] text-blue-500 mb-4 uppercase">Nossos</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">SERVIÇOS</h3>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Soluções <span className="text-blue-400">inteligentes e personalizadas</span> para <span className="text-blue-400">impulsionar</span> o seu negócio.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Top row - 3 items */}
            <motion.div variants={fadeIn} className="col-span-1 border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 hover:border-blue-500/50 rounded-2xl p-8 flex flex-col items-center text-center transition-all group backdrop-blur-sm">
              <div className="mb-6 p-4 rounded-full bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                <Monitor className="w-10 h-10 text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">SITES DEDICADOS</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Sites modernos, rápidos e totalmente personalizados para sua marca.</p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="col-span-1 border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 hover:border-blue-500/50 rounded-2xl p-8 flex flex-col items-center text-center transition-all group backdrop-blur-sm">
              <div className="mb-6 p-4 rounded-full bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                <LayoutTemplate className="w-10 h-10 text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">LANDING PAGES</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Páginas estratégicas que geram mais conversões e impulsionam seus resultados.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="col-span-1 md:col-span-2 lg:col-span-1 border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 hover:border-blue-500/50 rounded-2xl p-8 flex flex-col items-center text-center transition-all group backdrop-blur-sm">
              <div className="mb-6 p-4 rounded-full bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                <LineChart className="w-10 h-10 text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">SISTEMAS DE GESTÃO</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Organize, gerencie e otimize processos com sistemas completos e inteligentes.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto"
          >
            {/* Bottom row - 2 centered items */}
            <motion.div variants={fadeIn} className="border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 hover:border-blue-500/50 rounded-2xl p-8 flex flex-col items-center text-center transition-all group backdrop-blur-sm">
              <div className="mb-6 p-4 rounded-full bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                <Laptop className="w-10 h-10 text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">SISTEMAS DEDICADOS<br/>PARA SUA EMPRESA</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Soluções sob medida para atender às necessidades específicas do seu negócio.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="border border-white/10 bg-slate-900/50 hover:bg-slate-900/80 hover:border-blue-500/50 rounded-2xl p-8 flex flex-col items-center text-center transition-all group backdrop-blur-sm">
              <div className="mb-6 p-4 rounded-full bg-blue-900/20 group-hover:bg-blue-900/40 transition-colors shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                <Package className="w-10 h-10 text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-3">SOFTWARES PRONTOS<br/>PARA SEU EMPREENDIMENTO</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Soluções práticas e eficientes para facilitar o dia a dia da sua empresa.</p>
            </motion.div>
          </motion.div>
        </section>

      </main>

      {/* Footer / Contact Bar */}
      <footer id="contato" className="border-t border-white/10 bg-[#020617] relative z-20 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-8 lg:py-6 relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="text-center lg:text-left">
              <p className="text-sm tracking-[0.1em] text-slate-400 uppercase font-medium">Novo nome. Nova identidade.</p>
              <p className="text-sm tracking-[0.1em] text-blue-400 uppercase font-bold mt-1">Mesma paixão por entregar o melhor.</p>
            </div>
            
            <div className="w-full lg:w-px h-px lg:h-12 bg-white/10"></div>
            
            <div>
              <p className="text-lg text-white font-medium hidden md:block">VAMOS TRANSFORMAR <br/><span className="text-blue-400 font-bold">SUA IDEIA EM REALIDADE?</span></p>
              <p className="text-lg text-white font-medium md:hidden text-center">VAMOS TRANSFORMAR <span className="text-blue-400 font-bold">SUA IDEIA EM REALIDADE?</span></p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href="tel:+5581989470383" className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer group">
                <div className="p-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium tracking-wider">(81) 98947-0383</span>
              </a>
              <div className="hidden sm:block w-px h-6 bg-white/20"></div>
              <a href="https://instagram.com/nivytech" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer group">
                <div className="p-2 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 text-blue-400">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="font-medium tracking-wider">@nivytech</span>
              </a>
              <div className="hidden sm:block w-px h-6 bg-white/20"></div>
              <Logo />
            </div>
          </div>
          
        </div>
        <div className="text-center pb-6 text-xs text-slate-500">
          &copy; {new Date().getFullYear()} NivyTech. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
