import React from 'react';
import { Target, Home, ArrowRight, History, Briefcase, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Header = ({ scrolled, onStartPresentation }) => {
  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-3 group cursor-pointer">
          <div className={`p-2 rounded-xl transition-all duration-500 ${scrolled ? 'bg-slate-900 rotate-0' : 'bg-white shadow-lg rotate-12 group-hover:rotate-0'}`}>
            <Target className={`${scrolled ? 'text-emerald-400' : 'text-slate-900'} w-5 h-5`} />
          </div>
          <span className="text-2xl font-black text-slate-900 tracking-tighter">NEXUM<span className="text-emerald-500">.</span></span>
        </NavLink>
        
        <div className="hidden md:flex items-center space-x-8 text-[13px] font-bold text-slate-500 uppercase tracking-widest">
          <NavLink to="/" className={({isActive}) => `flex items-center gap-1.5 transition-all group ${isActive ? 'text-emerald-600' : 'hover:text-emerald-600'}`}>
            <Home className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> Inicio
          </NavLink>
          <NavLink to="/historia" className={({isActive}) => `flex items-center gap-1.5 transition-all group ${isActive ? 'text-emerald-600' : 'hover:text-emerald-600'}`}>
            <History className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> Historia
          </NavLink>
          <NavLink to="/estrategia" className={({isActive}) => `flex items-center gap-1.5 transition-all group ${isActive ? 'text-emerald-600' : 'hover:text-emerald-600'}`}>
            <Target className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> Estrategia
          </NavLink>
          <NavLink to="/portafolio" className={({isActive}) => `flex items-center gap-1.5 transition-all group ${isActive ? 'text-emerald-600' : 'hover:text-emerald-600'}`}>
            <Briefcase className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> Portafolio
          </NavLink>
          <NavLink to="/equipo" className={({isActive}) => `flex items-center gap-1.5 transition-all group ${isActive ? 'text-emerald-600' : 'hover:text-emerald-600'}`}>
            <Users className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> Equipo
          </NavLink>
        </div>
        
        <button 
          onClick={onStartPresentation}
          className="bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/30 text-xs font-bold uppercase tracking-widest active:scale-95 flex items-center gap-2"
        >
          Presentación
        </button>
      </div>
    </nav>
  );
};

export default Header;
