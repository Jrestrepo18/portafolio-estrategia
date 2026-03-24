import React from 'react';
import { services, team, valuesVerbatim } from '../data/companyData';
import logo from '../assets/logo.png';

const DossierTemplate = ({ dossierRef }) => {
  return (
    <div className="absolute left-[-9999px] top-0">
      <div 
        ref={dossierRef} 
        className="w-[800px] bg-white font-sans text-slate-900"
        style={{ minHeight: '1131px' }} // Approx A4 height
      >
        {/* PAGE 1: COVER */}
        <div className="h-[1131px] bg-[#0f2a4a] flex flex-col items-center justify-center p-20 text-center relative overflow-hidden page-break">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a67c]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c5a67c]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 space-y-12">
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] inline-block border border-white/10 shadow-2xl">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-32 w-auto [filter:invert(1)_hue-rotate(180deg)_brightness(1.5)_saturate(1.5)] mix-blend-screen" 
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-[#c5a67c] text-6xl font-black tracking-tighter uppercase leading-none">
                Dossier<br />Corporativo
              </h1>
              <div className="h-1 w-24 bg-[#c5a67c] mx-auto rounded-full" />
              <p className="text-white/60 text-xl font-bold tracking-[0.3em] uppercase">2026 • Estrategia & Valor</p>
            </div>
          </div>

          <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
            <span>Medellín</span>
            <span>•</span>
            <span>Consultoría Boutique</span>
            <span>•</span>
            <span>Ingeniería</span>
          </div>
        </div>

        {/* PAGE 2: CORPORATE PROFILE */}
        <div className="h-[1131px] bg-white p-20 flex flex-col page-break">
          <div className="border-b-2 border-[#0f2a4a] pb-6 mb-16">
            <h2 className="text-4xl font-black text-[#0f2a4a] uppercase tracking-tight">Perfil Corporativo</h2>
          </div>

          <div className="grid grid-cols-2 gap-16 flex-1">
            <div className="space-y-10">
              <section className="space-y-4">
                <h3 className="text-[#c5a67c] text-xs font-black uppercase tracking-widest">Nuestra Misión</h3>
                <p className="text-lg text-slate-600 font-medium leading-relaxed italic">
                  "Desarrollar soluciones digitales innovadoras mediante el diseño y desarrollo de aplicaciones web y móviles que optimicen los procesos empresariales, generando valor real a través de la tecnología."
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-[#c5a67c] text-xs font-black uppercase tracking-widest">Visión 2030</h3>
                <p className="text-lg text-slate-600 font-medium leading-relaxed">
                  Ser una empresa reconocida internacionalmente en el desarrollo de software, destacándonos por nuestra innovación, calidad técnica y adaptabilidad a las nuevas olas tecnológicas.
                </p>
              </section>

              <section className="space-y-4 pt-10">
                <h3 className="text-[#c5a67c] text-xs font-black uppercase tracking-widest">Valores Centrales</h3>
                <ul className="grid grid-cols-2 gap-y-3">
                  {valuesVerbatim.map((v, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-800 font-bold text-sm">
                      <span className="w-1.5 h-1.5 bg-[#c5a67c] rounded-full" /> {v}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="bg-[#0f2a4a] text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden h-fit">
              <div className="relative z-10 space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c5a67c] border-b border-white/10 pb-4">Trayectoria Nexum</h4>
                <p className="text-sm leading-relaxed text-slate-300 font-medium">
                  Nacida como una respuesta a la necesidad de blindaje y eficiencia tecnológica en el mercado latinoamericano, NEXUM ha evolucionado de un taller de ingeniería a una consultoría boutique de alto impacto.
                </p>
                <div className="pt-6 space-y-4">
                  <div className="flex justify-between items-end border-b border-white/5 pb-2">
                    <span className="text-[9px] font-bold uppercase text-slate-500">Proyectos</span>
                    <span className="text-2xl font-black text-[#c5a67c]">150+</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/5 pb-2">
                    <span className="text-[9px] font-bold uppercase text-slate-500">Satisfacción</span>
                    <span className="text-2xl font-black text-[#c5a67c]">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-10 border-t border-slate-100 flex justify-between text-[8px] font-black uppercase tracking-widest text-slate-400">
            <span>NEXUM Strategic Systems</span>
            <span>Página 02</span>
          </div>
        </div>

        {/* PAGE 3: PORTFOLIO OF SERVICES */}
        <div className="min-h-[1131px] bg-[#f8fafc] p-20 flex flex-col page-break">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-[#0f2a4a] uppercase tracking-tight border-b-2 border-[#c5a67c] inline-block pb-2">Portafolio Especializado</h2>
            <p className="text-slate-500 mt-4 font-bold text-sm tracking-widest uppercase">Consultoría de Ingeniería de Valor</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0f2a4a] text-[#c5a67c] flex items-center justify-center">
                    {React.cloneElement(s.icon, { size: 20 })}
                  </div>
                  <h4 className="text-lg font-black text-[#0f2a4a] leading-tight">{s.title}</h4>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed flex-1 mb-6">
                  {s.description}
                </p>
                <div className="space-y-2">
                  {s.deliverables.slice(0, 2).map((d, j) => (
                    <div key={j} className="flex gap-2 text-[10px] text-slate-800 font-bold items-start">
                      <span className="w-1 h-1 bg-[#c5a67c] rounded-full mt-1.5 flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-auto pt-10 flex justify-between text-[8px] font-black uppercase tracking-widest text-slate-400">
            <span>Servicios de Consultoría</span>
            <span>Página 03</span>
          </div>
        </div>

        {/* PAGE 4: TEAM & CLOSING */}
        <div className="h-[1131px] bg-white p-20 flex flex-col page-break">
          <div className="border-b-2 border-[#0f2a4a] pb-6 mb-16">
            <h2 className="text-4xl font-black text-[#0f2a4a] uppercase tracking-tight">Equipo Directivo</h2>
          </div>

          <div className="grid grid-cols-2 gap-10 mb-20">
            {team.map((m, i) => (
              <div key={i} className="flex gap-6 items-center">
                <div className="w-20 h-20 bg-[#0f2a4a] rounded-[2rem] flex items-center justify-center text-[#c5a67c] shadow-lg flex-shrink-0">
                  {React.cloneElement(m.icon, { size: 32 })}
                </div>
                <div>
                  <h4 className="text-lg font-black text-[#0f2a4a] leading-tight">{m.name}</h4>
                  <p className="text-[10px] font-bold text-[#c5a67c] uppercase tracking-widest">{m.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#f1f5f9] p-12 rounded-[3rem] border border-slate-200 mt-auto">
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-[#0f2a4a]">Contacto Directo</h3>
                <div className="space-y-3">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Oficina Central</div>
                  <p className="text-slate-900 font-black text-sm">Medellín, Colombia</p>
                  <p className="text-slate-500 font-medium text-xs">Milla de Oro, El Poblado</p>
                </div>
              </div>
              <div className="flex flex-col justify-end space-y-4">
                <p className="text-[#0f2a4a] font-black text-xl">www.nexum.com.co</p>
                <div className="h-px bg-slate-300 w-full" />
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">© 2026 NEXUM Strategic Consulting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DossierTemplate;
