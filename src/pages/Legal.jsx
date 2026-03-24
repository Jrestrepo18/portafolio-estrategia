import React from 'react';
import { Scale, Coins } from 'lucide-react';

const Legal = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-12 py-24 space-y-16">
      
      {/* Legal & Capital Matrix */}
      <section className="grid lg:grid-cols-2 gap-8 animate-reveal">
        <div className="bg-white border border-slate-200 p-10 md:p-12 rounded-[2.5rem] space-y-8 shadow-sm hover:shadow-xl transition-all h-full text-left">
          <div className="flex items-center gap-5">
            <div className="bg-[#0f2a4a] text-white p-4 rounded-2xl shadow-md">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">Perfil Legal</h4>
              <p className="text-xl font-black text-[#0f2a4a] leading-tight">Naturaleza Jurídica</p>
            </div>
          </div>
          <ul className="space-y-5">
            {[
              "Responsabilidad limitada al monto de aportes",
              "Control interno robusto y centralizado",
              "Flexibilidad en la toma de decisiones",
              "Estructura óptima para escalamiento"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-slate-600 font-medium text-base leading-snug">
                <div className="w-2 h-2 rounded-full bg-[#c5a67c] mt-1.5 shadow-sm shadow-[#c5a67c]/40" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#0f2a4a] text-white p-10 md:p-12 rounded-[2.5rem] space-y-8 shadow-xl relative overflow-hidden group h-full">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Coins className="w-40 h-40" /></div>
          <div className="flex items-center gap-5 relative z-10">
            <div className="bg-[#c5a67c] text-[#0f2a4a] p-4 rounded-2xl shadow-lg shadow-[#c5a67c]/20">
              <Coins className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-slate-200/50 uppercase tracking-widest leading-none mb-1.5">Estructura de Capital</h4>
              <p className="text-xl font-black text-white leading-tight">Solidez Financiera</p>
            </div>
          </div>
          <div className="space-y-5 relative z-10">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex justify-between items-center group-hover:bg-white/10 transition-all">
              <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Capital Total</span>
              <span className="text-2xl font-black text-[#c5a67c] leading-none">$100.000.000</span>
            </div>
            <div className="bg-[#c5a67c]/10 p-6 rounded-2xl border border-[#c5a67c]/30 flex justify-between items-center transform md:scale-105 shadow-md">
              <span className="text-[#c5a67c]/80 font-bold uppercase text-[10px] tracking-widest">Aporte por Socio</span>
              <span className="text-2xl font-black text-white leading-none">$25.000.000</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Legal;
