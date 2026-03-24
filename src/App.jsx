import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import Strategy from './pages/Strategy';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import Legal from './pages/Legal';
import PresentationOverlay from './components/PresentationOverlay';
import { team } from './data/companyData';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [presentationMode, setPresentationMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePos({ x, y });
      }
    };

    const handleKeyDown = (e) => {
      if (presentationMode) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'Escape') setPresentationMode(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [presentationMode, currentSlide]);

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, 6));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-emerald-500 selection:text-white pb-20 overflow-x-hidden">
        
        <Header 
          scrolled={scrolled} 
          onStartPresentation={() => { setPresentationMode(true); setCurrentSlide(0); }} 
        />

        <Routes>
          <Route path="/" element={<Home mousePos={mousePos} heroRef={heroRef} />} />
          <Route path="/historia" element={<History />} />
          <Route path="/estrategia" element={<Strategy />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>

        <Footer team={team} />

        {/* Presentation Overlay */}
        {presentationMode && (
          <PresentationOverlay 
            currentSlide={currentSlide}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            onClose={() => setPresentationMode(false)}
          />
        )}
      </div>
    </Router>
  );
};

export default App;