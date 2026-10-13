import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Sparkles,
  Layers,
  ShieldCheck,
  Send,
  Database,
  Zap
} from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

interface ProjectTypeOption {
  id: string;
  name: string;
  description: string;
  baseDays: string;
}

const PROJECT_TYPES: ProjectTypeOption[] = [
  {
    id: 'landing-page',
    name: 'Landing Page de Alta Conversão',
    description: 'Focada em tráfego pago, geração de leads e apresentação do produto.',
    baseDays: '5 a 8 dias úteis'
  },
  {
    id: 'site-dedicado',
    name: 'Site Institucional Dedicado',
    description: 'Autoridade de marca, catálogo de serviços e blog/SEO.',
    baseDays: '12 a 18 dias úteis'
  },
  {
    id: 'sistema-gestao',
    name: 'Sistema de Gestão (ERP / CRM)',
    description: 'Financeiro, estoque, clientes, pedidos e relatórios operacionais.',
    baseDays: '20 a 30 dias úteis'
  },
  {
    id: 'sistema-sob-medida',
    name: 'Software Sob Medida / App Web',
    description: 'Plataforma exclusiva desenhada para sua operação específica.',
    baseDays: '25 a 45 dias úteis'
  }
];

const EXTRA_FEATURES = [
  { id: 'auth', label: 'Autenticação & Níveis de Usuário', icon: ShieldCheck },
  { id: 'admin', label: 'Painel Administrativo Completo', icon: Layers },
  { id: 'reports', label: 'Relatórios & Exportação (PDF / Excel)', icon: CheckCircle2 },
  { id: 'cloud_db', label: 'Banco de Dados em Nuvem & Backup', icon: Database },
  { id: 'speed_seo', label: 'Otimização de Alta Velocidade & SEO', icon: Zap },
];

