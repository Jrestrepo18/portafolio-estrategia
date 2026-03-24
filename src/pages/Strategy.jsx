import React from 'react';
import { Target, Eye, CheckCircle2, Workflow, Globe, Database, Briefcase, Rocket } from 'lucide-react';

const Strategy = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-12 py-24 space-y-24">
      
      {/* Mission/Vision Interactive */}
      <section className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-10 md:p-12 rounded-3xl border border-slate-100 shadow-sm group hover:shadow-xl transition-all relative overflow-hidden">
          <div className="absolute -bottom-6 -right-6 p-8 opacity-[0.03] text-emerald-600 group-hover:rotate-6 transition-transform"><Target className="w-48 h-48" /></div>
          <Target className="text-emerald-500 w-10 h-10 mb-8 group-hover:scale-110 transition-transform" />
          <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Nuestra Misión.</h3>
          <p className="text-slate-600 leading-relaxed text-lg font-medium">
            Desarrollar soluciones digitales innovadoras mediante el diseño y desarrollo de aplicaciones web y móviles que optimicen los procesos empresariales, generando valor real a través de la tecnología.
          </p>
        </div>
        <div className="bg-emerald-600 p-10 md:p-12 rounded-3xl shadow-[0_20px_40px_-10px_rgba(16,185,129,0.3)] group hover:shadow-emerald-500/40 transition-all relative overflow-hidden text-white">
          <div className="absolute -bottom-6 -right-6 p-8 opacity-10 group-hover:-rotate-6 transition-transform"><Eye className="w-48 h-48" /></div>
          <Eye className="text-white w-10 h-10 mb-8 group-hover:scale-110 transition-transform" />
          <h3 className="text-3xl font-black text-white mb-6 tracking-tight">Visión 2030.</h3>
          <p className="text-emerald-50 leading-relaxed text-lg font-medium">
            Ser una empresa reconocida internacionalmente en el desarrollo de software, destacándonos por nuestra innovación, calidad técnica y adaptabilidad a las nuevas olas tecnológicas.
          </p>
        </div>
      </section>

      {/* Strategy Matrix Section */}
      <section className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 text-white overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -mr-32 -mt-32 animate-pulse" />
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 relative z-10">
          <div className="space-y-16">
            <div className="space-y-8 group">
              <h3 className="text-3xl font-black flex items-center gap-4 text-emerald-400 tracking-tight">
                 Mercado Objetivo.
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Empresas pequeñas y medianas (PYMES)",
                  "Emprendedores digitales",
                  "Startups tecnológicas",
                  "Transformación corporativa digital"
                ].map((m, i) => (
                  <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-all">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50 flex-shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-300 leading-snug">{m}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-3xl font-black flex items-center gap-4 text-emerald-400 tracking-tight">
                 Ventaja Competitiva.
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Desarrollo 100% a medida",
                  "Stack tecnológico moderno",
                  "Soluciones integrales 360°",
                  "Adaptabilidad sectorial ágil"
                ].map((v, i) => (
                  <div key={i} className="flex gap-4 items-center group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:rotate-6 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 group-hover:text-white" />
                    </div>
                    <span className="text-base text-slate-300 font-bold group-hover:text-white transition-colors">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md space-y-8">
               <h3 className="text-xl font-black tracking-widest uppercase text-emerald-500">Operación & Tech</h3>
               <div className="space-y-6">
                 {[
                   { label: "Metodología", text: "Desarrollo ágil (Scrum / GitHub)", icon: <Workflow /> },
                   { label: "Sistemas", text: "Integración de APIs REST", icon: <Globe /> },
                   { label: "Datos", text: "Bases de datos SQL Modernas", icon: <Database /> },
                   { label: "Soporte", text: "Documentación Automática", icon: <Briefcase /> }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-5 items-center group">
                     <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm">
                       {React.cloneElement(item.icon, { className: 'w-4 h-4' })}
                     </div>
                     <div>
                       <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-500/70 mb-0.5">{item.label}</p>
                       <p className="text-sm font-bold text-slate-200">{item.text}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>

            <div className="bg-emerald-600 rounded-3xl p-8 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 transition-transform duration-1000"><Rocket className="w-24 h-24" /></div>
                <h3 className="text-lg font-black uppercase tracking-widest text-white mb-6 relative z-10">Proyección 2030</h3>
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  {[
                    "Liderazgo Local",
                    "Clientes Globales",
                    "Productos SaaS",
                    "Hub IT Medellín"
                  ].map((p, i) => (
                    <div key={i} className="p-4 bg-white/10 rounded-xl border border-white/10 text-center hover:bg-white/20 transition-all">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white">{p}</p>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Strategy;
