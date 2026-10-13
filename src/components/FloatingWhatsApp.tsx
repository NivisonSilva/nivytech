import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="relative mb-3 mr-1 bg-[#090d1f] border border-cyan-400/40 text-slate-100 px-4 py-2.5 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-bounce">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <p className="text-xs font-medium">
              Precisa de um projeto? <strong className="text-cyan-400">Fale conosco!</strong>
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded transition-colors"
            title="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          {/* Arrow pointing down */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#090d1f] border-r border-b border-cyan-400/40 transform rotate-45" />
        </div>
      )}

      {/* Main floating action button */}
      <a
        href={CONTACT_INFO.whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a NivyTech"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_rgba(16,185,129,0.8)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulsing beacon ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 group-hover:opacity-75 blur animate-pulse" />
        
        {/* WhatsApp Icon */}
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="currentColor" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="relative z-10"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="none"/>
          <path d="M9.5 9a.5.5 0 0 0-.5.5v.5a3 3 0 0 0 3 3h.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 0-.5-.5z" fill="white" />
        </svg>

        {/* Small live badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#020617] rounded-full" />
      </a>
    </div>
  );
};
