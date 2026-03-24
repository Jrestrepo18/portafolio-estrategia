import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { services } from '../data/companyData';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedService, setSelectedService] = useState(null);

  const filters = ['Todos', 'Productos Principales', 'Productos Innovadores', 'Productos Complementarios', 'Servicios Asociados'];
  const filteredServices = activeFilter === 'Todos' ? services : services.filter(s => s.category === activeFilter);

  return (
    <main className="max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-16">
      
      {/* Header */}
      <div className="flex flex-col mb-16 gap-8 animate-reveal pb-12 border-b border-slate-200">
        <div className="max-w-3xl">
          <h2 className="text-[#c5a67c] font-bold uppercase tracking-[0.2em] text-[10px] mb-4 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#c5a67c]" /> Soluciones Estratégicas
          </h2>
          <h3 className="text-5xl md:text-6xl font-black text-[#0f2a4a] tracking-tight leading-[1.05]">
            Portafolio de <br/>Ingeniería de Valor.
          </h3>
        </div>
        <div className="flex flex-wrap items-center gap-2 pt-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 border ${
                activeFilter === filter 
                  ? 'bg-[#0f2a4a] text-white border-[#0f2a4a] shadow-lg scale-105' 
                  : 'bg-white text-slate-500 border-slate-200 hover:border-[#c5a67c] hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* High-End Editorial Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {filteredServices.map((service, idx) => (
          <div 
            key={service.id} 
            onClick={() => setSelectedService(service)}
            className="group cursor-pointer flex flex-col items-start animate-reveal"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="relative w-full h-80 lg:h-96 rounded-[2.5rem] overflow-hidden mb-8 bg-[#0f2a4a] shadow-sm border border-slate-100 group-hover:shadow-2xl transition-all duration-500">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[800ms] mix-blend-overlay md:mix-blend-normal ease-out" />
              <div className="absolute top-6 left-6">
                <span className="px-5 py-2.5 bg-white/95 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-slate-900 border border-white/20 shadow-sm">
                  {service.category}
                </span>
              </div>
              <div className="absolute bottom-6 right-6 w-16 h-16 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#c5a67c] shadow-2xl transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500 border border-white/30">
                <ArrowUpRight className="w-8 h-8" />
              </div>
            </div>
            
            <div className="w-full px-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#c5a67c]/10 text-[#c5a67c] flex items-center justify-center border border-[#c5a67c]/20 shadow-sm group-hover:scale-110 transition-transform">
                  {React.cloneElement(service.icon, { className: 'w-6 h-6' })}
                </div>
                <h4 className="text-3xl font-black text-[#0f2a4a] tracking-tight leading-none group-hover:text-[#c5a67c] transition-colors">{service.title}</h4>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed font-medium md:pr-10">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* --- Portfolio Modal (Premium) --- */}
      {selectedService && createPortal(
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-hidden font-sans">
          <div className="absolute inset-0 bg-[#0f2a4a]/60 backdrop-blur-xl" onClick={() => setSelectedService(null)} />
          
          <div className="relative bg-white rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            {/* Close Button */}
            <button onClick={() => setSelectedService(null)} className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-900 hover:bg-[#c5a67c] hover:text-[#0f2a4a] hover:border-[#c5a67c] transition-all shadow-md active:scale-95 flex items-center justify-center">
              <X className="w-5 h-5" />
            </button>
            
            {/* LEFT: Dark Image Panel */}
            <div className="md:w-[45%] h-72 md:h-auto overflow-hidden relative bg-[#0f2a4a] flex-shrink-0">
              <img src={selectedService.image} alt={selectedService.title} className="absolute inset-0 w-full h-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a4a] via-[#0f2a4a]/70 to-[#0f2a4a]/30" />
              
              <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-12">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 bg-[#c5a67c]/20 backdrop-blur-md text-[#c5a67c] border border-[#c5a67c]/30 px-4 py-2 rounded-lg w-fit mb-6">
                  {React.cloneElement(selectedService.icon, { className: 'w-4 h-4' })}
                  <span className="text-[9px] font-black uppercase tracking-[0.2em]">{selectedService.category}</span>
                </div>
                
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-8">{selectedService.title}</h2>
                
                {/* Bottom Badges */}
                <div className="flex flex-wrap gap-6 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a67c]" /> 5+ Años de Experiencia
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a67c]" /> Confidencialidad
                  </span>
                </div>
              </div>
            </div>
            
            {/* RIGHT: Content Panel */}
            <div className="md:w-[55%] flex flex-col overflow-y-auto">
              
              {/* Description */}
              <div className="p-10 md:p-12 pb-8">
                <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
                  <span className="w-6 h-[2px] bg-[#c5a67c]" /> Descripción del Servicio
                </h4>
                <p className="text-base text-slate-600 leading-relaxed font-medium">{selectedService.fullDescription}</p>
              </div>
              
              {/* Two Column: Alcance + Beneficios */}
              <div className="px-10 md:px-12 pb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Alcance Técnico */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-5 pb-3 border-b-2 border-[#c5a67c] w-fit">Alcance Técnico</h5>
                  <ul className="space-y-3">
                    {selectedService.deliverables.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-slate-600 font-medium items-start">
                        <span className="mt-2 w-1 h-1 rounded-full bg-slate-400 flex-shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Beneficios Directos */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-5 pb-3 border-b-2 border-[#c5a67c] w-fit">Beneficios Directos</h5>
                  <ul className="space-y-3">
                    {[
                      "Optimización de costos operativos",
                      "Cumplimiento normativo garantizado",
                      "Escalabilidad a largo plazo"
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-slate-700 font-bold items-start">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 text-[#c5a67c] flex-shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* CTA Footer */}
              <div className="mt-auto border-t border-slate-100 px-10 md:px-12 py-6 flex flex-wrap items-center justify-between gap-4 bg-slate-50/50">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#c5a67c] mb-1">Inversión Inteligente</p>
                  <p className="text-sm font-black text-slate-900 uppercase tracking-wide">Solicite su diagnóstico sin costo</p>
                </div>
                <button className="bg-[#0f2a4a] text-white px-8 py-3.5 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-[#c5a67c] hover:text-[#0f2a4a] transition-all shadow-lg hover:shadow-[#c5a67c]/25 active:scale-95 flex items-center gap-3">
                  Contactar Ahora <ArrowRight className="w-4 h-4" />
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

export default Portfolio;
