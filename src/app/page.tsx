import { Phone } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-100 font-sans">
      {/* Header/Nav Placeholder */}
      <nav className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center rounded-sm">
              <span className="text-zinc-900 font-black text-xl">M</span>
            </div>
            <span className="font-bold text-xl tracking-tighter uppercase">Betoneiras <span className="text-yellow-500">Mantovani</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#inicio" className="hover:text-yellow-500 transition-colors">Início</a>
            <a href="#equipamentos" className="hover:text-yellow-500 transition-colors">Equipamentos</a>
            <a href="#contato" className="hover:text-yellow-500 transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-6">
                Líder em Locação de Betoneiras
              </span>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 uppercase italic">
                Sua obra <span className="text-yellow-500">não pode parar.</span>
              </h1>
              <p className="text-xl text-zinc-400 mb-10 max-w-lg leading-relaxed">
                Equipamentos de força para quem constrói o futuro. Robustez, confiabilidade e a agilidade que seu projeto exige.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-zinc-900 px-8 py-4 rounded-sm font-black uppercase flex items-center justify-center gap-3 transition-transform active:scale-95 group">
                  Alugue via WhatsApp
                  <span className="bg-zinc-900 text-yellow-500 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
                <button className="border border-zinc-700 hover:border-zinc-500 px-8 py-4 rounded-sm font-bold uppercase transition-colors">
                  Ver Catálogo
                </button>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-zinc-800 rounded-2xl relative overflow-hidden flex items-center justify-center group border border-zinc-700">
                <Image src="/hero_betoneira.png" alt="Betoneira de alta performance" fill className="object-cover group-hover:scale-105 transition-transform duration-700" priority />
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-transparent mix-blend-overlay"></div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-2xl flex items-center gap-4 max-w-xs">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                  ⚡
                </div>
                <div>
                  <p className="font-bold text-sm">Pronta Entrega</p>
                  <p className="text-xs text-zinc-500">Equipamentos revisados hoje.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Grid */}
      <section className="py-24 bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase italic mb-4">Por que escolher a <span className="text-yellow-500">Mantovani?</span></h2>
            <div className="w-20 h-1.5 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Manutenção Rigorosa", desc: "Equipamentos que não te deixam na mão. Revisões constantes seguindo as normas NR-18.", icon: "🛠️" },
              { title: "Entrega Rápida", desc: "Logística própria para garantir que a betoneira chegue no canteiro no momento planejado.", icon: "🚚" },
              { title: "Suporte Técnico", desc: "Equipe especializada pronta para resolver qualquer imprevisto diretamente na sua obra.", icon: "👷" }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900 p-8 border border-zinc-800 hover:border-yellow-500/50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500/5 -rotate-45 translate-x-8 -translate-y-8"></div>
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4 uppercase text-yellow-500">{item.title}</h3>
                <p className="text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipamentos */}
      <section id="equipamentos" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black uppercase italic mb-4">Nossa <span className="text-yellow-500">Frota</span></h2>
              <p className="text-zinc-400 max-w-md">Soluções ideais para pequeno, médio e grande porte. Equipamentos robustos e revisados.</p>
            </div>
            <button className="hidden md:flex border border-zinc-700 hover:border-yellow-500 text-sm font-bold uppercase px-6 py-3 rounded-sm transition-colors text-zinc-300 hover:text-yellow-500">
              Ver Catálogo Completo
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Betoneira 400L", desc: "A mais procurada. Ideal para fundações e lajes de médio porte.", cap: "400 Litros", img: "/betoneira_400l.png" },
              { name: "Betoneira 250L", desc: "Perfeita para reformas e construções menores. Alta mobilidade.", cap: "250 Litros", img: "/betoneira_250l.png" },
              { name: "Betoneira 600L", desc: "Para grandes obras que exigem alto volume de concreto rápido.", cap: "600 Litros", img: null }
            ].map((maq, i) => (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 group hover:border-yellow-500/50 transition-all-custom flex flex-col h-full">
                <div className="aspect-video bg-zinc-950 rounded-sm mb-6 flex items-center justify-center border border-zinc-800/50 relative overflow-hidden">
                  {maq.img ? (
                    <Image src={maq.img} alt={maq.name} fill className="object-cover scale-105 group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-yellow-500/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-zinc-800 font-black text-2xl uppercase group-hover:scale-110 transition-transform">{maq.cap}</span>
                    </>
                  )}
                </div>
                <div className="mb-auto">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-black uppercase italic">{maq.name}</h3>
                  </div>
                  <p className="text-zinc-400 text-sm">{maq.desc}</p>
                </div>
                <button className="mt-8 w-full bg-zinc-800 hover:bg-yellow-500 hover:text-zinc-900 text-zinc-300 py-3 rounded-sm font-bold uppercase transition-colors text-sm">
                  Consultar Valor
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-24 bg-zinc-900 border-t border-zinc-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-500/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl lg:text-5xl font-black uppercase italic mb-6">Pronto para <br/><span className="text-yellow-500">Agilizar</span> sua obra?</h2>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-md">
                Fale com a nossa equipe agora mesmo e garanta as melhores condições para o aluguel dos seus equipamentos.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-yellow-500 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase text-zinc-500 mb-1">WhatsApp & Ligações</h4>
                    <a href="https://wa.me/5511999408103" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-yellow-500 transition-colors">
                      (11) 99940-8103
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-yellow-500 shrink-0">
                    <span className="font-bold">@</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase text-zinc-500 mb-1">E-mail</h4>
                    <a href="mailto:betoneirasmantovani@terra.com.br" className="text-xl font-bold break-all hover:text-yellow-500 transition-colors">
                      betoneirasmantovani@terra.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-yellow-500 shrink-0">
                    <span className="font-bold">📍</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase text-zinc-500 mb-1">Localização</h4>
                    <p className="text-xl font-bold">Avenida São João, 1601 - Bairro da Ponte</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="bg-zinc-950 p-8 lg:p-10 rounded-sm border border-zinc-800">
              <h3 className="text-xl font-bold uppercase mb-8 border-b border-zinc-800 pb-4">Solicite um Orçamento</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Seu Nome</label>
                  <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="João da Silva" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Telefone</label>
                    <input type="text" className="w-full bg-zinc-900 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors" placeholder="(11) 90000-0000" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Equipamento</label>
                    <select className="w-full bg-zinc-900 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors appearance-none">
                      <option>Betoneira 400L</option>
                      <option>Betoneira 250L</option>
                      <option>Betoneira 600L</option>
                      <option>Outros</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Mensagem (Opcional)</label>
                  <textarea rows={3} className="w-full bg-zinc-900 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors resize-none" placeholder="Detalhes do projeto, prazo de locação..."></textarea>
                </div>
                <button type="button" className="w-full bg-yellow-500 hover:bg-yellow-400 text-zinc-900 py-4 font-black uppercase rounded-sm transition-colors mt-2">
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <footer className="py-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-zinc-600 text-sm italic">
            © 2026 Betoneiras Mantovani. Força Bruta para Grandes Construções.
          </p>
        </div>
      </footer>
    </main>
  );
}
