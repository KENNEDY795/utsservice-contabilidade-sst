import React from 'react';
import { 
  Award,
  BarChart3, 
  Building2, 
  Calculator, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Cpu, 
  Globe, 
  HardHat,
  Heart,
  Instagram,
  Mail,
  Menu, 
  MessageCircle,
  Phone,
  ShieldCheck, 
  Stethoscope,
  Target,
  TrendingUp, 
  X 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_CONFIG } from './constants';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
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

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://storage.googleapis.com/m-infra.appspot.com/v0/b/m-infra.appspot.com/o/ifinsopwckg3qv42b22ui5%2Finput_file_1.png?alt=media&token=86791e3e-4f0f-4886-8968-09761920803c" 
              alt="UTS SERVICE Logo" 
              className="h-12 w-auto"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-display font-bold text-primary">UTS <span className="text-accent">SERVICE</span></span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.1em]">Manter a unidade de trabalho segura</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#servicos" className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">Serviços</a>
            <a href="#por-que-nos" className="text-sm font-medium text-slate-600 hover:text-accent transition-colors">Por que nós</a>
            <a 
              href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md active:scale-95"
            >
              Falar com Especialista
            </a>
          </div>

          <div className="md:hidden">
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
          <a href="#por-que-nos" onClick={() => setIsOpen(false)} className="text-lg font-medium p-2">Por que nós</a>
          <a 
            href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`}
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
              href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 group"
            >
              Quero uma consultoria gratuita
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`}
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
      icon: <BarChart3 className="text-blue-600" size={32} />,
      title: "Contabilidade Digital",
      description: "Gestão contábil moderna, ágil e focada em resultados reais para o seu negócio.",
      features: ["Planejamento tributário", "Folha de pagamento", "Demonstrativos em tempo real"]
    },
    {
      icon: <HardHat className="text-slate-700" size={32} />,
      title: "Saúde e Segurança (SST)",
      description: "Conformidade total com as NRs e envio de eventos para o eSocial com precisão.",
      features: ["PGR / PCMSO / LTCAT", "Treinamentos de NRs", "Gestão de afastamentos"]
    },
    {
      icon: <TrendingUp className="text-blue-700" size={32} />,
      title: "BPO Financeiro",
      description: "Terceirize seu financeiro e ganhe tempo para focar na estratégia da sua empresa.",
      features: ["Contas a pagar/receber", "Fluxo de caixa", "Conciliação bancária"]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4">Soluções Inteligentes</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Tudo o que sua empresa precisa para prosperar em um ambiente digital e competitivo.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 size={16} className="text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
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
                href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-2xl text-xl font-bold hover:bg-blue-50 transition-all shadow-xl active:scale-95 text-center"
              >
                Começar agora
              </a>
              <a 
                href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`}
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
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://storage.googleapis.com/m-infra.appspot.com/v0/b/m-infra.appspot.com/o/ifinsopwckg3qv42b22ui5%2Finput_file_1.png?alt=media&token=86791e3e-4f0f-4886-8968-09761920803c" 
                alt="UTS SERVICE Logo" 
                className="h-10 w-auto"
                referrerPolicy="no-referrer"
              />
              <span className="text-lg font-display font-bold text-primary">UTS SERVICE</span>
            </div>
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
                  href={`https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(CONTACT_CONFIG.whatsappMessage)}`}
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
              <li><a href="#" className="hover:text-accent transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">LGPD</a></li>
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
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <About />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
