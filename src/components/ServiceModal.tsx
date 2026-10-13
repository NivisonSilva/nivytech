import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  PackageCheck, 
  Users, 
  ArrowRight,
  ShieldCheck,
  Zap,
  MessageCircle
} from 'lucide-react';
import { ServiceItem, CONTACT_INFO } from '../data/content';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const handleWhatsAppInquiry = () => {
    const text = `Olá NivyTech! Gostaria de mais informações e um orçamento detalhado para o serviço de *${service.title}*.`;
    window.open(CONTACT_INFO.whatsappUrl(text), '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#090d1f] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(6,182,212,0.25)] z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="pr-10 mb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
              {service.tagline}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              {service.title}
            </h3>
            <p className="text-slate-300 text-sm mt-3 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Features Included */}
          <div className="mb-6">
            <h4 className="text-xs uppercase font-bold text-cyan-400 tracking-wider mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              Recursos & Funcionalidades Inclusas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What We Deliver */}
          <div className="mb-6 p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20">
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-2.5 flex items-center gap-2">
              <PackageCheck className="w-4 h-4 text-cyan-400" />
              O Que Você Recebe
            </h4>
            <ul className="space-y-2">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Audience */}
          <div className="mb-8 flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
            <Users className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <strong className="text-white">Indicado Para: </strong>
              <span className="text-slate-400">{service.targetAudience}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
            <button
              onClick={handleWhatsAppInquiry}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contratar via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3.5 px-5 rounded-xl border border-white/10 hover:bg-white/5 text-slate-300 text-sm font-medium transition-colors"
            >
              Fechar
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
