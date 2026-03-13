import React from 'react';
import { 
  AlertCircle,
  Award,
  BarChart3, 
  Briefcase,
  Building2, 
  Calculator, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Cloud,
  Cpu, 
  Database,
  FileCheck,
  FileText,
  Fingerprint,
  Globe, 
  HardHat,
  Heart,
  Instagram,
  Mail,
  Menu, 
  MessageCircle,
  Monitor,
  Moon,
  Phone,
  Scale,
  Shield,
  ShieldCheck, 
  Smartphone,
  Stethoscope,
  Sun,
  Target,
  TrendingUp, 
  Users,
  X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_CONFIG } from './constants';

const WhatsAppButton = () => {
  return (
    <motion.a
      href={CONTACT_CONFIG.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:bg-[#20ba5a] transition-colors"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute -top-2 -right-2 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-white"></span>
      </span>
    </motion.a>
  );
};

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean; toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex flex-col leading-none">
              <span className="text-xl font-display font-bold text-primary">UTS <span className="text-accent">SERVICE</span></span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.1em]">Contabilidade & SST</span>
            </div>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">Serviços</a>
            <a href="#certificados" className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">Certificados</a>
            <a href="#por-que-nos" className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">Por que nós</a>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600"
              aria-label="Alternar tema"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a 
              href={CONTACT_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md active:scale-95"
            >
              Falar com Especialista
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-b border-slate-200 absolute top-20 left-0 right-0 p-4 flex flex-col gap-4 shadow-xl"
        >
          <a href="#servicos" onClick={() => setIsOpen(false)} className="text-lg font-medium p-2">Serviços</a>
          <a href="#certificados" onClick={() => setIsOpen(false)} className="text-lg font-medium p-2">Certificados</a>
          <a href="#por-que-nos" onClick={() => setIsOpen(false)} className="text-lg font-medium p-2">Por que nós</a>
          <a 
            href={CONTACT_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-white w-full py-4 rounded-xl font-bold text-center"
          >
            Falar com Especialista
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-400 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-blue-50 rounded-full border border-blue-100">
            Manter a unidade de trabalho segura
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-8 leading-[1.1] max-w-4xl mx-auto">
            Gestão Completa em <span className="gradient-text">Contabilidade & SST</span> para sua Empresa.
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Unimos inteligência contábil e segurança do trabalho para garantir a conformidade total e o crescimento sustentável do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={CONTACT_CONFIG.consultationFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 group"
            >
              Quero uma consultoria gratuita
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={CONTACT_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white text-primary border border-slate-200 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all text-center"
            >
              Ver planos e preços
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-20 relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
              alt="Dashboard Financeiro" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Calculator className="text-blue-600" size={32} />,
      title: "Contabilidade Completa",
      description: "Escrituração, balancetes mensais, balanço patrimonial e DRE para uma visão clara do seu negócio.",
      features: ["Contabilidade Geral", "Contabilidade Gerencial", "Obrigações Acessórias (ECD/ECF)"]
    },
    {
      icon: <TrendingUp className="text-emerald-600" size={32} />,
      title: "Fiscal & Tributário",
      description: "Apuração de impostos, planejamento tributário e conformidade com SPED para reduzir sua carga fiscal.",
      features: ["Simples, Lucro Presumido e Real", "Planejamento Tributário", "Recuperação de Créditos"]
    },
    {
      icon: <Users className="text-indigo-600" size={32} />,
      title: "Departamento Pessoal",
      description: "Gestão completa de folha de pagamento, eSocial, admissões e conformidade com a legislação trabalhista.",
      features: ["Folha de Pagamento", "eSocial & FGTS Digital", "Rotinas Trabalhistas"]
    },
    {
      icon: <Briefcase className="text-slate-700" size={32} />,
      title: "Recursos Humanos (RH)",
      description: "Suporte na gestão de pessoas, recrutamento, seleção e desenvolvimento do clima organizacional.",
      features: ["Recrutamento & Seleção", "Cargos e Salários", "Avaliação de Desempenho"]
    },
    {
      icon: <Scale className="text-amber-600" size={32} />,
      title: "Legalização & Abertura",
      description: "Abertura de empresas, alterações contratuais, registros em órgãos e regularização de pendências.",
      features: ["Abertura e Baixa de Empresas", "Alvarás e Licenças", "Parcelamento de Débitos"]
    },
    {
      icon: <HardHat className="text-orange-600" size={32} />,
      title: "Saúde e Segurança (SST)",
      description: "Conformidade total com as NRs e envio de eventos para o eSocial com precisão técnica.",
      features: ["PGR / PCMSO / LTCAT", "Treinamentos de NRs", "Gestão de eSocial SST"]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">Soluções 360° para sua Empresa</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Oferecemos um ecossistema completo de serviços para garantir a segurança jurídica, fiscal e contábil do seu negócio.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 size={16} className="text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href={CONTACT_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:gap-3 transition-all"
              >
                Saiba mais <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Certificates = () => {
  const certificates = [
    {
      type: "e-CPF",
      price: "129",
      description: "Identidade digital para pessoas físicas. Assine documentos com validade jurídica.",
      icon: <Fingerprint className="text-blue-600" size={40} />,
      features: ["Assinatura de contratos", "Acesso ao e-CAC", "Declaração de IR facilitada"]
    },
    {
      type: "e-CNPJ",
      price: "159",
      description: "Identidade digital para empresas. Essencial para emissão de notas e obrigações fiscais.",
      icon: <Shield className="text-accent" size={40} />,
      features: ["Emissão de NF-e", "Acesso ao Conectividade Social", "Assinatura em nome da empresa"],
      popular: true
    }
  ];

  return (
    <section id="certificados" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">Certificados Digitais</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Emita seu certificado com rapidez, segurança e o melhor preço do mercado.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`bg-white p-8 rounded-[2.5rem] border ${cert.popular ? 'border-accent shadow-xl shadow-blue-500/10' : 'border-slate-100 shadow-sm'} relative`}
            >
              {cert.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Mais Procurado
                </span>
              )}
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mb-8">
                {cert.icon}
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">{cert.type}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-slate-400 text-lg font-medium">R$</span>
                <span className="text-4xl font-bold text-primary">{cert.price}</span>
                <span className="text-slate-400 text-sm">/ano</span>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">{cert.description}</p>
              <ul className="space-y-4 mb-10">
                {cert.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                    <CheckCircle2 size={18} className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href={CONTACT_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block text-center py-4 rounded-2xl font-bold transition-all ${cert.popular ? 'bg-accent text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25' : 'bg-slate-100 text-primary hover:bg-slate-200'}`}
              >
                Emitir Agora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TaxHighlight = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] -ml-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/30">
              <AlertCircle size={18} />
              Temporada 2026 Aberta
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Imposto de Renda <span className="text-accent">2026</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Não deixe para a última hora! Evite a malha fina, minimize o imposto a pagar e garanta sua restituição nos primeiros lotes com nossa consultoria especializada.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Declaração Completa e Simplificada",
                "Análise de Ganhos de Capital (Imóveis e Ações)",
                "Consultoria para Investidores (Cripto e Bolsa)",
                "Regularização de CPF e Pendências"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-medium">
                  <CheckCircle2 size={20} className="text-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <a 
              href={CONTACT_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40 active:scale-95"
            >
              Falar com Especialista IR
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 lg:p-12 rounded-[3rem] shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div className="text-accent">
                  <FileText size={48} />
                </div>
                <div className="text-right">
                  <div className="text-sm uppercase tracking-widest text-blue-200 font-bold">Prazo Final</div>
                  <div className="text-2xl font-bold">30 de Abril</div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-bold mb-2">Restituição Rápida</h4>
                  <p className="text-sm text-blue-100">Quanto antes você declara, mais cedo recebe sua restituição.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h4 className="font-bold mb-2">Segurança Total</h4>
                  <p className="text-sm text-blue-100">Análise minuciosa de cruzamento de dados para evitar a malha fina.</p>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <ShieldCheck size={24} />
                </div>
                <p className="text-sm font-medium text-blue-50">
                  Sua tranquilidade fiscal é nossa prioridade absoluta.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: "Anos de Experiência", value: "10+", sub: "Desde 2014" },
    { label: "Clientes Satisfeitos", value: "50+", sub: "Atendimento de excelência" },
    { label: "Lançamentos Contábeis", value: "5.000+", sub: "Precisão em cada detalhe" },
    { label: "Declarações Enviadas", value: "2.000+", sub: "Conformidade total" }
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Technology = () => {
  const techs = [
    {
      icon: <Monitor className="text-blue-500" />,
      title: "Sistema Profissional",
      description: "Utilizamos Alterdata Software, referência em gestão contábil no Brasil."
    },
    {
      icon: <Smartphone className="text-emerald-500" />,
      title: "Aplicativo do Cliente",
      description: "Acesso total via e-Contador: documentos e solicitações na palma da sua mão."
    },
    {
      icon: <Cloud className="text-sky-500" />,
      title: "Arquivos em Nuvem",
      description: "Seus documentos 100% digitais, acessíveis de qualquer lugar com segurança."
    },
    {
      icon: <Database className="text-indigo-500" />,
      title: "Backup & Segurança",
      description: "Proteção rigorosa de dados com backups automáticos e criptografia."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">Infraestrutura & Tecnologia</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Unimos o melhor da tecnologia contábil com um atendimento humanizado e consultivo.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 transition-all"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                {tech.icon}
              </div>
              <h4 className="text-lg font-bold text-primary mb-3">{tech.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Calculator size={24} />,
      title: "Pacotes Integrados",
      description: "Contabilidade + DP + BPO Financeiro em uma única solução simplificada."
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Atendimento Consultivo",
      description: "Suporte proativo e estratégico para o crescimento do seu negócio."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Preços Competitivos",
      description: "O melhor custo-benefício do mercado com tecnologia de ponta."
    },
    {
      icon: <Cpu size={24} />,
      title: "Tecnologia Moderna",
      description: "Processos 100% digitais e automatizados para sua comodidade."
    }
  ];

  return (
    <section id="por-que-nos" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              Por que empresas escolhem a <span className="text-accent">UTS SERVICE</span>?
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Não somos apenas um escritório de contabilidade. Somos seu parceiro estratégico de crescimento, unindo a expertise humana com o poder da tecnologia.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div className="text-accent">{reason.icon}</div>
                  <h4 className="font-bold text-primary">{reason.title}</h4>
                  <p className="text-sm text-slate-500">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
                alt="Equipe trabalhando" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl shadow-xl max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Suporte Online</span>
              </div>
              <p className="text-sm font-medium text-primary">"Sempre disponíveis para tirar minhas dúvidas em tempo real."</p>
              <p className="text-xs text-slate-400 mt-2">— João Silva, CEO TechFlow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-8">Nosso Propósito e Compromisso</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-accent">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Propósito Maior</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Contribuir para o desenvolvimento econômico sustentável da Amazônia por meio da organização financeira e jurídica das empresas locais.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-accent">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Política de Qualidade</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Compromisso com entrega no prazo, zero erros em obrigações acessórias e atualização mensal com clientes sobre oportunidades fiscais e redução de carga tributária.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-accent">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Objetivos Gerais</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Tornar-se referência em serviços contábeis, alcançando 30 clientes ativos até o final de 2026 com excelência operacional.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-slate-50 p-8 lg:p-12 rounded-[3rem] border border-slate-100">
              <h3 className="text-2xl font-bold text-primary mb-6">Quem Atendemos</h3>
              <p className="text-slate-600 mb-8">
                Focamos no nicho que move a economia, oferecendo soluções sob medida para:
              </p>
              <ul className="space-y-4">
                {[
                  "Empresas do ramo de serviços e comércio",
                  "MEIs, MEs e EPPs",
                  "Simples Nacional",
                  "Empresas com até 10 funcionários"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <p className="text-sm italic text-slate-500">
                  "Nossa missão é simplificar a burocracia para que você foque no que realmente importa: o seu negócio."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Pronto para levar sua empresa ao próximo nível?</h2>
            <p className="text-blue-100 text-lg lg:text-xl mb-12 max-w-2xl mx-auto">
              Junte-se a mais de 500 empresas que já transformaram sua gestão financeira conosco.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={CONTACT_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-2xl text-xl font-bold hover:bg-blue-50 transition-all shadow-xl active:scale-95 text-center"
              >
                Começar agora
              </a>
              <a 
                href={CONTACT_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-transparent text-white border border-white/30 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/10 transition-all text-center"
              >
                Falar com consultor
              </a>
            </div>
            <p className="text-blue-300/60 mt-8 text-sm">Sem compromisso. Sem taxas ocultas. Apenas resultados.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6 group">
              <span className="text-lg font-display font-bold text-primary">UTS SERVICE</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Manter a unidade de trabalho segura. Especialistas em Contabilidade e Segurança do Trabalho.
            </p>
            <div className="space-y-3">
              <a href="mailto:utsservice.adm@gmail.com" className="flex items-center gap-2 text-sm text-slate-500 hover:text-accent transition-colors">
                <Mail size={16} />
                utsservice.adm@gmail.com
              </a>
              <a href="tel:+5592992001690" className="flex items-center gap-2 text-sm text-slate-500 hover:text-accent transition-colors">
                <Phone size={16} />
                +55 92 99200-1690
              </a>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Clock size={16} className="text-accent" />
                Segunda a sexta: 08h às 17h
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-primary mb-6">Serviços</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-accent transition-colors">BPO Financeiro</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Abertura de Empresa</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Consultoria Fiscal</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Folha de Pagamento</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-primary mb-6">Empresa</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-accent transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li>
                <a 
                  href={CONTACT_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-primary mb-6">Legal</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="/privacidade.html" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Privacidade</a></li>
              <li><a href="/termos.html" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Termos de Uso</a></li>
              <li><a href="/privacidade.html" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LGPD</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">© 2026 UTS SERVICE Contabilidade & SST. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/uts_consultoria" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors flex items-center gap-2 text-xs uppercase font-bold tracking-widest">
              <Instagram size={16} />
              Instagram
            </a>
            <a href="#" className="text-slate-400 hover:text-accent transition-colors text-xs uppercase font-bold tracking-widest">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Stats />
        <TaxHighlight />
        <Services />
        <Certificates />
        <Technology />
        <WhyChooseUs />
        <About />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
