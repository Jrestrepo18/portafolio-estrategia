import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Target, Users2, Shield, Scale, Users, Building2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import CorporateWavesCanvas from '../components/CorporateWavesCanvas';

const heroSlides = [
  {
    title: "Protegemos lo que",
    highlight: "tanto le costó construir.",
    subtitle: "Consultoría de alto impacto en gestión de riesgos, reingeniería de procesos e inteligencia tecnológica para blindar y escalar su empresa.",
    icon: <ShieldCheck />,
    status: "Blindaje Activo"
  },
  {
    title: "Diseñamos estrategias",
    highlight: "que generan valor real.",
    subtitle: "Transformamos su visión corporativa en resultados medibles, con diagnósticos integrales y planes de acción ejecutables desde el primer día.",
    icon: <Target />,
    status: "Análisis de Valor"
  },
  {
    title: "Construimos equipos",
    highlight: "de alto rendimiento.",
    subtitle: "Potenciamos el capital humano de su organización con programas de liderazgo, coaching ejecutivo y diseño de cultura organizacional.",
    icon: <Users2 />,
    status: "Capital Humano"
  }
];

const Home = ({ mousePos, heroRef }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsAnimating(false);
      }, 600);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentText = heroSlides[currentSlide];

  return (
    <>
      {/* DARK PREMIUM HERO */}
      <section ref={heroRef} className="relative min-h-[100dvh] flex items-center justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-[#020617]">
        
        <CorporateWavesCanvas />

        <div className="max-w-7xl mx-auto relative z-20 w-full">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

            {/* Left Text Block */}
            <div className="text-left space-y-10">
              
              <div className="inline-flex items-center gap-4 px-5 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md shadow-2xl animate-reveal">
                <span className="flex gap-2">
                  <ShieldCheck size={16} className="text-[#c5a67c]" />
                  <Target size={16} className="text-[#c5a67c]" />
                  <Users2 size={16} className="text-[#c5a67c]" />
                </span>
                <div className="w-[1px] h-4 bg-white/20" />
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-[#c5a67c]">
                  Estrategia · Valor · Seguridad
                </span>
              </div>

              <div className="relative">
                <h1
                  className={`text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.15] transition-all duration-700 ease-out ${isAnimating ? 'opacity-0 translate-y-6 blur-sm' : 'opacity-100 translate-y-0 blur-0'}`}
                >
                  <span className="block text-slate-500 font-light text-sm md:text-lg uppercase tracking-[0.3em] mb-4">
                    Consultores Estratégicos
                  </span>
                  {currentText.title} <br />
                  <span className="relative inline-block text-[#c5a67c] mt-1 font-extrabold">
                    {currentText.highlight}
                    <div className={`absolute -bottom-2 left-0 h-1 bg-[#c5a67c] rounded-full transition-all duration-1000 ${isAnimating ? 'w-0' : 'w-32'}`} />
                  </span>
                </h1>

                <p
                  className={`mt-10 text-sm md:text-base lg:text-lg text-slate-400/90 leading-relaxed font-light max-w-xl transition-all duration-700 delay-150 ${isAnimating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'}`}
                >
                  {currentText.subtitle}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-6 animate-reveal stagger-2">
                <Link
                  to="/portafolio"
                  className="px-12 py-5 bg-[#c5a67c] text-[#0f2a4a] font-bold text-xs uppercase tracking-[0.25em] rounded-sm flex items-center justify-center gap-3 hover:bg-[#b89765] transition-all shadow-xl hover:shadow-[#c5a67c]/30 active:scale-95"
                >
                  Nuestros Servicios
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/estrategia"
                  className="px-12 py-5 bg-transparent border border-white/20 text-white font-bold text-xs uppercase tracking-[0.25em] rounded-sm flex items-center justify-center hover:border-[#c5a67c]/50 hover:bg-white/5 transition-all"
                >
                  Solicitar Consultoría
                </Link>
              </div>
            </div>

            {/* Right: Dynamic Shield Visual */}
            <div className="hidden lg:flex justify-end pr-4 lg:pr-12">
              <div className="relative flex items-center justify-center w-[450px] h-[450px]">
                
                {/* Outer ring */}
                <div className={`absolute inset-0 border border-[#c5a67c]/10 rounded-full transition-all duration-1000 ${isAnimating ? 'scale-90 opacity-40' : 'scale-100 opacity-100'}`} />
                
                {/* Spinning ring with dot */}
                <div className="absolute inset-16 border border-[#c5a67c]/5 rounded-full animate-orbit">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#c5a67c] rounded-full shadow-[0_0_15px_#c5a67c]" />
                </div>

                {/* Central icon container */}
                <div className={`relative w-56 h-56 bg-[#0f2a4a]/40 backdrop-blur-2xl rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all duration-500 ${isAnimating ? 'scale-75 opacity-0 blur-md' : 'scale-100 opacity-100 blur-0'}`}>
                  {React.cloneElement(currentText.icon, { size: 84, strokeWidth: 1.1, className: 'text-[#c5a67c]' })}
                  <div className="absolute inset-0 rounded-full border border-[#c5a67c]/20 animate-pulse" />
                </div>

                {/* Status Panel */}
                <div className={`absolute -right-16 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-sm shadow-xl min-w-[140px] transition-all duration-500 ${isAnimating ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'}`}>
                  <div className="text-[10px] font-bold text-[#c5a67c] uppercase tracking-[0.25em] mb-2">Estatus</div>
                  <div className="text-white text-[12px] font-medium tracking-wide">{currentText.status}</div>
                  <div className="flex gap-1.5 pt-3">
                    {heroSlides.map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'bg-[#c5a67c] animate-pulse shadow-[0_0_8px_#c5a67c]' : 'bg-[#c5a67c]/20'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-10">
          <div className="flex gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => { setIsAnimating(true); setTimeout(() => { setCurrentSlide(index); setIsAnimating(false); }, 600); }}
                className={`h-1 transition-all duration-500 rounded-full ${currentSlide === index ? 'w-16 bg-[#c5a67c]' : 'w-6 bg-white/20'}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-white/60 font-medium tracking-[0.3em]">
              0{currentSlide + 1}
            </span>
            <div className="w-8 h-px bg-white/20" />
            <span className="text-[11px] text-white/20 font-medium tracking-[0.3em]">
              0{heroSlides.length}
            </span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 right-12 hidden md:flex items-center gap-6 rotate-90 origin-right translate-y-[-50%]">
          <span className="text-[10px] uppercase tracking-[0.6em] text-white/30 font-light">Scroll Down</span>
          <div className="w-20 h-px bg-gradient-to-r from-white/30 to-transparent" />
        </div>
      </section>

      {/* Brief Summary Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 grid md:grid-cols-3 gap-10">
        {[
          { icon: <Target className="text-[#c5a67c] w-8 h-8" />, title: "Misión", link: "/estrategia", text: "Optimizar procesos a través de tecnología de vanguardia y blindaje operativo." },
          { icon: <Building2 className="text-[#c5a67c] w-8 h-8" />, title: "Historia", link: "/historia", text: "Fundada en 2023 con raíces sólidas y una trayectoria intachable en Medellín." },
          { icon: <Users className="text-[#c5a67c] w-8 h-8" />, title: "Equipo", link: "/equipo", text: "Liderado por especialistas en alta gerencia, cumplimiento legal y tecnología." }
        ].map((item, idx) => (
          <Link key={idx} to={item.link} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#c5a67c]/30 transition-all group">
            <div className="bg-[#c5a67c]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4">{item.title}</h3>
            <p className="text-base text-slate-500 font-medium leading-relaxed">{item.text}</p>
            <div className="mt-8 flex items-center text-xs font-black text-[#c5a67c] uppercase tracking-widest group-hover:text-[#b89765]">
              Explorar <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Home;