export const BudgetCalculator: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('landing-page');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['auth', 'admin']);
  const [urgency, setUrgency] = useState<'normal' | 'express'>('normal');
  const [clientName, setClientName] = useState<string>('');
  const [clientCompany, setClientCompany] = useState<string>('');

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const currentProject = PROJECT_TYPES.find(p => p.id === selectedType) || PROJECT_TYPES[0];

  const generateWhatsAppMessage = () => {
    const selectedFeatureNames = EXTRA_FEATURES
      .filter(f => selectedFeatures.includes(f.id))
      .map(f => `• ${f.label}`)
      .join('\n');

    let msg = `*🚀 SOLICITAÇÃO DE ORÇAMENTO - NIVYTECH*\n\n`;
    if (clientName) msg += `*Nome:* ${clientName}\n`;
    if (clientCompany) msg += `*Empresa:* ${clientCompany}\n`;
    msg += `*Tipo de Projeto:* ${currentProject.name}\n`;
    msg += `*Prazo Desejado:* ${urgency === 'express' ? '⚡ Acelerado / Prioritário' : '📅 Prazo Padrão'}\n\n`;
    
    if (selectedFeatureNames) {
      msg += `*Recursos Desejados:*\n${selectedFeatureNames}\n\n`;
    }
    msg += `Gostaria de agendar uma conversa rápida para entender a proposta e valores!`;
    return msg;
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = generateWhatsAppMessage();
    const url = CONTACT_INFO.whatsappUrl(finalMsg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 md:p-10 shadow-[0_0_50px_rgba(30,58,138,0.2)]">
      {/* Decorative ambient lights */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Simulador Interativo
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white font-heading">
            Simule o Escopo do Seu Projeto
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Escolha o modelo, marque os recursos e receba um atendimento personalizado com proposta sem compromisso.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Form: Configurations */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Step 1: Project Type */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
              1. Selecione o Tipo de Solução
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROJECT_TYPES.map(type => {
                const isSelected = selectedType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    className={`text-left p-4 rounded-xl border transition-all relative ${
                      isSelected 
                        ? 'border-cyan-400 bg-cyan-950/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] ring-1 ring-cyan-400/50' 
                        : 'border-white/5 bg-slate-800/40 hover:border-white/20 hover:bg-slate-800/70'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className={`font-semibold text-sm ${isSelected ? 'text-cyan-300' : 'text-white'}`}>
                        {type.name}
                      </h4>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 ml-1" />}
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {type.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Extra Features */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
              2. Recursos & Módulos Extras
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {EXTRA_FEATURES.map(feat => {
                const IconComponent = feat.icon;
                const isChecked = selectedFeatures.includes(feat.id);
                return (
                  <button
                    key={feat.id}
                    type="button"
                    onClick={() => toggleFeature(feat.id)}
                    className={`flex items-center gap-3 p-3 rounded-lg border text-left text-xs transition-all ${
                      isChecked
                        ? 'border-blue-500/60 bg-blue-900/30 text-white font-medium shadow-[0_0_12px_rgba(59,130,246,0.15)]'
                        : 'border-white/5 bg-slate-800/30 text-slate-400 hover:text-slate-200 hover:border-white/10'
                    }`}
                  >
                    <div className={`p-1.5 rounded-md ${isChecked ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-700/50 text-slate-400'}`}>
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <span className="flex-1">{feat.label}</span>
                    <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                      isChecked ? 'border-cyan-400 bg-cyan-500 text-slate-950 font-bold' : 'border-slate-600'
                    }`}>
                      {isChecked && <CheckCircle2 className="w-3 h-3 text-slate-950" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Timeline Urgency */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
              3. Expectativa de Prazo
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUrgency('normal')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  urgency === 'normal'
                    ? 'border-cyan-400 bg-cyan-950/20 text-white'
                    : 'border-white/5 bg-slate-800/30 text-slate-400 hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold">Prazo Regular</span>
                </div>
                <p className="text-xs text-slate-400">Desenvolvimento com cadência padrão.</p>
              </button>

              <button
                type="button"
                onClick={() => setUrgency('express')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  urgency === 'express'
                    ? 'border-amber-400 bg-amber-950/20 text-white shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                    : 'border-white/5 bg-slate-800/30 text-slate-400 hover:border-white/10'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-semibold">⚡ Prioritário / Rápido</span>
                </div>
                <p className="text-xs text-slate-400">Sprint acelerada com dedicação integral.</p>
              </button>
            </div>
          </div>

          {/* Quick info inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Seu Nome / Responsável (Opcional):</label>
              <input 
                type="text" 
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Ex: Carlos Silva"
                className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-slate-800/50 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">Nome da Empresa / Projeto (Opcional):</label>
              <input 
                type="text" 
                value={clientCompany}
                onChange={(e) => setClientCompany(e.target.value)}
                placeholder="Ex: Minha Empresa Tech"
                className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-slate-800/50 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-slate-500"
              />
            </div>
          </div>

        </div>

        {/* Right Summary Card */}
        <div className="lg:col-span-5 bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-cyan-500/20 rounded-2xl p-6 shadow-2xl relative flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <span className="text-xs uppercase tracking-wider font-semibold text-cyan-400">
                Resumo da Configuração
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Orçamento Gratuito
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs text-slate-400 block mb-1">Solução Selecionada:</span>
                <p className="text-lg font-bold text-white flex items-center gap-2">
                  {currentProject.name}
                </p>
              </div>

              <div>
                <span className="text-xs text-slate-400 block mb-1">Estimativa de Execução:</span>
                <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  {urgency === 'express' ? 'Entrega acelerada sob consulta' : currentProject.baseDays}
                </div>
              </div>

              <div>
                <span className="text-xs text-slate-400 block mb-1.5">Módulos Inclusos ({selectedFeatures.length}):</span>
                {selectedFeatures.length === 0 ? (
                  <p className="text-xs text-slate-500 italic">Nenhum módulo extra selecionado.</p>
                ) : (
                  <ul className="space-y-1.5">
                    {EXTRA_FEATURES.filter(f => selectedFeatures.includes(f.id)).map(f => (
                      <li key={f.id} className="text-xs text-slate-300 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{f.label}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 mt-4">
                <p className="text-xs text-slate-300 leading-relaxed">
                  💡 <strong className="text-cyan-300">Garantia NivyTech:</strong> Código limpo, hospedagem moderna, suporte dedicado e treinamento operacional da sua equipe.
                </p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 pt-4 border-t border-white/10">
            <button
              onClick={handleSendToWhatsApp}
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Receber Proposta no WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <p className="text-center text-[11px] text-slate-500 mt-2.5">
              Resposta ágil em horário comercial • Atendimento sem compromisso
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
