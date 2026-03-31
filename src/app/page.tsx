'use client';

import { useState, useEffect } from 'react';
import { Phone, CheckCircle2, Loader2, ChevronDown, Quote, Star, ArrowRight, Shield, Zap, Truck } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <main className="min-h-screen bg-black text-zinc-100 font-sans relative selection:bg-yellow-500 selection:text-black overflow-x-hidden">
      <div className="bg-metal-plate fixed inset-0 pointer-events-none" />
      <div className="bg-noise fixed inset-0 pointer-events-none" />
      
      {/* Decorative Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header/Nav */}
      <motion.nav 
        style={{ opacity: navOpacity, scale: navScale }}
        className="glass-nav sticky top-4 mx-4 md:mx-auto max-w-5xl z-[100] rounded-2xl transition-all duration-300"
      >
        <div className="px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(234,179,8,0.3)] group-hover:scale-110 transition-transform">
              <span className="text-zinc-900 font-black text-lg">M</span>
            </div>
            <span className="font-outfit font-black text-xl tracking-tighter uppercase">
              Betoneiras <span className="text-yellow-500">Mantovani</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.3em] font-outfit">
            {['Início', 'Equipamentos', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="hover:text-yellow-500 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-yellow-500 hover:after:w-full after:transition-all"
              >
                {item}
              </a>
            ))}
          </div>
          <a 
            href="#contato" 
            className="md:hidden bg-yellow-500 text-black p-2 rounded-full"
          >
            <Phone size={16} />
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-bold uppercase tracking-widest mb-8">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                Líder em Locação de Betoneiras desde 1986
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-6xl lg:text-8xl font-black leading-[0.9] mb-8 uppercase italic tracking-tighter">
                LOCAÇÃO <br/>
                COM <span className="text-yellow-500 text-glow-yellow">ATRASO <br/> ZERO.</span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-lg text-zinc-400 mb-12 max-w-lg leading-relaxed font-medium">
                Referência em Atibaia. Sua obra não pode parar: equipamentos revisados com entrega expressa e assistência técnica prioritária.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
                <a 
                  href="https://wa.me/5511999408103"
                  className="bg-yellow-500 hover:bg-yellow-400 text-zinc-900 px-10 py-5 rounded-xl font-black uppercase flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 shadow-[0_20px_40px_-10px_rgba(234,179,8,0.3)] group"
                >
                  Alugue via WhatsApp
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
                <a 
                  href="#equipamentos" 
                  className="glass-card px-10 py-5 rounded-xl font-bold uppercase transition-all hover:bg-zinc-800/50 flex items-center justify-center"
                >
                  Ver Catálogo
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" as const }}
              className="relative perspective-1000"
            >
              <div className="aspect-[4/5] md:aspect-square bg-zinc-900 rounded-[2.5rem] relative overflow-hidden group border border-white/5 shadow-2xl">
                <Image 
                  src="/hero_betoneira_400l.png" 
                  alt="Betoneira Mantovani 400L" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                  priority 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent opacity-60"></div>
                
                {/* Visual accents */}
                <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-yellow-500/30 rounded-tr-3xl"></div>
                <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-yellow-500/30 rounded-bl-3xl"></div>
              </div>

              {/* Floating Status Card */}
              <motion.div 
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-8 -right-4 md:-right-12 glass-card p-6 rounded-2xl shadow-2xl flex items-center gap-5 max-w-[280px] animate-float z-20"
              >
                <div className="w-14 h-14 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                  <Zap size={28} className="fill-yellow-500" />
                </div>
                <div>
                  <p className="font-black uppercase text-xs tracking-wider mb-1">Pronta Entrega</p>
                  <p className="text-[10px] uppercase font-bold text-zinc-500 leading-tight">Equipamentos testados hoje em Atibaia</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Differentials - Bento Grid Style */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-12 lg:col-span-4 mb-8"
            >
              <h2 className="text-4xl lg:text-5xl font-black uppercase italic mb-6 leading-[0.9]">
                POR QUE A <br/>
                <span className="text-yellow-500">MANTOVANI?</span>
              </h2>
              <p className="text-zinc-500 font-medium mb-8">
                Comprometimento que atravessa gerações. Não alugamos apenas máquinas, garantimos o fluxo da sua obra.
              </p>
              <div className="w-24 h-1 bg-yellow-500"></div>
            </motion.div>

            {[
              { 
                title: "Revisão em 21 Pontos", 
                desc: "Cada equipamento passa por uma inspeção rigorosa antes de sair para entrega.", 
                icon: <Shield size={24} />,
                className: "md:col-span-6 lg:col-span-4"
              },
              { 
                title: "Logística Expressa", 
                desc: "Entrega pontual no local da obra com equipe especializada em Atibaia.", 
                icon: <Truck size={24} />,
                className: "md:col-span-6 lg:col-span-4"
              },
              { 
                title: "Padrão de Qualidade", 
                desc: "Trabalhamos apenas com as melhores marcas do mercado (Menegotti, CSM, Hilti).", 
                icon: <Zap size={24} />,
                className: "md:col-span-12 lg:col-span-8"
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`${item.className} glass-card p-8 rounded-3xl relative group overflow-hidden`}
              >
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-yellow-500 mb-6 group-hover:scale-110 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black uppercase italic mb-4">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipamentos - Grid Showcase */}
      <section id="equipamentos" className="py-32 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-yellow-500 font-black uppercase tracking-[.3em] text-[10px] mb-4 block">Catálogo Pronta-Entrega</span>
              <h2 className="text-5xl lg:text-7xl font-black uppercase italic leading-[0.9]">
                MÁQUINAS <br/> <span className="text-zinc-600">DE PERFORMANCE.</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Betoneira 400L", desc: "A escolha padrão de mestres de obras. Motor Menegotti de alto torque.", spec: "400 Litros / 2HP", img: "/hero_betoneira_400l.png" },
              { name: "Rompedor 20kg", desc: "Força bruta para demolições pesadas. Linha profissional Hilti/Bosch.", spec: "20 KG / 45 Joules", img: "/rompedor_20kg_hilti.png" },
              { name: "Andaime Tubular", desc: "Estrutura robusta NR-18. Segurança absoluta para trabalhos em altura.", spec: "Sistema Travamento X", img: "/andaimes.png" }
            ].map((maq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-[2rem] p-4 flex flex-col group"
              >
                <div className="aspect-[4/3] bg-zinc-950 rounded-[1.5rem] mb-6 relative overflow-hidden">
                  <Image src={maq.img} alt={maq.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-yellow-500 border border-white/10">
                    {maq.spec}
                  </div>
                </div>
                <div className="px-4 pb-4 flex flex-col h-full">
                  <h3 className="text-2xl font-black uppercase italic mb-3">{maq.name}</h3>
                  <p className="text-zinc-500 text-sm mb-8 leading-relaxed">{maq.desc}</p>
                  <a 
                    href={`https://wa.me/5511999408103?text=Olá! Gostaria de consultar o valor da ${maq.name}`}
                    className="mt-auto w-full py-4 rounded-xl bg-zinc-800 hover:bg-yellow-500 text-zinc-400 hover:text-black font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    Consultar Valor
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Full Tools Catalog Sub-grid */}
          <div className="mt-24 pt-20 border-t border-white/5">
            <div className="mb-16 text-center">
              <h3 className="text-3xl lg:text-4xl font-black uppercase italic mb-4">Catálogo de <span className="text-yellow-500">Ferramentas</span></h3>
              <p className="text-zinc-500 font-medium max-w-lg mx-auto">Equipamentos auxiliares técnicos para todas as etapas da sua construção civil.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Rompedor", desc: "Demolição técnica de concreto e asfalto." },
                { name: "Placa Vibratória", desc: "Compactação de solos granulares." },
                { name: "Cortadora de Piso", desc: "Cortes precisos com disco diamantado." },
                { name: "Compactador", desc: "Impacto pesado para solos coesivos." },
                { name: "Alisadora", desc: "Acabamento de alto nível em concreto." },
                { name: "Furadeira Impacto", desc: "Perfuração técnica em alvenaria." },
                { name: "Lixadeira", desc: "Preparação de superfícies industriais." },
                { name: "Esmerilhadeira", desc: "Corte e desbaste profissional de metais." }
              ].map((tool, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl hover:bg-zinc-900 group transition-all"
                >
                  <div className="w-10 h-10 bg-zinc-800 flex items-center justify-center mb-6 text-yellow-500 font-black rounded-lg group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h4 className="font-black uppercase italic mb-2 group-hover:text-yellow-500 transition-colors text-sm">{tool.name}</h4>
                  <p className="text-zinc-500 text-[10px] uppercase font-bold leading-relaxed mb-6">{tool.desc}</p>
                  <a 
                    href={`https://wa.me/5511999408103?text=Olá! Gostaria de consultar o aluguel de: ${tool.name}`}
                    className="text-[10px] font-black uppercase tracking-[.2em] text-zinc-400 group-hover:text-yellow-500 flex items-center gap-2"
                  >
                    Consultar <span>→</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History Section - Impactful Overlay */}
      <section className="py-40 bg-zinc-900/30 relative overflow-hidden text-zinc-400 font-sans">
        <div className="absolute inset-0 opacity-5 select-none pointer-events-none flex items-center justify-center">
            <span className="text-[40vw] font-black leading-none">1986</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl lg:text-7xl font-black uppercase italic mb-10 leading-[0.9] text-zinc-100">
                TRADIÇÃO QUE <br/>
                <span className="text-yellow-500">ERGE HISTÓRIAS.</span>
              </h2>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-medium">
                <p>
                  Há quase quatro décadas, a <span className="text-white">Mantovani</span> faz parte da fundação de Atibaia. Do Bairro da Ponte aos grandes condomínios, nossas máquinas ajudaram a transformar a paisagem da região.
                </p>
                <p className="border-l-2 border-yellow-500 pl-6 italic">
                  "Confiança não se aluga, se constrói com anos de compromisso e assistência técnica de verdade."
                </p>
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-zinc-900 rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl relative group">
                <Image 
                  src="/hero_betoneira.png" 
                  alt="História Mantovani" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10 p-2">
                  <div className="text-yellow-500 font-black text-6xl italic leading-none mb-2">40+</div>
                  <div className="text-white font-bold uppercase tracking-[.3em] text-xs">Anos de Liderança</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Interactive Accordion */}
      <section className="py-24 bg-zinc-950/50 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-black uppercase italic mb-6">DÚVIDAS <span className="text-yellow-500">FREQUENTES</span></h2>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Transparência e agilidade para sua obra não parar</p>
          </motion.div>

          <div className="space-y-4">
            {[
              { 
                q: "Quanto tempo leva a entrega após o fechamento?", 
                a: "Nossa logística em Atibaia é otimizada para rapidez. Dependendo da disponibilidade e localização (como Bairro da Ponte), conseguimos realizar a entrega no mesmo dia para garantir o cumprimento do seu cronograma." 
              },
              { 
                q: "O que acontece se o equipamento apresentar defeito?", 
                a: "Oferecemos assistência prioritária. Caso ocorra qualquer falha técnica, nossa equipe vai até a obra em tempo recorde. Se o reparo imediato não for possível, realizamos a substituição do equipamento sem custo adicional." 
              },
              { 
                q: "Qual o prazo mínimo de locação?", 
                a: "Trabalhamos com flexibilidade total: diário, semanal, quinzenal e mensal. Adaptamos o contrato à necessidade real do seu projeto, com condições diferenciadas para longas durações." 
              },
              { 
                q: "Vocês trabalham com equipamentos além de betoneiras?", 
                a: "Sim. Nosso catálogo de elite inclui rompedores de diversas potências, placas vibratórias, compactadores de solo, andaimes tubulares e diversas ferramentas elétricas profissionais." 
              },
              { 
                q: "Quais as formas de pagamento aceitas?", 
                a: "Facilitamos o processo para você focar na obra: aceitamos faturamento para empresas (sujeito a análise), PIX, cartões de crédito e débito." 
              }
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden group">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-black uppercase italic text-sm tracking-wide group-hover:text-yellow-500 transition-colors">{item.q}</span>
                  <ChevronDown className={`text-yellow-500 transition-transform duration-500 ${openFaq === i ? 'rotate-180' : ''}`} size={20} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' as const }}
                    >
                      <div className="px-8 pb-8 text-zinc-400 text-sm leading-relaxed border-t border-white/[0.05] pt-6 font-medium">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato - Glass Form */}
      <section id="contato" className="py-40 relative scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl lg:text-7xl font-black uppercase italic mb-8 leading-[0.9]">
                SUA OBRA <br/>
                <span className="text-yellow-500">COMEÇA AQUI.</span>
              </h2>
              <p className="text-white/60 text-xl font-medium mb-16 leading-relaxed">
                Fale com quem entende de chão de obra. Atendimento técnico direto via WhatsApp ou e-mail.
              </p>
              
              <div className="space-y-10">
                {[
                  { label: "WhatsApp & Ligações", value: "(11) 99940-8103", sub: "Atendimento imediato" },
                  { label: "Email Corporativo", value: "betoneirasmantovani@terra.com.br", sub: "Para orçamentos formais" },
                  { label: "Endereço Sede", value: "Av. São João, 1601 - Atibaia/SP", sub: "Bairro da Ponte - Logística Expressa" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                      {i === 0 ? <Phone size={24} /> : i === 1 ? <Shield size={24} /> : <Zap size={24} />}
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-1">{item.label}</p>
                      <p className="text-xl font-black text-white group-hover:text-yellow-500 transition-colors uppercase italic">{item.value}</p>
                      <p className="text-[10px] uppercase font-bold text-yellow-500/60 mt-1">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-10 lg:p-12 rounded-[3rem] relative shadow-2xl"
            >
              <h3 className="text-2xl font-black uppercase italic mb-10 border-b border-white/5 pb-6">Solicitar Orçamento</h3>
              
              {submitted ? (
                <div className="py-20 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(234,179,8,0.4)]">
                    <CheckCircle2 size={40} className="text-black" />
                  </motion.div>
                  <h4 className="text-3xl font-black mb-4 uppercase italic">Solicitação Enviada!</h4>
                  <p className="text-zinc-500 mb-10 font-medium">Entraremos em contato o mais rápido possível.</p>
                  <button onClick={() => setSubmitted(false)} className="text-yellow-500 font-black uppercase text-xs tracking-widest hover:underline">Novo Orçamento</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Seu Nome</label>
                        <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 transition-colors font-medium" placeholder="Ex: João da Silva" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Telefone</label>
                        <input required type="tel" className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 transition-colors font-medium" placeholder="(11) 90000-0000" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Equipamento</label>
                      <select required className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 transition-colors font-medium appearance-none">
                        <option value="betoneira-400">Betoneira 400L</option>
                        <option value="rompedor">Rompedor 20kg</option>
                        <option value="placa">Placa Vibratória</option>
                        <option value="outro">Outros Equipamentos</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Mensagem</label>
                      <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 transition-colors font-medium resize-none" placeholder="Conte-nos sobre sua obra..."></textarea>
                    </div>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:bg-zinc-700 text-black py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all shadow-[0_20px_40px_-10px_rgba(234,179,8,0.3)] flex items-center justify-center gap-3 active:scale-95"
                  >
                    {isSubmitting ? <Loader2 className="animate-spin" size={24} /> : 'Enviar Solicitação'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Minimalist */}
      <footer className="py-20 border-t border-white/5 relative bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center rounded-xl">
                        <span className="text-black font-black text-xl">M</span>
                    </div>
                    <span className="font-outfit font-black text-2xl tracking-tighter uppercase whitespace-nowrap">
                        Betoneiras <span className="text-yellow-500">Mantovani</span>
                    </span>
                </div>
                <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em] text-center md:text-right">
                    TRADIÇÃO QUE ERGUE HISTÓRIAS © 2026 ATIBAIA / SP
                </p>
            </div>
        </div>
      </footer>

      {/* Floating WhatsApp Action */}
      <motion.a 
        href="https://wa.me/5511999408103" 
        target="_blank" 
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.4)] flex items-center justify-center group"
      >
        <div className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-xl text-xs font-black uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0">
          Como podemos ajudar? 🏗️
        </div>
        <Phone size={28} className="fill-white" />
      </motion.a>
    </main>
  );
}
