import React, { useState } from 'react';
import { ArrowUpRight, X, CheckCircle2 } from 'lucide-react';
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

      {/* --- Portfolio Modal (Enhanced and Sized Down) --- */}
      {selectedService && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity animate-in fade-in duration-300" onClick={() => setSelectedService(null)} />
          <div className="relative bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row transform transition-all animate-in zoom-in-95 duration-300">
            <button onClick={() => setSelectedService(null)} className="absolute top-6 right-6 z-20 bg-slate-100/80 backdrop-blur-sm p-3 rounded-full text-slate-900 hover:bg-emerald-600 hover:text-white transition-all shadow-sm active:scale-95">
              <X className="w-5 h-5" />
            </button>
            <div className="md:w-2/5 h-64 md:h-auto overflow-hidden hidden sm:block relative">
              <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                 <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/30">
                    {React.cloneElement(selectedService.icon, { className: 'w-6 h-6' })}
                 </div>
              </div>
            </div>
            <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto">
              <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-md text-[10px] font-bold uppercase tracking-widest border border-emerald-100 mb-6 inline-block shadow-sm">
                {selectedService.category}
              </span>
              <h2 className="text-3xl font-black text-slate-900 mb-8 leading-tight tracking-tight">{selectedService.title}</h2>
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Propuesta de Valor</h4>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">{selectedService.fullDescription}</p>
                </div>
                <div className="pt-8 border-t border-slate-100">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Entregables y Resultados</h4>
                  <ul className="grid sm:grid-cols-1 gap-4">
                    {selectedService.deliverables.map((item, idx) => (
                      <li key={idx} className="flex gap-4 text-sm text-slate-700 font-medium items-start group">
                        <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4">
                <button className="bg-slate-900 text-white px-8 py-3.5 rounded-xl font-bold uppercase tracking-widest text-[11px] hover:bg-emerald-600 transition-all shadow-md active:scale-95">
                  Iniciar Consultoría
                </button>
                <button className="px-8 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-bold uppercase tracking-widest text-[11px] hover:bg-slate-50 transition-all">
                  Ver Casos de Éxito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </main>
  );
};

export default Portfolio;
