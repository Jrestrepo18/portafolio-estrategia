import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import LoadingScreen from './components/LoadingScreen';
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
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [presentationMode, setPresentationMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);

  const handleStartPresentation = React.useCallback(() => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    setPresentationMode(true);
    setCurrentSlide(0);
  }, []);

  const handleClosePresentation = React.useCallback(() => {
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
    setPresentationMode(false);
  }, []);

  const nextSlide = () => setCurrentSlide(prev => Math.min(prev + 1, 5));
  const prevSlide = () => setCurrentSlide(prev => Math.max(prev - 1, 0));

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
        if (e.key === 'Escape') handleClosePresentation();
      } else {
        // Trigger presentation with 'f' or 'F'
        if (e.key.toLowerCase() === 'f' && !loading) {
          handleStartPresentation();
        }
      }
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setPresentationMode(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    if (presentationMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.body.style.overflow = 'unset';
    };
  }, [presentationMode, currentSlide, loading, handleStartPresentation, handleClosePresentation]);

  return (
    <Router>
      <ScrollToTop />
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      <div className={`min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-[#c5a67c] selection:text-white pb-20 overflow-x-hidden transition-opacity duration-1000 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        
        {!presentationMode && (
          <Header 
            scrolled={scrolled} 
            onStartPresentation={handleStartPresentation} 
          />
        )}

        <Routes>
          <Route path="/" element={<Home mousePos={mousePos} heroRef={heroRef} />} />
          <Route path="/historia" element={<History />} />
          <Route path="/estrategia" element={<Strategy />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>

        {!presentationMode && <Footer team={team} />}

        {/* Presentation Overlay */}
        {presentationMode && (
          <PresentationOverlay 
            currentSlide={currentSlide}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
            onClose={handleClosePresentation}
            mousePos={mousePos}
            heroRef={heroRef}
          />
        )}
      </div>
    </Router>
  );
};

export default App;