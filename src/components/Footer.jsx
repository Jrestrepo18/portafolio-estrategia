import React from 'react';
import { Target } from 'lucide-react';

const Footer = ({ team }) => {
  return (
    <footer className="bg-white border-t border-slate-200 py-16 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 p-16 opacity-[0.02] -rotate-12"><Target className="w-64 h-64" /></div>
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
        <div>
          <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
            <div className="bg-slate-900 p-2.5 rounded-xl shadow-md">
              <Target className="text-emerald-400 w-5 h-5" />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tighter">NEXUM<span className="text-emerald-500">.</span></span>
          </div>
          <p className="text-slate-500 text-xs font-bold leading-relaxed text-center md:text-left">
            &copy; 2026 NEXUM — Medellín, Colombia.<br/>
            Sociedad de Responsabilidad Limitada. <br/>
            <span className="text-emerald-600 font-black uppercase text-[9px] tracking-widest mt-3 inline-block">Consultoría Boutique de Ingeniería</span>
          </p>
        </div>
        <div className="flex gap-4">
          {team.map((m, i) => (
            <div key={i} className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-emerald-400 hover:-translate-y-1 transition-all cursor-pointer shadow-sm">
              {React.cloneElement(m.icon, { className: 'w-4 h-4' })}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center md:items-end gap-5">
          <button className="bg-slate-900 text-white px-8 py-3.5 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/30 transform active:scale-95">
            Descargar Dossier
          </button>
          <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
             Actualizado: Marzo 2026
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
