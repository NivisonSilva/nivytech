import React from 'react';
import { ASSETS } from '../data/content';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ 
  size = 'md', 
  showSubtitle = false,
  className = '' 
}) => {
  const sizeConfig = {
    sm: {
      badgeSize: 'w-8 h-8',
      textSize: 'text-xl',
      subSize: 'text-[9px]',
      gap: 'gap-2.5',
    },
    md: {
      badgeSize: 'w-10 h-10',
      textSize: 'text-2xl',
      subSize: 'text-[10px]',
      gap: 'gap-3',
    },
    lg: {
      badgeSize: 'w-14 h-14',
      textSize: 'text-3xl md:text-4xl',
      subSize: 'text-xs',
      gap: 'gap-3.5',
    },
    xl: {
      badgeSize: 'w-20 h-20 md:w-24 md:h-24',
      textSize: 'text-4xl md:text-5xl',
      subSize: 'text-sm',
      gap: 'gap-4',
    }
  }[size];

  return (
    <div className={`inline-flex items-center ${sizeConfig.gap} select-none group ${className}`}>
      {/* 3D Metallic Orbital Badge */}
      <div className="relative shrink-0 flex items-center justify-center">
        {/* Ambient neon backglow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/40 via-blue-600/50 to-indigo-600/30 blur-md group-hover:blur-lg transition-all opacity-80" />
        
        {/* Logo Badge Container */}
        <div className={`relative ${sizeConfig.badgeSize} rounded-xl overflow-hidden border border-cyan-400/30 bg-[#020617] p-0.5 shadow-[0_0_15px_rgba(6,182,212,0.3)] group-hover:border-cyan-400/60 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all duration-300`}>
          <img 
            src={ASSETS.logoBadge} 
            alt="NivyTech 3D Logo Mark" 
            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Typography: 3D Metallic & Chrome Dual-Tone */}
      <div className="flex flex-col">
        <div className={`font-extrabold tracking-tight leading-none ${sizeConfig.textSize} font-heading flex items-center`}>
          {/* 'Nivy' in vibrant electric cyan-blue */}
          <span className="bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(14,165,233,0.4)]">
            Nivy
          </span>
          {/* 'Tech' in polished chrome/platinum silver */}
          <span className="bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]">
            Tech
          </span>
        </div>
        
        {showSubtitle && (
          <span className={`tracking-[0.25em] text-cyan-400/80 uppercase font-semibold mt-1 ${sizeConfig.subSize}`}>
            Technology Company
          </span>
        )}
      </div>
    </div>
  );
};
