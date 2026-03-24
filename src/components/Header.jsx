import React from 'react';
import { Target, Home, History, Briefcase, Users } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = ({ scrolled, onStartPresentation }) => {
  const location = useLocation();
  const isDarkHero = location.pathname === '/' && !scrolled;

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <NavLink to="/" className="flex items-center group cursor-pointer transition-all">
          <img 
            src={logo} 
            alt="NEXUM Logo" 
            className={`h-10 md:h-12 w-auto transition-all duration-500 
              ${isDarkHero ? '[filter:invert(1)_hue-rotate(180deg)_brightness(1.1)_saturate(1.2)] mix-blend-screen' : 'mix-blend-multiply'}`} 
          />
        </NavLink>
        
        <div className={`hidden md:flex items-center space-x-8 text-[13px] font-bold uppercase tracking-widest ${isDarkHero ? 'text-slate-300' : 'text-slate-500'}`}>
          <NavLink to="/" className={({isActive}) => `flex items-center gap-1.5 transition-all group ${isActive ? (isDarkHero ? 'text-white' : 'text-[#c5a67c]') : (isDarkHero ? 'hover:text-white' : 'hover:text-[#c5a67c]')}`}>
            <Home className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> Inicio
          </NavLink>
          <NavLink to="/historia" className={({isActive}) => `flex items-center gap-1.5 transition-all group ${isActive ? (isDarkHero ? 'text-white' : 'text-[#c5a67c]') : (isDarkHero ? 'hover:text-white' : 'hover:text-[#c5a67c]')}`}>
            <History className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> Historia
          </NavLink>
          <NavLink to="/estrategia" className={({isActive}) => `flex items-center gap-1.5 transition-all group ${isActive ? (isDarkHero ? 'text-white' : 'text-[#c5a67c]') : (isDarkHero ? 'hover:text-white' : 'hover:text-[#c5a67c]')}`}>
            <Target className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> Estrategia
          </NavLink>
          <NavLink to="/portafolio" className={({isActive}) => `flex items-center gap-1.5 transition-all group ${isActive ? (isDarkHero ? 'text-white' : 'text-[#c5a67c]') : (isDarkHero ? 'hover:text-white' : 'hover:text-[#c5a67c]')}`}>
            <Briefcase className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> Portafolio
          </NavLink>
          <NavLink to="/equipo" className={({isActive}) => `flex items-center gap-1.5 transition-all group ${isActive ? (isDarkHero ? 'text-white' : 'text-[#c5a67c]') : (isDarkHero ? 'hover:text-white' : 'hover:text-[#c5a67c]')}`}>
            <Users className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> Equipo
          </NavLink>
        </div>
        
        <button 
          onClick={onStartPresentation}
          className={`px-6 py-3 rounded-xl transition-all shadow-lg text-xs font-bold uppercase tracking-widest active:scale-95 flex items-center gap-2 ${isDarkHero ? 'bg-[#c5a67c] text-[#0f2a4a] hover:bg-[#b89765] hover:shadow-[#c5a67c]/30' : 'bg-[#0f2a4a] text-white hover:bg-[#c5a67c] hover:text-[#0f2a4a] hover:shadow-[#c5a67c]/30'}`}
        >
          Presentación
        </button>
      </div>
    </nav>
  );
};

export default Header;
