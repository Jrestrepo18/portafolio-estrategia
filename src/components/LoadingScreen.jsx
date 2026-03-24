import React, { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import logo from '../assets/logo.png';

const LoadingScreen = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Sequence of animations for an elegant reveal
    const t1 = setTimeout(() => setStage(1), 400); // Show top tab
    const t2 = setTimeout(() => setStage(2), 1000); // Show logo
    const t3 = setTimeout(() => setStage(3), 1600); // Show bottom text
    const t4 = setTimeout(() => {
      setStage(4); // Trigger fade out
      setTimeout(onComplete, 800); // Unmount after fade out
    }, 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[999999] bg-[#030614] flex items-center justify-center transition-all duration-1000 ease-in-out font-sans ${
        stage === 4 ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0f172a_0%,_transparent_70%)] opacity-40" />

      {/* Top Banner (Absolute) */}
      <div 
        className={`absolute top-12 flex items-center gap-3 border border-white/5 bg-white/[0.02] backdrop-blur-md px-6 py-3 rounded-full transition-all duration-1000 transform ${
          stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <ShieldCheck className="w-4 h-4 text-[#c5a67c] animate-pulse" />
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
           Estableciendo Conexión Segura
        </span>
      </div>

      {/* Center Content (Perfectly Centered) */}
      <div 
        className={`relative z-10 flex flex-col items-center transition-all duration-1000 transform ${
          stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 blur-xl'
        }`}
      >
        {/* Logo with Glow & Reflection */}
        <div className="relative mb-12 group">
          <div className="absolute inset-0 bg-[#c5a67c]/20 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse" />
          <img 
            src={logo} 
            alt="NEXUM Logo" 
            className="h-24 md:h-32 w-auto relative z-10 [filter:invert(1)_hue-rotate(180deg)_brightness(1.5)_saturate(1.5)] mix-blend-screen animate-pulse" 
          />
        </div>

        <div className={`space-y-4 text-center transition-all duration-1000 ${stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-xl md:text-2xl font-black text-white tracking-[0.5em] uppercase pl-[0.5em]">Consultores</h2>
          <div className="h-0.5 w-12 bg-[#c5a67c] mx-auto rounded-full" />
          <h3 className="text-[10px] md:text-[12px] font-bold text-slate-500 tracking-[0.3em] uppercase">Especialistas en Ingeniería de Valor</h3>
        </div>
      </div>

      {/* Bottom Progress Area (Absolute) */}
      <div 
        className={`absolute bottom-16 w-full max-w-md px-10 flex flex-col items-center gap-6 transition-all duration-1000 transform ${
          stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="w-full h-[1px] bg-white/5 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-[#c5a67c] to-transparent transition-all duration-[2000ms] ease-in-out" 
            style={{ width: '100%', transform: stage >= 3 ? 'translateX(0%)' : 'translateX(-100%)' }}
          />
        </div>
        <p className="text-[9px] font-black uppercase tracking-[0.5em] text-slate-600">
          NEXUM Strategic Systems
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
