import React from 'react';
import { team } from '../data/companyData';

const Team = () => {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-12 py-24">
      {/* Team Section */}
      <section className="animate-reveal">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4">Capital Humano</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">Nuestros Socios Fundadores.</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="text-center group p-8 rounded-3xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all">
              <div className="w-28 h-28 bg-white rounded-3xl mx-auto mb-8 flex items-center justify-center text-slate-300 group-hover:bg-slate-900 group-hover:text-emerald-400 transition-all shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)] border border-slate-50 group-hover:rotate-6">
                {React.cloneElement(member.icon, { className: 'w-8 h-8' })}
              </div>
              <h4 className="text-lg font-black text-slate-900 mb-2 leading-tight tracking-tight">{member.name}</h4>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-emerald-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Team;
