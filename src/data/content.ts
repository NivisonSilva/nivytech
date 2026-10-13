import heroBannerImg from '../assets/images/nivytech_hero_banner_1791914354076.jpg';
import logoBadgeImg from '../assets/images/nivytech_logo_badge_1791914370534.jpg';
import saasDashboardImg from '../assets/images/project_dashboard_saas_1791914398539.jpg';
import landingStoreImg from '../assets/images/project_landing_store_1791914417990.jpg';
import erpSystemImg from '../assets/images/project_erp_system_1791914435242.jpg';

export const ASSETS = {
  heroBanner: heroBannerImg,
  logoBadge: logoBadgeImg,
  saasDashboard: saasDashboardImg,
  landingStore: landingStoreImg,
  erpSystem: erpSystemImg,
};

export const CONTACT_INFO = {
  phoneDisplay: '(81) 98947-0383',
  phoneRaw: '5581989470383',
  whatsappUrl: (message?: string) => {
    const text = message 
      ? encodeURIComponent(message)
      : encodeURIComponent('Olá NivyTech! Gostaria de saber mais sobre as soluções e solicitar um orçamento.');
    return `https://wa.me/5581989470383?text=${text}`;
  },
  instagramHandle: '@nivytech',
  instagramUrl: 'https://instagram.com/nivytech',
  email: 'contato@nivytech.com.br',
  location: 'Pernambuco, Brasil • Atendimento Nacional e Internacional',
};

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  targetAudience: string;
  badge?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'sites-dedicados',
    title: 'SITES DEDICADOS',
    tagline: 'Presença Digital de Alta Performance',
    shortDesc: 'Sites modernos, ultrarrápidos e totalmente personalizados para fortalecer a autoridade da sua marca.',
    fullDesc: 'Construímos sites institucionais e corporativos sob medida com design autêntico, velocidade extrema e arquitetura otimizada para SEO no Google.',
    iconName: 'Monitor',
    features: [
      'Design exclusivo alinhado à identidade da sua marca',
      'Tempo de carregamento abaixo de 1.5 segundos',
      'Totalmente responsivo (mobile, tablet e desktop)',
      'Painel intuitivo para você gerenciar conteúdos',
      'Otimização avançada de SEO para os buscadores',
      'Certificado de segurança SSL e proteção contra ataques'
    ],
    deliverables: [
      'Site 100% publicado e configurado no seu domínio',
      'Treinamento em vídeo para sua equipe gerenciar o conteúdo',
      'Suporte técnico e garantia pós-lançamento de 90 dias'
    ],
    targetAudience: 'Empresas, consultorias, indústrias e profissionais que desejam autoridade máxima no digital.'
  },
  {
    id: 'landing-pages',
    title: 'LANDING PAGES',
    tagline: 'Páginas Focadas em Máxima Conversão',
    shortDesc: 'Páginas estratégicas e persuasivas, projetadas para transformar cliques de tráfego pago em clientes reais.',
    fullDesc: 'Landing pages de conversão cirúrgica, projetadas com copywriting persuasivo, carregamento instantâneo e integração direta ao seu CRM.',
    iconName: 'LayoutTemplate',
    badge: 'Mais Pedido',
    features: [
      'Copywriting e estrutura de blocos orientados à conversão',
      'Gatilhos visuais e chamadas para ação (CTAs) estratégicas',
      'Rastreamento completo (Pixel do Meta, Google Analytics 4 e GTM)',
      'Integração direta com CRM e ferramentas de e-mail marketing',
      'Testes A/B estruturados para otimização contínua de leads'
    ],
    deliverables: [
      'Landing page completa no ar em tempo recorde',
      'Configuração das tags de conversão e eventos de clique',
      'Formulário inteligente para captação de leads qualificados'
    ],
    targetAudience: 'Gestores de tráfego, lançadores, prestadores de serviços e empresas rodando anúncios.'
  },
  {
    id: 'sistemas-gestao',
    title: 'SISTEMAS DE GESTÃO (ERP / CRM)',
    tagline: 'Automação e Controle Total do Negócio',
    shortDesc: 'Organize, gerencie e otimize processos operacionais com painéis completos, intuitivos e inteligentes.',
    fullDesc: 'Softwares de gestão empresarial (ERP/CRM) criados para centralizar finanças, estoque, clientes, pedidos e relatórios analíticos em uma única tela.',
    iconName: 'LineChart',
    features: [
      'Controle financeiro com fluxo de caixa, contas a pagar e receber',
      'Gestão de estoque em tempo real com alerta de reposição',
      'Cadastro e funil de clientes (CRM) com histórico de interações',
      'Gráficos dinâmicos e métricas de desempenho em tempo real',
      'Controle refinado de níveis de acesso e permissões de usuários'
    ],
    deliverables: [
      'Sistema em nuvem acessível 24/7 com backup automático',
      'Importação de planilhas e dados legados da sua empresa',
      'Treinamento completo para gestores e colaboradores'
    ],
    targetAudience: 'Comércios, distribuidores, escritórios e empresas que precisam eliminar planilhas manuais.'
  },
  {
    id: 'sistemas-dedicados',
    title: 'SISTEMAS DEDICADOS SOB MEDIDA',
    tagline: 'Engenharia de Software Customizada',
    shortDesc: 'Soluções de software desenvolvidas exatamente para as regras e necessidades específicas do seu modelo de negócio.',
    fullDesc: 'Quando nenhuma solução de prateleira atende à sua operação, nós desenhamos e programamos uma plataforma exclusiva com lógica proprietária.',
    iconName: 'Laptop',
    badge: 'Enterprise',
    features: [
      'Mapeamento completo do fluxo de trabalho da sua empresa',
      'Arquitetura escalável para suportar milhares de acessos simultâneos',
      'Integração com sistemas legados e hardware (leitores, impressoras, etc.)',
      'Segurança de nível corporativo e conformidade com a LGPD',
      'Banco de dados robusto com redundância e alta disponibilidade'
    ],
    deliverables: [
      'Código-fonte e propriedade intelectual 100% da sua empresa',
      'Documentação técnica de arquitetura e APIs',
      'Acordo de nível de serviço (SLA) para suporte contínuo'
    ],
    targetAudience: 'Médias e grandes empresas com regras de negócio únicas e operações críticas.'
  },
  {
    id: 'softwares-prontos',
    title: 'SOFTWARES PRONTOS & MODULARES',
    tagline: 'Implementação Rápida & Custo Eficiente',
    shortDesc: 'Soluções já testadas e validadas para acelerar a transformação digital com rápida entrada em operação.',
    fullDesc: 'Módulos tecnológicos pré-estruturados que reduzem drasticamente o tempo de desenvolvimento e o custo inicial de implantação da sua empresa.',
    iconName: 'Package',
    features: [
      'Módulos pré-configurados de agendamento, pedidos ou catálogos',
      'Implantação em poucos dias com customização da sua identidade visual',
      'Painel intuitivo e adaptável ao fluxo da sua operação',
      'Sem surpresas: custos previsíveis e suporte técnico especializado',
      'Atualizações constantes de segurança e melhorias de performance'
    ],
    deliverables: [
      'Ambiente pronto e configurado para sua operação imediata',
      'Customização com suas cores, logotipo e domínio próprio',
      'Canal direto de suporte e plantão para dúvidas'
    ],
    targetAudience: 'Empreendedores e empresas que buscam entrar no mercado com rapidez e segurança.'
  },
  {
    id: 'integracoes-apis',
    title: 'AUTOMAÇÃO & INTEGRAÇÕES DE API',
    tagline: 'Conectividade e Inteligência de Processos',
    shortDesc: 'Conecte seus sistemas a plataformas externas, bancos de dados e inteligência analítica.',
    fullDesc: 'Automatizamos tarefas repetitivas integrando seu ecossistema digital a plataformas parceiras, bancos de dados e ferramentas de inteligência analítica.',
    iconName: 'Cpu',
    features: [
      'Sincronização contínua de dados entre sistemas e plataformas',
      'Integração com emissores de nota fiscal e ferramentas contábeis',
      'Sincronização bidirecional entre plataformas web e ERP',
      'Pipelines de webhooks com tolerância a falhas e reprocessamento',
      'Relatórios automáticos enviados direto para gestores'
    ],
    deliverables: [
      'Rotinas automatizadas funcionando sem intervenção manual',
      'Painel de monitoramento do status das integrações',
      'Redução comprovada de tempo gasto em tarefas operacionais'
    ],
    targetAudience: 'Negócios que querem poupar centenas de horas operacionais e erros manuais.'
  }
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 'project-saas',
    title: 'Nexus Analytics SaaS Platform',
    category: 'Dashboard & Inteligência',
    image: saasDashboardImg,
    description: 'Plataforma web analítica em tempo real com processamento de métricas financeiras, retenção de usuários e gráficos preditivos.',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    results: '+180% na velocidade de tomada de decisão e relatórios em tempo real.'
  },
  {
    id: 'project-landing',
    title: 'Aetherium E-commerce Experience',
    category: 'Landing Page & Loja Virtual',
    image: landingStoreImg,
    description: 'Plataforma de alta conversão para produtos premium, com catálogo interativo e carregamento ultrarrápido.',
    techs: ['Next.js', 'Vite', 'REST API', 'Framer Motion'],
    results: '+42% na taxa de retenção e navegação mobile.'
  },
  {
    id: 'project-erp',
    title: 'Quantum Core ERP & Logistics',
    category: 'Sistema de Gestão Empresarial',
    image: erpSystemImg,
    description: 'Software corporativo para controle de estoque multiponto, gestão de vendas, automação de pedidos e fluxo de suprimentos.',
    techs: ['React', 'Express', 'Docker', 'PostgreSQL', 'WebSockets'],
    results: 'Redução de 65% em falhas de estoque e centralização total de filiais.'
  }
];

