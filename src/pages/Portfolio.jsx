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
    <main className="max-w-6xl mx-auto px-6 md:px-12 py-24 space-y-16">
      
      {/* Header */}
      <div className="flex flex-col mb-12 gap-8 animate-reveal">
        <div className="max-w-2xl">
          <h2 className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 flex items-center gap-3">
            <span className="w-6 h-[2px] bg-emerald-600" /> Soluciones Estratégicas
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">Portafolio de <br/>Ingeniería de Valor.</h3>
        </div>
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-slate-900 text-white shadow-md scale-105' 
                  : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200 hover:text-slate-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => (
          <div 
            key={service.id} 
            onClick={() => setSelectedService(service)}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-md text-[9px] font-bold uppercase tracking-widest text-slate-900 border border-slate-100 shadow-sm">
                  {service.category}
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow relative">
              <div className="absolute -top-6 right-8 w-12 h-12 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 z-10">
                {React.cloneElement(service.icon, { className: 'w-5 h-5' })}
              </div>
              <h4 className="text-xl font-black text-slate-900 mb-3 pr-10 tracking-tight leading-snug">{service.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-medium">{service.description}</p>
              <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-900 group-hover:text-emerald-600 transition-colors mt-auto">
                Explorar Servicio <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Portfolio Modal (Premium) --- */}
      {selectedService && createPortal(
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-hidden font-sans">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl transition-opacity animate-in fade-in duration-500" onClick={() => setSelectedService(null)} />
          
          <div className="relative bg-white rounded-[2.5rem] w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row transform transition-all animate-in zoom-in-95 duration-500">
            
            {/* Close Button */}
            <button onClick={() => setSelectedService(null)} className="absolute top-8 right-8 z-30 bg-white/50 backdrop-blur-md p-4 rounded-full text-slate-900 hover:bg-emerald-600 hover:text-white transition-all shadow-lg active:scale-95 border border-white/20">
              <X className="w-6 h-6" />
            </button>
            
            {/* Image Side */}
            <div className="md:w-2/5 h-64 md:h-auto overflow-hidden hidden md:block relative bg-slate-900">
              <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover opacity-70 hover:opacity-90 mix-blend-overlay hover:scale-105 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-12">
                 <div className="w-16 h-16 bg-emerald-500/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-emerald-400 border border-emerald-500/30 mb-6 shadow-2xl">
                    {React.cloneElement(selectedService.icon, { className: 'w-8 h-8' })}
                 </div>
                 <h3 className="text-3xl font-black text-white leading-tight">{selectedService.title}</h3>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="md:w-3/5 p-10 md:p-16 overflow-y-auto bg-[#f8fafc]">
              <div className="inline-flex items-center space-x-3 bg-emerald-50 text-emerald-700 px-5 py-2.5 rounded-full border border-emerald-100 shadow-sm mb-10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{selectedService.category}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 leading-[1.1] tracking-tighter">{selectedService.title}</h2>
              
              <div className="space-y-10">
                <div>
                  <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
                    <span className="w-6 h-px bg-slate-300"></span> Propuesta de Valor
                  </h4>
                  <p className="text-lg text-slate-600 leading-relaxed font-medium">{selectedService.fullDescription}</p>
                </div>
                
                <div className="pt-10 border-t border-slate-200/60">
                  <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                    <span className="w-6 h-px bg-slate-300"></span> Entregables y Resultados
                  </h4>
                  <ul className="grid sm:grid-cols-1 gap-5">
                    {selectedService.deliverables.map((item, idx) => (
                      <li key={idx} className="flex gap-4 text-base text-slate-700 font-bold items-start group bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-emerald-200 transition-colors">
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="leading-snug mt-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-14 pt-10 border-t border-slate-200/60 flex flex-wrap gap-5">
                <button className="bg-slate-900 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-emerald-600 transition-all shadow-xl hover:shadow-emerald-500/30 active:scale-95 flex items-center gap-3">
                  Iniciar Consultoría <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-10 py-4 rounded-xl border-2 border-slate-200 text-slate-700 font-black uppercase tracking-widest text-xs hover:bg-white hover:border-slate-300 transition-all shadow-sm">
                  Casos de Éxito
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
