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
  ChevronRight,
  ChevronDown,
  Sparkles,
  Shield,
  Zap,
  ArrowUpRight,
  Cpu,
  Layers,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  HelpCircle
} from 'lucide-react';

import { 
  ASSETS, 
  CONTACT_INFO, 
  SERVICES, 
  ServiceItem, 
  PORTFOLIO_PROJECTS, 
  METHODOLOGY_STEPS, 
  FAQS, 
  TECH_STACK 
} from './data/content';
import { BrandLogo } from './components/BrandLogo';
import { BudgetCalculator } from './components/BudgetCalculator';
import { ServiceModal } from './components/ServiceModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor': return <Monitor className="w-8 h-8 text-cyan-400" />;
      case 'LayoutTemplate': return <LayoutTemplate className="w-8 h-8 text-cyan-400" />;
      case 'LineChart': return <LineChart className="w-8 h-8 text-cyan-400" />;
      case 'Laptop': return <Laptop className="w-8 h-8 text-cyan-400" />;
      case 'Package': return <Package className="w-8 h-8 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-8 h-8 text-cyan-400" />;
      default: return <Code2 className="w-8 h-8 text-cyan-400" />;
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-white overflow-x-hidden relative">
      
      {/* Background ambient lighting effects */}
      <div className="fixed top-[-25%] left-[-15%] w-[60%] h-[60%] rounded-full bg-cyan-600/15 blur-[160px] pointer-events-none" />
      <div className="fixed top-[30%] right-[-15%] w-[50%] h-[50%] rounded-full bg-blue-700/15 blur-[170px] pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[20%] w-[45%] h-[45%] rounded-full bg-indigo-700/10 blur-[150px] pointer-events-none" />
      
      {/* Subtle tech grid texture */}
      <div className="fixed inset-0 bg-tech-grid opacity-30 pointer-events-none z-0" />

      {/* Header / Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#020617]/85 backdrop-blur-xl transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <BrandLogo size="md" />
          </a>
          
          <nav className="hidden lg:flex items-center gap-7">
            <a href="#sobre" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">A Marca</a>
            <a href="#diferenciais" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Diferenciais</a>
            <a href="#servicos" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Serviços</a>
            <a href="#portfolio" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Portfólio</a>
            <a href="#metodologia" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">Como Funciona</a>
            <a href="#simulador" className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Simular Orçamento
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">FAQ</a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={CONTACT_INFO.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
          </div>

          <button 
            className="lg:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu drawer */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-[#020617] border-b border-white/10 px-6 py-6 flex flex-col gap-4 shadow-2xl"
          >
            <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="text-slate-200 text-sm font-medium py-1">A Marca</a>
            <a href="#diferenciais" onClick={() => setIsMenuOpen(false)} className="text-slate-200 text-sm font-medium py-1">Diferenciais</a>
            <a href="#servicos" onClick={() => setIsMenuOpen(false)} className="text-slate-200 text-sm font-medium py-1">Serviços</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="text-slate-200 text-sm font-medium py-1">Portfólio</a>
            <a href="#metodologia" onClick={() => setIsMenuOpen(false)} className="text-slate-200 text-sm font-medium py-1">Como Funciona</a>
            <a href="#simulador" onClick={() => setIsMenuOpen(false)} className="text-cyan-400 text-sm font-semibold py-1">Simular Orçamento</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-slate-200 text-sm font-medium py-1">FAQ</a>
            <a 
              href={CONTACT_INFO.whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 text-center py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.3)]"
            >
              Conversar no WhatsApp
            </a>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative pt-20 z-10">

        {/* Hero Section */}
        <section id="sobre" className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-28 md:pb-36">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            
            {/* Lançamento Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/40 backdrop-blur-md text-cyan-300 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              Lançamento Oficial • Nova Identidade
            </motion.div>

            {/* Official 3D Logo Banner Hero Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-3xl mb-10 group"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-blue-600/30 to-indigo-600/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-cyan-500/30 bg-[#020617] shadow-[0_0_50px_rgba(6,182,212,0.25)]">
                <img 
                  src={ASSETS.heroBanner} 
                  alt="NivyTech - Nova Marca Oficial" 
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700"
                />
                
                {/* Tech overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:bottom-6 sm:right-auto flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-400/30">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                  <p className="text-xs sm:text-sm text-slate-200 font-medium">
                    <strong className="text-cyan-300 font-bold">NivyTech:</strong> Engenharia de Software & Soluções Digitais
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Typography Headline */}
            <motion.h1 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.08] font-heading"
            >
              <span className="block text-white">UMA NOVA MARCA.</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent pb-1 drop-shadow-[0_2px_15px_rgba(56,189,248,0.3)]">
                O MESMO PROPÓSITO.
              </span>
            </motion.h1>

            <motion.p 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-base sm:text-xl text-slate-300 max-w-2xl font-light leading-relaxed mb-10"
            >
              É com orgulho que apresentamos nossa nova identidade: <strong className="text-cyan-400 font-semibold">NivyTech.</strong><br className="hidden sm:block"/>
              Mais moderna, mais inovadora e ainda mais conectada com o <strong className="text-white font-semibold">futuro da tecnologia</strong> e com os resultados do seu negócio.
            </motion.p>

            {/* Hero CTAs */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              <a 
                href={CONTACT_INFO.whatsappUrl('Olá NivyTech! Vi o novo site e gostaria de solicitar uma proposta para meu projeto.')}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-500 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-sm tracking-wide transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(16,185,129,0.35)] cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Iniciar Projeto no WhatsApp</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="#simulador" 
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-medium text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Simular Orçamento Online</span>
              </a>
            </motion.div>

            {/* Fast Stats / Confidence Badges */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-10 border-t border-white/10 w-full max-w-4xl"
            >
              {[
                { title: '100% Sob Medida', sub: 'Sem modelos genéricos' },
                { title: 'Alta Performance', sub: 'Carregamento instantâneo' },
                { title: 'Código & Domínio', sub: 'Propriedade total sua' },
                { title: 'Garantia NivyTech', sub: 'Suporte pós-lançamento' }
              ].map((badge, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-white font-bold text-sm sm:text-base font-heading">{badge.title}</span>
                  <span className="text-slate-400 text-xs mt-0.5">{badge.sub}</span>
                </div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* Diferenciais Section */}
        <section id="diferenciais" className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Por que a NivyTech?</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 font-heading">
              DIFERENCIAIS QUE TRANSFORMAM
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto mt-3">
              Não entregamos apenas código: entregamos ativos digitais que geram receita e eficiência.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Rocket className="w-6 h-6 text-cyan-400" />,
                title: "INOVAÇÃO",
                desc: "Soluções inteligentes, interfaces intuitivas e arquitetura moderna para colocar sua empresa à frente da concorrência."
              },
              {
                icon: <Code2 className="w-6 h-6 text-cyan-400" />,
                title: "TECNOLOGIA",
                desc: "Desenvolvimento de sistemas robustos e sob medida com as melhores stacks do mercado (React, Node, Cloud, PostgreSQL)."
              },
              {
                icon: <Users className="w-6 h-6 text-cyan-400" />,
                title: "CONEXÃO",
                desc: "Parcerias verdadeiras, comunicação transparente e suporte contínuo para transformar ideias em negócios de sucesso."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="group p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-cyan-400/40 transition-all hover:bg-slate-900/80 flex flex-col items-start gap-5 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl border border-cyan-400/30 bg-cyan-950/40 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 font-heading tracking-wide">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Portfólio de Soluções</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 font-heading">NOSSOS SERVIÇOS</h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mt-4">
              Soluções <span className="text-cyan-400 font-medium">inteligentes e personalizadas</span> para <span className="text-cyan-400 font-medium">impulsionar</span> e automatizar o seu negócio.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES.map((serv) => (
              <motion.div
                key={serv.id}
                variants={fadeIn}
                className="relative rounded-2xl border border-white/10 bg-slate-900/50 hover:bg-slate-900/90 hover:border-cyan-400/40 p-8 flex flex-col justify-between transition-all group backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]"
              >
                {serv.badge && (
                  <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                    {serv.badge}
                  </span>
                )}

                <div>
                  <div className="mb-6 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/20 w-fit group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    {getServiceIcon(serv.iconName)}
                  </div>
                  
                  <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                    {serv.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 font-heading">
                    {serv.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {serv.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(serv)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group/btn"
                  >
                    <span>Ver detalhes do serviço</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={CONTACT_INFO.whatsappUrl(`Olá! Tenho interesse no serviço de ${serv.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500/20 text-slate-400 hover:text-emerald-400 transition-colors"
                    title="Pedir orçamento no WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Portfolio Showcase Section */}
        <section id="portfolio" className="max-w-7xl mx-auto px-6 py-24 relative z-10 border-t border-white/5">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Casos & Aplicações</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 font-heading">
              PROJETOS & DEMONSTRAÇÕES
            </h2>
            <p className="text-slate-400 text-base max-w-2xl mx-auto mt-4">
              Veja na prática o padrão visual, a responsividade e a arquitetura das soluções criadas pela NivyTech.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PORTFOLIO_PROJECTS.map((proj) => (
              <div 
                key={proj.id}
                className="group rounded-3xl border border-white/10 bg-slate-900/60 overflow-hidden hover:border-cyan-400/40 transition-all flex flex-col justify-between shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]"
              >
                {/* Image Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-400/30">
                    {proj.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 font-heading">{proj.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {proj.description}
                    </p>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.techs.map((t, idx) => (
                        <span key={idx} className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-emerald-400 font-medium">
                      🎯 {proj.results}
                    </span>
                    <a 
                      href={CONTACT_INFO.whatsappUrl(`Olá! Vi o projeto ${proj.title} e gostaria de desenvolver algo similar.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 transition-colors"
                      title="Quero um projeto similar"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology / How It Works */}
        <section id="metodologia" className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Processo Transparente</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 font-heading">
              COMO TRABALHAMOS
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto mt-3">
              Da ideia ao lançamento em 4 passos estruturados para você ter total previsibilidade e tranquilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METHODOLOGY_STEPS.map((step, idx) => (
              <div 
                key={idx}
                className="relative p-6 rounded-2xl border border-white/5 bg-slate-900/30 hover:bg-slate-900/60 hover:border-cyan-400/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-extrabold text-cyan-400/30 font-heading block mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-cyan-500/40 to-transparent rounded-full mt-6" />
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Budget Simulator Section */}
        <section id="simulador" className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <BudgetCalculator />
        </section>

        {/* Tech Stack Bar */}
        <section className="max-w-7xl mx-auto px-6 py-16 relative z-10 border-y border-white/5">
          <div className="text-center mb-8">
            <span className="text-xs uppercase font-bold tracking-[0.2em] text-slate-400">
              Pilhas Tecnológicas Modernas & Seguras
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {TECH_STACK.map((tech, idx) => (
              <div 
                key={idx} 
                className="px-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/40 transition-colors flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">{tech.name}</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">{tech.category}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="max-w-4xl mx-auto px-6 py-24 relative z-10">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Tire Suas Dúvidas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 font-heading">
              PERGUNTAS FREQUENTES
            </h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto mt-2">
              Respostas diretas e transparentes sobre o nosso modelo de trabalho.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-slate-900/40 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-cyan-300 transition-colors"
                  >
                    <span className="font-semibold text-sm sm:text-base font-heading flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : ''}`} />
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* Footer / Contact Banner */}
      <footer id="contato" className="border-t border-white/10 bg-[#020617] relative z-20 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-16 relative overflow-hidden">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900/90 via-[#0a102b]/80 to-slate-900/90 border border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="text-center lg:text-left max-w-xl">
              <BrandLogo size="lg" showSubtitle={true} className="mb-4" />
              <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold">
                Novo nome. Nova identidade.
              </p>
              <p className="text-sm text-cyan-400 uppercase tracking-widest font-bold mt-1">
                Mesma paixão por entregar o melhor software para você.
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4 font-heading">
                Vamos transformar sua ideia em realidade?
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <a 
                href={CONTACT_INFO.whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider opacity-80">Conversar Agora</span>
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </div>
              </a>

              <a 
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-slate-800/80 hover:bg-slate-700 border border-white/10 text-white font-bold text-sm transition-all hover:scale-105 active:scale-95"
              >
                <Instagram className="w-5 h-5 text-pink-400" />
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-wider text-slate-400">Siga no Instagram</span>
                  <span>{CONTACT_INFO.instagramHandle}</span>
                </div>
              </a>
            </div>

          </div>

          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center md:text-left">
            <div>
              &copy; {new Date().getFullYear()} NivyTech. Todos os direitos reservados. CNPJ e infraestrutura em nuvem.
            </div>
            <div className="flex items-center gap-6">
              <span>{CONTACT_INFO.location}</span>
            </div>
          </div>
          
        </div>
      </footer>

      {/* Interactive Service Detail Modal */}
      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

    </div>
  );
}
