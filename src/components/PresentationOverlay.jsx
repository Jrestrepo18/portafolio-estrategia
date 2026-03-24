import React, { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import logo from '../assets/logo.png';

// Import full page components
import Home from '../pages/Home';
import History from '../pages/History';
import Strategy from '../pages/Strategy';
import Portfolio from '../pages/Portfolio';
import Team from '../pages/Team';
import Legal from '../pages/Legal';

const PresentationOverlay = ({ currentSlide, nextSlide, prevSlide, onClose, mousePos, heroRef }) => {
  const scrollContainerRef = useRef(null);

  // Auto-scroll to top when slide changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo(0, 0);
    }
  }, [currentSlide]);

  const slides = [
    { title: "Inicio", component: <Home mousePos={mousePos} heroRef={heroRef} /> },
    { title: "Historia", component: <History /> },
    { title: "Estrategia", component: <Strategy /> },
    { title: "Portafolio", component: <Portfolio /> },
    { title: "Equipo", component: <Team /> },
    { title: "Legal", component: <Legal /> }
  ];

  const totalSlides = slides.length;

  return (
    <div className="fixed inset-0 z-[1000] bg-[#f8fafc] flex flex-col overflow-hidden animate-in fade-in duration-700">
      
      {/* Top Navigation Bar (Floating & Translucent) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[1010] bg-slate-900/90 backdrop-blur-xl border border-white/10 px-8 py-3 flex items-center gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-full transition-all hover:scale-105 duration-500">
        <div className="flex items-center gap-4">
          <img src={logo} alt="NEXUM Logo" className="h-6 w-auto [filter:invert(1)_hue-rotate(180deg)_brightness(1.5)] mix-blend-screen" />
          <div className="h-4 w-px bg-white/20" />
          <span className="text-[10px] font-bold text-[#c5a67c] uppercase tracking-[0.3em] whitespace-nowrap">{slides[currentSlide].title}</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-center">
            <p className="text-base font-black text-white leading-tight">{currentSlide + 1}<span className="text-white/30 text-xs"> / {totalSlides}</span></p>
          </div>
          <button 
            onClick={onClose}
            className="text-white/60 hover:text-[#c5a67c] transition-colors"
            title="Esc / Salir"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Progress Line (Slim) */}
      <div 
        className="absolute top-0 left-0 h-1 bg-[#c5a67c] transition-all duration-500 z-[1020] shadow-[0_0_15px_rgba(197,166,124,0.5)]" 
        style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }} 
      />

      {/* Main Content Container (Full Screen Scroll) */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth selection:bg-[#c5a67c] selection:text-white"
      >
        <div className="animate-in fade-in duration-700">
           {slides[currentSlide].component}
        </div>

        {/* Floating Slide Navigation (Persistent at bottom right) */}
        <div className="fixed bottom-8 right-8 flex items-center gap-3 z-[1020]">
          <button 
            onClick={prevSlide} 
            disabled={currentSlide === 0}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-white border border-slate-200 text-slate-900 transition-all ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-slate-50 hover:border-[#c5a67c]/30 shadow-xl active:scale-95'}`}
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={currentSlide === totalSlides - 1 ? onClose : nextSlide} 
            className="w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-900 text-white hover:bg-[#c5a67c] hover:text-[#0f2a4a] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.2)] active:scale-95 group"
          >
            {currentSlide === totalSlides - 1 ? (
              <X className="w-6 h-6" />
            ) : (
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </div>

        {/* Optional Page Indicators (Left side) */}
        <div className="fixed left-8 bottom-8 flex gap-2 z-[1020] hidden md:flex">
          {slides.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 transition-all duration-500 rounded-full ${currentSlide === i ? 'w-8 bg-[#c5a67c]' : 'w-2 bg-slate-300'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PresentationOverlay;