export const METHODOLOGY_STEPS = [
  {
    number: '01',
    title: 'Diagnóstico & Estratégia',
    desc: 'Mapeamos suas dores, objetivos e regras de negócio para definir a solução exata com o melhor custo-benefício.'
  },
  {
    number: '02',
    title: 'UI/UX & Arquitetura',
    desc: 'Desenhamos protótipos visuais modernos e intuitivos, aprovados por você antes de qualquer linha de código.'
  },
  {
    number: '03',
    title: 'Desenvolvimento Ágil',
    desc: 'Programação limpa com código robusto, segurança de dados e entregas parciais para você acompanhar o progresso.'
  },
  {
    number: '04',
    title: 'Lançamento & Suporte',
    desc: 'Colocamos sua solução no ar com treinamento prático para sua equipe e acompanhamento técnico contínuo.'
  }
];

export const FAQS = [
  {
    question: 'Quanto tempo leva para desenvolver um site ou sistema?',
    answer: 'O prazo varia conforme a complexidade. Landing pages estratégicas costumam ser entregues entre 5 a 10 dias úteis. Sites institucionais dedicados levam em média de 2 a 3 semanas. Já sistemas de gestão e softwares sob medida são planejados em sprints de 3 a 6 semanas, sempre com entregas modulares para você validar cada etapa.'
  },
  {
    question: 'O código, domínio e sistema serão 100% meus?',
    answer: 'Sim, com total transparência! Você é o dono da sua solução, do seu domínio e do seu código. Diferente de plataformas que prendem o cliente em mensalidades abusivas, nós entregamos a posse e os acessos administrativos completos para a sua empresa.'
  },
  {
    question: 'A NivyTech oferece suporte e manutenção após a entrega?',
    answer: 'Com certeza! Todos os nossos projetos contam com garantia pós-lançamento inclusa e suporte direto para tirar dúvidas. Além disso, disponibilizamos planos flexíveis de evolução contínua, hospedagem em nuvem monitorada e backups automáticos.'
  },
  {
    question: 'Como funciona a contratação e o início do projeto?',
    answer: 'Trabalhamos com contrato formal de prestação de serviços e emissão de nota fiscal. O escopo é detalhado previamente com cronograma de entregas e condições combinadas de forma transparente.'
  },
  {
    question: 'Vocês atendem empresas de qualquer lugar do Brasil?',
    answer: 'Sim! Embora estejamos sediados em Pernambuco, nossa infraestrutura e processos de desenvolvimento são 100% digitais e ágeis. Atendemos clientes em todo o território nacional e no exterior com reuniões estruturadas por vídeo e acompanhamento em tempo real.'
  }
];

export const TECH_STACK = [
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Linguagem' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Tailwind CSS', category: 'Estilização' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Banco de Dados' },
  { name: 'Cloud & Docker', category: 'DevOps' },
  { name: 'APIs & Webhooks', category: 'Integração' }
];
