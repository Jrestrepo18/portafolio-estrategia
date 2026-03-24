import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { team } from '../data/companyData';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <main className="max-w-6xl mx-auto px-6 md:px-12 py-24">
      {/* Team Section */}
      <section className="animate-reveal">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-[#c5a67c] font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Capital Humano</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#0f2a4a] tracking-tight leading-tight">Nuestros Socios Fundadores.</h3>
        </div>
        
        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedMember(member)}
              className="text-center group p-8 rounded-3xl bg-white border border-slate-100 hover:border-[#c5a67c] hover:shadow-xl transition-all cursor-pointer relative overflow-hidden flex flex-col items-center"
            >
              <div className="absolute top-4 right-4 text-[#c5a67c] opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-4 h-4" />
              </div>
              <div className="w-28 h-28 bg-slate-50 rounded-3xl mb-6 flex items-center justify-center text-slate-400 group-hover:bg-[#0f2a4a] group-hover:text-[#c5a67c] transition-all shadow-sm border border-slate-100 group-hover:rotate-6">
                {React.cloneElement(member.icon, { className: 'w-8 h-8' })}
              </div>
              <h4 className="text-lg font-black text-[#0f2a4a] mb-2 leading-tight tracking-tight">{member.name}</h4>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#c5a67c] mb-6">{member.role}</p>
              
              <div className="mt-auto pt-4 border-t border-slate-100 w-full text-center">
                 <span className="text-[9px] font-bold text-slate-400 group-hover:text-[#c5a67c] uppercase tracking-widest transition-colors">
                    Ver Perfil & Funciones
                 </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Team Member Modal (Portal) --- */}
      {selectedMember && createPortal(
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-hidden font-sans">
          <div className="absolute inset-0 bg-[#0f2a4a]/60 backdrop-blur-xl" onClick={() => setSelectedMember(null)} />
          
          <div className="relative bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col">
            
            {/* Close Button */}
            <button onClick={() => setSelectedMember(null)} className="absolute top-6 right-6 z-30 bg-slate-50/20 backdrop-blur-md border border-white/10 p-3 rounded-full text-white hover:bg-[#c5a67c] hover:text-[#0f2a4a] transition-all shadow-sm active:scale-95">
              <X className="w-5 h-5" />
            </button>
            
            {/* Header Content */}
            <div className="p-10 bg-[#0f2a4a] text-white relative overflow-hidden">
               <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#c5a67c]/20 rounded-full blur-3xl z-0" />
               <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left">
                 <div className="w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-[#c5a67c] shadow-xl flex-shrink-0">
                    {React.cloneElement(selectedMember.icon, { className: 'w-10 h-10' })}
                 </div>
                 <div>
                   <span className="inline-flex items-center space-x-2 bg-[#c5a67c]/20 text-[#c5a67c] border border-[#c5a67c]/30 px-3 py-1 rounded-md mb-4 text-[9px] font-black uppercase tracking-[0.2em] shadow-sm">
                     Socio Fundador
                   </span>
                   <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight mb-2">{selectedMember.name}</h2>
                   <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c5a67c]">{selectedMember.role}</p>
                 </div>
               </div>
            </div>
            
            {/* Body Content */}
            <div className="p-10 overflow-y-auto bg-[#f8fafc]">
              <div className="space-y-6">
                 <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-3">
                   <span className="w-6 h-px bg-slate-300"></span> Funciones y Responsabilidades
                 </h4>
                 
                 <ul className="grid sm:grid-cols-1 gap-4">
                    {selectedMember.functions.map((func, idx) => (
                      <li key={idx} className="flex gap-4 text-base text-slate-700 font-medium items-start bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-[#c5a67c]/30 transition-colors">
                        <div className="w-6 h-6 rounded-lg bg-[#c5a67c]/10 text-[#c5a67c] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="leading-snug">{func}</span>
                      </li>
                    ))}
                  </ul>
              </div>
              
              <div className="mt-10 pt-8 border-t border-slate-200/60 flex flex-wrap gap-4">
                <button onClick={() => setSelectedMember(null)} className="w-full bg-[#0f2a4a] text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[11px] hover:bg-[#c5a67c] hover:text-[#0f2a4a] transition-all shadow-md active:scale-95 text-center">
                  Cerrar Perfil
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </main>
  );
};

export default Team;
