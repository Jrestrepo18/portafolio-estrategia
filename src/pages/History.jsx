import React from 'react';
import { Puzzle, Globe, CheckCircle2, History as HistoryIcon } from 'lucide-react';
import { valuesVerbatim } from '../data/companyData';

const History = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 py-32 space-y-40">
      <section className="grid lg:grid-cols-[1fr_400px] gap-20 items-start">
        <div className="space-y-12 animate-reveal">
          <div className="space-y-6">
            <div className="text-emerald-600 font-black uppercase tracking-widest text-xs flex items-center gap-3">
              <span className="w-10 h-[2px] bg-emerald-600" /> Trayectoria y Origen
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">Historia de <br />Transformación.</h2>
          </div>

          <div className="space-y-8 text-slate-600 leading-[1.8] text-lg lg:text-xl font-medium">
            <p>
              <strong>NEXUM</strong> es una empresa colombiana fundada en el año <strong>2023</strong> en la ciudad de Medellín por los socios Isabel Rodríguez Restrepo, María Camila Moreno Cataño, Jerónimo Cardona Restrepo y Ángel David Mosquera Palacios, con el propósito de ofrecer soluciones tecnológicas innovadoras en el área de desarrollo web y aplicaciones digitales.
            </p>
            <p>
              La idea de negocio surge a partir del interés común de sus fundadores por la tecnología, el desarrollo de software y el diseño digital, identificando la creciente necesidad de las empresas de contar con plataformas digitales eficientes, modernas y funcionales.
            </p>
            <div className="bg-white p-10 rounded-[3rem] border-l-8 border-emerald-500 shadow-xl shadow-emerald-500/5 italic text-slate-800 relative overflow-hidden group">
              <HistoryIcon className="absolute -right-4 -top-4 w-32 h-32 opacity-[0.03] group-hover:scale-110 transition-transform" />
              <p className="relative z-10 text-2xl font-bold">"En sus inicios, la empresa comenzó como un emprendimiento enfocado en el desarrollo de aplicaciones móviles y sistemas administrativos utilizando metodologías ágiles."</p>
            </div>
            <p>
              Con el paso del tiempo, la empresa ha consolidado su portafolio de servicios, ampliando sus capacidades en desarrollo Full Stack, diseño UI/UX y gestión de bases de datos, logrando posicionarse como una alternativa confiable para empresas que buscan transformación digital efectiva.
            </p>
            <p>
              Actualmente, <strong>NEXUM</strong> se proyecta como una empresa en crecimiento exponencial, con visión de expansión a mercados nacionales e internacionales, apoyándose en la innovación constante y el aprendizaje continuo.
            </p>
          </div>
        </div>

        <div className="sticky top-40 space-y-10 animate-reveal stagger-2">
          <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <Puzzle className="text-emerald-400 w-12 h-12 mb-8" />
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 border-b border-white/10 pb-4">Objeto Social (Foco)</h4>
              <p className="text-slate-200 font-bold leading-relaxed text-lg italic">
                "El desarrollo, diseño, implementación y comercialización de software; consultoría tecnológica; y gestión de sistemas informáticos para empresas a nivel internacional."
              </p>
            </div>
            <Globe className="absolute -bottom-16 -right-16 w-48 h-48 text-white/5 opacity-50 group-hover:rotate-45 transition-transform duration-1000" />
          </div>

          <div className="bg-emerald-50 p-10 rounded-[2.5rem] border border-emerald-100">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-emerald-800/50 mb-8 border-b border-emerald-200/50 pb-4">Valores Corporativos</h4>
            <ul className="space-y-5">
              {valuesVerbatim.map((v, i) => (
                <li key={i} className="flex items-center gap-4 text-emerald-900">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span className="text-base font-black tracking-tight">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default History;
