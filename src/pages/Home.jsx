import React from 'react';
import { ArrowRight, Globe, Cpu, BarChart3, Building2, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = ({ mousePos, heroRef }) => {
  return (
    <>
      {/* PREMIUM HERO SECTION */}
      <header ref={heroRef} className="relative min-h-[90vh] flex items-center pt-24 pb-20 px-6 md:px-12 overflow-hidden bg-white">
        
        {/* Animated Gradient Mesh (Subtle) */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-100 rounded-full blur-[100px] animate-[mesh-pulse_8s_infinite] decoration-clone" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-slate-100 rounded-full blur-[120px] animate-[mesh-pulse_12s_infinite_reverse]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[80px] animate-[mesh-pulse_10s_infinite]" />
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 z-1 pointer-events-none opacity-15">
          <div className="absolute top-1/4 left-10 animate-float stagger-1"><Cpu className="w-10 h-10 text-emerald-400 rotate-12" /></div>
          <div className="absolute bottom-1/4 left-1/3 animate-float stagger-2"><BarChart3 className="w-14 h-14 text-slate-300 -rotate-12" /></div>
          <div className="absolute top-1/3 right-1/4 animate-float stagger-3"><Building2 className="w-10 h-10 text-emerald-300 rotate-45" /></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="space-y-10 opacity-0 animate-reveal">
            <div className="inline-flex items-center space-x-3 bg-slate-50 text-slate-600 px-5 py-2.5 rounded-full border border-slate-200 shadow-sm animate-reveal stagger-1">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">Planeación Estratégica 2023-2030</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.95] tracking-tight opacity-0 animate-reveal stagger-2">
              Arquitectos de <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-indigo-500">Valor Digital.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed opacity-0 animate-reveal stagger-3 font-medium">
              NEXUM trasciende el desarrollo tradicional para integrar visión estratégica, diseño estructurado y tecnología de alto impacto a medida para tu empresa.
            </p>
            
            <div className="flex flex-wrap gap-5 pt-4 opacity-0 animate-reveal stagger-3">
              <Link to="/portafolio" className="bg-slate-900 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-emerald-600 transition-all flex items-center group shadow-xl hover:shadow-emerald-500/30 transform hover:-translate-y-1">
                Ver Portafolio <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <div className="flex items-center space-x-5 px-8 py-4 rounded-xl border border-slate-200 bg-white shadow-md group hover:border-emerald-200 transition-colors">
                <Globe className="text-emerald-500 w-6 h-6 group-hover:rotate-[20deg] transition-transform" />
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Sede Corporativa</p>
                  <p className="text-sm font-black text-slate-800">Medellín, Colombia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Parallax Card */}
          <div 
            className="relative perspective-1000 hidden lg:block opacity-0 animate-reveal stagger-3"
            style={{ 
              transform: `rotateY(${mousePos.x * 5 - 2.5}deg) rotateX(${-(mousePos.y * 5 - 2.5)}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="bg-white p-3 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative z-10 transition-transform duration-500">
              <div className="bg-slate-50 rounded-[2rem] p-10 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] scale-150 rotate-12"><Building2 className="w-48 h-48" /></div>
                
                <div className="flex items-center justify-between mb-10 relative z-10">
                  <div className="bg-slate-900 text-white p-4 rounded-xl shadow-lg">
                    <Target className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">NIT PROVISIONAL</span>
                    <p className="text-xs font-black text-slate-900">LTDA-2023-COL</p>
                  </div>
                </div>

                <div className="space-y-8 relative z-10">
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Modelo de Negocio</h4>
                    <p className="text-2xl font-black text-slate-900 leading-tight">Sociedad de <br/>Responsabilidad Limitada</p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <Link to="/legal" className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between group hover:border-emerald-500 transition-colors">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-slate-600">Ver Detalles Legales</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-emerald-500 group-hover:translate-x-1.5 transition-transform" />
                    </Link>
                  </div>

                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex -space-x-3 mb-4">
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold shadow-md ${i % 2 === 0 ? 'bg-emerald-500 text-white' : 'bg-slate-900 text-white'}`}>
                          S{i}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                       Gobernanza distribuida equitativamente entre los 4 socios fundadores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Brief Summary Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-3 gap-10">
        {[
          { icon: <Target className="text-emerald-500 w-8 h-8" />, title: "Misión", link: "/estrategia", text: "Optimizar procesos a través de tecnología de vanguardia." },
          { icon: <Building2 className="text-emerald-500 w-8 h-8" />, title: "Historia", link: "/historia", text: "Fundada en 2023 con raíces sólidas en Medellín." },
          { icon: <Users className="text-emerald-500 w-8 h-8" />, title: "Equipo", link: "/equipo", text: "Liderado por expertos en gestión y tecnología." }
        ].map((item, idx) => (
          <Link key={idx} to={item.link} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all group">
            <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
            <p className="text-base text-slate-500 font-medium leading-relaxed">{item.text}</p>
            <div className="mt-8 flex items-center text-xs font-black text-emerald-600 uppercase tracking-widest group-hover:text-emerald-700">
              Explorar <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Home;
