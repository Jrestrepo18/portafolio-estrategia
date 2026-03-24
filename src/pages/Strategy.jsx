import React from 'react';
import { Target, Eye, TrendingUp, Cpu, Award } from 'lucide-react';

const Strategy = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-24">
      
      {/* Header Section */}
      <section className="max-w-4xl animate-reveal">
        <h2 className="text-[#0f2a4a] font-bold uppercase tracking-[0.2em] text-[10px] mb-4 flex items-center gap-3">
          <span className="w-6 h-[2px] bg-[#c5a67c]" /> Plan Estratégico Corporativo
        </h2>
        <h3 className="text-5xl md:text-6xl font-black text-[#0f2a4a] tracking-tight leading-[1.1]">
          Ejes de Ingeniería <br />y <span className="text-[#c5a67c]">Visión.</span>
        </h3>
        <p className="text-lg text-slate-500 font-medium leading-relaxed mt-8 max-w-2xl">
          Nuestro enfoque combina rigor analítico, metodologías ágiles y un profundo entendimiento de la vanguardia tecnológica para asegurar la escalabilidad de cada solución en el tiempo.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-12 lg:gap-20 animate-reveal border-t border-slate-200 py-16">
        <div className="relative group">
          <div className="absolute -left-6 -top-8 text-[140px] leading-none font-black text-slate-50 opacity-60 z-0 group-hover:-translate-y-2 transition-transform duration-500" />
          <div className="relative z-10 space-y-8">
            <div className="w-14 h-14 rounded-2xl bg-[#0f2a4a] flex items-center justify-center shadow-lg border border-slate-800">
              <Target className="w-6 h-6 text-[#c5a67c]" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-[#0f2a4a] tracking-tight mb-4">Nuestra Misión</h3>
              <p className="text-slate-600 leading-relaxed text-lg font-medium pr-4">
                Desarrollar soluciones digitales innovadoras mediante el diseño y desarrollo de aplicaciones web y móviles que optimicen los procesos empresariales, generando valor real a través de la tecnología.
              </p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -left-6 -top-8 text-[140px] leading-none font-black text-[#c5a67c]/10 opacity-40 z-0 group-hover:-translate-y-2 transition-transform duration-500" />
          <div className="relative z-10 space-y-8">
            <div className="w-14 h-14 rounded-2xl bg-[#c5a67c] flex items-center justify-center shadow-lg shadow-[#c5a67c]/30 border border-[#b89765]">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-black text-[#0f2a4a] tracking-tight mb-4">Visión 2030</h3>
              <p className="text-slate-600 leading-relaxed text-lg font-medium pr-4">
                Ser una empresa reconocida internacionalmente en el desarrollo de software, destacándonos por nuestra innovación, calidad técnica y adaptabilidad a las nuevas olas tecnológicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="animate-reveal space-y-16">
        <div className="text-left w-full border-t border-slate-200 pt-16">
          <h3 className="text-3xl font-black text-[#0f2a4a] tracking-tight mb-4">Pilares de Ejecución</h3>
          <p className="text-slate-500 font-medium text-lg">Las dimensiones estratégicas que sostienen nuestra ventaja competitiva en el sector tecnológico.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Market */}
          <div className="bg-white p-10 rounded-[2rem] border border-slate-200 hover:border-[#c5a67c] transition-colors shadow-sm group relative overflow-hidden">
            <TrendingUp className="w-8 h-8 text-[#c5a67c] mb-8 group-hover:scale-110 transition-transform relative z-10" />
            <h4 className="text-xl font-black text-[#0f2a4a] mb-8 relative z-10">Mercado Objetivo</h4>
            <ul className="space-y-5 relative z-10">
              {[
                "Empresas PYMES.",
                "Emprendedores digitales.",
                "Startups tecnológicas.",
                "Transformación corporativa."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-slate-600 text-sm font-bold items-start leading-snug">
                  <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-slate-300 flex-shrink-0 group-hover:bg-[#c5a67c] transition-colors" />
                  {item}
                </li>
              ))}
            </ul>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-50 rounded-full blur-2xl group-hover:bg-[#c5a67c]/10 transition-colors z-0" />
          </div>

          {/* Advantage */}
          <div className="bg-[#0f2a4a] p-10 rounded-[2rem] border border-white/5 hover:border-[#c5a67c] transition-colors shadow-2xl group relative overflow-hidden text-white">
            <Award className="w-8 h-8 text-[#c5a67c] mb-8 group-hover:scale-110 transition-transform relative z-10" />
            <h4 className="text-xl font-black text-white mb-8 relative z-10">Ventaja Competitiva</h4>
            <ul className="space-y-5 relative z-10">
              {[
                "Desarrollo 100% a medida.",
                "Stack tecnológico moderno.",
                "Soluciones integrales 360°.",
                "Adaptabilidad sectorial ágil."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-slate-300 text-sm font-bold items-start leading-snug">
                  <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#c5a67c] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#c5a67c]/10 rounded-full blur-2xl group-hover:bg-[#c5a67c]/20 transition-colors z-0" />
          </div>

          {/* Operation */}
          <div className="bg-[#c5a67c]/10 p-10 rounded-[2rem] border border-[#c5a67c]/20 hover:border-[#c5a67c] hover:bg-[#c5a67c]/15 transition-colors shadow-sm group relative overflow-hidden">
            <Cpu className="w-8 h-8 text-[#c5a67c] mb-8 group-hover:scale-110 transition-transform relative z-10" />
            <h4 className="text-xl font-black text-slate-900 mb-8 relative z-10">Operación & Tech</h4>
            <ul className="space-y-6 relative z-10">
              {[
                { label: "Metodología", text: "Scrum / GitHub" },
                { label: "Sistemas", text: "Integración de APIs REST" },
                { label: "Datos", text: "Bases de SQL Modernas" },
                { label: "Soporte", text: "Documentación Automática" }
              ].map((item, i) => (
                <li key={i} className="flex flex-col gap-1.5">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#0f2a4a]/40 leading-none">{item.label}</span>
                  <span className="text-slate-800 text-sm font-bold leading-none">{item.text}</span>
                </li>
              ))}
            </ul>
             <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white rounded-full blur-2xl z-0" />
          </div>
        </div>
      </section>

    </main>
  );
};

export default Strategy;
