import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, History, Scale, Coins, Target, Eye, Users, Gem, Workflow, Rocket } from 'lucide-react';
import { valuesVerbatim, services, team } from '../data/companyData';

const PresentationOverlay = ({ currentSlide, nextSlide, prevSlide, onClose }) => {
  return (
    <div className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center p-8 overflow-hidden animate-in fade-in duration-500">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 h-1.5 bg-emerald-500 transition-all duration-300 z-[1010]" style={{ width: `${((currentSlide + 1) / 7) * 100}%` }} />
      
      {/* Slide Controls */}
      <div className="absolute bottom-6 left-6 flex items-center gap-3 z-[1010]">
          <button 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
            className={`p-3 rounded-xl border border-slate-200 transition-all ${currentSlide === 0 ? 'opacity-30' : 'hover:bg-slate-50 shadow-sm active:scale-95'}`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide} 
            className={`p-3 rounded-xl bg-slate-900 text-white transition-all ${currentSlide === 6 ? 'opacity-30' : 'hover:bg-emerald-600 shadow-md active:scale-95'}`}
          >
            {currentSlide === 6 ? <CheckCircle2 className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
          </button>
      </div>

      <div className="absolute bottom-6 right-6 flex items-center gap-5 z-[1010]">
          <div className="text-right">
            <p className="text-[9px] font-bold text-slate-400 tracking-[0.2em] uppercase">Diapositiva</p>
            <p className="text-xl font-black text-slate-900 leading-tight">{currentSlide + 1}<span className="text-slate-300">/7</span></p>
          </div>
          <button 
            onClick={onClose}
            className="bg-red-50 text-red-600 px-6 py-3 rounded-xl font-bold text-[10px] uppercase tracking-wider hover:bg-red-100 transition-colors"
          >
            Finalizar
          </button>
      </div>

      {/* Slide Content Area */}
      <div className="w-full max-w-5xl h-full flex items-center justify-center animate-in zoom-in-95 duration-500">
         {currentSlide === 0 && (
           <div className="text-center space-y-6 max-w-3xl">
             <div className="bg-slate-900 text-white px-5 py-2 rounded-full inline-block text-[10px] font-bold tracking-widest">BIENVENIDOS — NEXUM</div>
             <h2 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.05]">Arquitectos de <br/> <span className="text-emerald-500">Valor Digital.</span></h2>
             <p className="text-lg text-slate-500 font-medium pt-2">Presentación de Planeación Estratégica 2023-2030</p>
           </div>
         )}
         {currentSlide === 1 && (
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
               <h3 className="text-5xl font-black text-slate-900 tracking-tight">Historia y Origen.</h3>
               <div className="space-y-4 text-slate-600 leading-relaxed font-medium text-base md:text-lg">
                 <p>**Fundada en 2023** en Medellín por 4 socios apasionados por la innovación.</p>
                 <p>Nace de la necesidad de plataformas digitales eficientes y modernas en el mercado colombiano.</p>
                 <p>Ha evolucionado de un emprendimiento móvil a una consultora de desarrollo Full-Stack confiable.</p>
               </div>
             </div>
             <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 shadow-sm">
                <History className="w-16 h-16 text-emerald-500 mb-6" />
                <p className="text-xl font-black text-slate-900 italic leading-snug">"Consolidando el futuro digital desde el corazón de la innovación."</p>
             </div>
           </div>
         )}
         {currentSlide === 2 && (
           <div className="grid lg:grid-cols-2 gap-8 w-full">
              <div className="bg-slate-900 text-white p-10 rounded-3xl space-y-6 shadow-xl">
                 <Scale className="w-12 h-12 text-emerald-400" />
                 <h4 className="text-4xl font-black tracking-tight">Naturaleza Jurídica</h4>
                 <p className="text-lg font-bold opacity-80 leading-snug">Sociedad de Responsabilidad Limitada (Ltda.)</p>
                 <ul className="space-y-3 text-emerald-100/70 font-medium text-sm pt-4">
                    <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Responsabilidad limitada a aportes</li>
                    <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Control administrativo flexible</li>
                    <li className="flex gap-2 items-center"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Gestión centralizada</li>
                 </ul>
              </div>
              <div className="bg-emerald-500 text-white p-10 rounded-3xl space-y-6 shadow-xl flex flex-col justify-center">
                 <Coins className="w-12 h-12 text-white" />
                 <h4 className="text-4xl font-black tracking-tight">Estructura de Capital</h4>
                 <div className="space-y-5 pt-4">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest opacity-80">Capital Social</p>
                      <p className="text-4xl font-black">$100.000.000</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest opacity-80">Aporte por Socio</p>
                      <p className="text-3xl font-black text-emerald-100">$25.000.000</p>
                    </div>
                 </div>
              </div>
           </div>
         )}
         {currentSlide === 3 && (
           <div className="grid lg:grid-cols-[1fr_300px] gap-12 w-full">
              <div className="space-y-12">
                 <div className="space-y-4">
                   <h3 className="text-5xl font-black text-slate-900 tracking-tight flex items-center gap-4"><Target className="text-emerald-500 w-10 h-10" /> Misión</h3>
                   <p className="text-lg text-slate-600 font-medium leading-relaxed">Desarrollar soluciones digitales innovadoras que optimicen procesos empresariales con tecnología de vanguardia.</p>
                 </div>
                 <div className="space-y-4">
                   <h3 className="text-5xl font-black text-slate-900 tracking-tight flex items-center gap-4"><Eye className="text-emerald-500 w-10 h-10" /> Visión 2030</h3>
                   <p className="text-lg text-slate-600 font-medium leading-relaxed">Ser el referente internacional en desarrollo de software, destacando por calidad, innovación y adaptabilidad.</p>
                 </div>
              </div>
              <div className="bg-slate-900 text-white p-8 rounded-3xl flex flex-col justify-center gap-6 shadow-lg">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mb-2 border-b border-white/10 pb-3">Valores NEXUM</h4>
                {valuesVerbatim.slice(0, 5).map((v, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold tracking-tight">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" /> {v}
                  </div>
                ))}
              </div>
           </div>
         )}
         {currentSlide === 4 && (
            <div className="w-full space-y-10 text-center max-w-4xl">
              <h3 className="text-5xl font-black text-slate-900 tracking-tight">Estrategia de Mercado</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: <Users />, label: "Target", desc: "PYMES & Startups" },
                  { icon: <Gem />, label: "Valor", desc: "Desarrollo a medida" },
                  { icon: <Workflow />, label: "Método", desc: "Agile / Scrum" },
                  { icon: <Rocket />, label: "Visión", desc: "Expansión Global" }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 transition-all group shadow-sm text-center">
                     <div className="w-12 h-12 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center text-slate-900 group-hover:bg-emerald-600 group-hover:text-white shadow-md transition-colors">
                       {React.cloneElement(item.icon, { className: 'w-6 h-6' })}
                     </div>
                     <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                     <p className="text-sm font-black text-slate-900 leading-tight">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
         )}
         {currentSlide === 5 && (
           <div className="w-full space-y-10 max-w-5xl">
             <div className="text-center">
               <h3 className="text-5xl font-black text-slate-900 tracking-tight">Portafolio Estratégico</h3>
               <p className="text-emerald-600 font-bold mt-3 tracking-widest uppercase text-[10px]">Ingeniería de Valor 360°</p>
             </div>
             <div className="grid md:grid-cols-3 gap-6">
               {services.slice(0, 3).map((s, i) => (
                 <div key={i} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm space-y-4 hover:shadow-lg transition-all">
                   <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-2">
                     {React.cloneElement(s.icon, { className: 'w-6 h-6' })}
                   </div>
                   <h4 className="text-xl font-black text-slate-900 leading-tight">{s.title}</h4>
                   <p className="text-slate-500 font-medium text-sm leading-relaxed">{s.description}</p>
                 </div>
               ))}
             </div>
           </div>
         )}
         {currentSlide === 6 && (
           <div className="text-center space-y-12 max-w-4xl">
             <div className="space-y-4">
               <h3 className="text-5xl font-black text-slate-900 tracking-tight">Gobierno Corporativo.</h3>
               <p className="text-lg text-slate-500 font-medium italic">"Liderando la visión de NEXUM desde Medellín."</p>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {team.map((m, i) => (
                  <div key={i} className="space-y-4 group">
                    <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-2xl mx-auto flex items-center justify-center text-slate-400 shadow-sm group-hover:bg-slate-900 group-hover:text-emerald-400 transition-all group-hover:-translate-y-1">
                      {React.cloneElement(m.icon, { className: 'w-7 h-7' })}
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900 mb-0.5">{m.name.split(' ')[0]} {m.name.split(' ')[1]}</p>
                      <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">{m.role}</p>
                    </div>
                  </div>
                ))}
             </div>
             <div className="pt-8 text-center">
               <button onClick={onClose} className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-[11px] shadow-lg hover:bg-emerald-600 transition-all active:scale-95">
                  Finalizar Presentación
               </button>
             </div>
           </div>
         )}
      </div>
    </div>
  );
};

export default PresentationOverlay;
