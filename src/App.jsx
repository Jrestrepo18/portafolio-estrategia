import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  BarChart3, 
  TrendingUp, 
  Cpu, 
  Leaf, 
  ShieldCheck, 
  Users,
  Target,
  X,
  CheckCircle2,
  Building2,
  Briefcase
} from 'lucide-react';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Reingeniería de Procesos",
      category: "Productos Principales",
      description: "Rediseñamos tu cadena de valor para eliminar cuellos de botella y maximizar la rentabilidad operativa de forma sostenible.",
      fullDescription: "Nuestra consultoría en reingeniería de procesos (BPR) examina tu empresa desde sus cimientos. No hacemos ajustes superficiales; cuestionamos y rediseñamos los flujos de trabajo fundamentales para lograr mejoras dramáticas en medidas críticas de rendimiento: costos, calidad, servicio y rapidez.",
      deliverables: [
        "Mapeo de procesos actuales (As-Is) bajo el estándar BPMN.",
        "Identificación de desperdicios operativos y cuellos de botella.",
        "Diseño de la nueva estructura de valor (To-Be).",
        "Implementación de KPIs para monitoreo en tiempo real."
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Diagnóstico Financiero",
      category: "Productos Principales",
      description: "Análisis técnico de salud económica, optimización de flujo de caja y proyecciones estratégicas de inversión a largo plazo.",
      fullDescription: "A través de un análisis profundo de los estados financieros, revelamos la verdadera salud económica de tu organización. Identificamos riesgos de liquidez, evaluamos la rentabilidad real de tus líneas de negocio y estructuramos un plan de acción para maximizar el valor para los accionistas.",
      deliverables: [
        "Análisis vertical y horizontal de estados financieros.",
        "Evaluación de márgenes, EBITDA y capital de trabajo.",
        "Modelado y proyecciones financieras a 5 años.",
        "Estrategias de optimización fiscal y reestructuración de pasivos."
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 3,
      title: "IA Aplicada a Ventas",
      category: "Productos Innovadores",
      description: "Implementación de algoritmos de aprendizaje automático para predecir comportamientos del consumidor y cerrar más tratos.",
      fullDescription: "Transformamos tu departamento comercial integrando Inteligencia Artificial. Pasamos de las ventas intuitivas a las ventas predictivas, utilizando los datos históricos de tus clientes para prever qué comprarán, cuándo lo harán y cuál es el canal óptimo para cerrar la negociación.",
      deliverables: [
        "Auditoría y limpieza de bases de datos comerciales.",
        "Integración de CRM con módulos de Machine Learning.",
        "Lead Scoring predictivo (calificación automática de prospectos).",
        "Despliegue de Chatbots conversacionales avanzados para pre-venta."
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Auditoría ESG y Sostenibilidad",
      category: "Productos Innovadores",
      description: "Certificación y planes de acción bajo criterios ESG para empresas que buscan liderar con propósito ambiental y social.",
      fullDescription: "Adaptamos tu modelo de negocio a las exigencias del mercado actual mediante la integración de criterios Ambientales, Sociales y de Gobernanza (ESG). Te preparamos para cumplir con normativas internacionales, atraer a inversores conscientes y mejorar la percepción de tu marca.",
      deliverables: [
        "Elaboración de Matriz de Materialidad.",
        "Cálculo y estrategias de mitigación de Huella de Carbono (Alcance 1, 2 y 3).",
        "Diseño de políticas de equidad, inclusión y bienestar laboral.",
        "Redacción de Reportes de Sostenibilidad bajo estándares GRI."
      ],
      image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80&w=800",
      icon: <Leaf className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Asesoría Jurídico-Laboral",
      category: "Productos Complementarios",
      description: "Protección legal preventiva, estructuración de contratos y gestión de cumplimiento normativo para blindar tu operación.",
      fullDescription: "Actuamos como el escudo protector de tu empresa. Nuestro enfoque es preventivo, no reactivo. Aseguramos que todas tus operaciones comerciales y relaciones laborales estén estrictamente apegadas a la ley, minimizando el riesgo de demandas, multas o conflictos sindicales.",
      deliverables: [
        "Auditoría legal de contratos comerciales y laborales.",
        "Actualización de Reglamentos Internos de Trabajo.",
        "Asesoría en procesos de desvinculación y contratación.",
        "Implementación de programas de Compliance (Cumplimiento normativo)."
      ],
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Alta Gerencia y Liderazgo",
      category: "Servicios Asociados",
      description: "Entrenamiento de alto rendimiento para equipos directivos enfocado en gestión del cambio y retención de talento clave.",
      fullDescription: "Las estrategias más brillantes fracasan sin líderes capaces de ejecutarlas. Nuestro programa no es una charla motivacional; es un entrenamiento intensivo diseñado para potenciar las habilidades directivas, resolver conflictos en la cúpula y alinear la cultura organizacional con los objetivos del negocio.",
      deliverables: [
        "Evaluaciones de Liderazgo 360° para la junta directiva.",
        "Sesiones de Coaching Ejecutivo individual y grupal.",
        "Talleres de gestión del cambio y resolución de crisis.",
        "Diseño de planes de sucesión y retención de talento clave."
      ],
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const filters = ['Todos', 'Productos Principales', 'Productos Innovadores', 'Productos Complementarios', 'Servicios Asociados'];

  const filteredServices = activeFilter === 'Todos' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
      
      {/* --- Minimalist Header --- */}
      <nav className="flex justify-between items-center px-8 md:px-16 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200/50">
        <div className="flex items-center space-x-3">
          <div className="bg-slate-900 p-2 rounded-lg">
            <Target className="text-emerald-400 w-5 h-5" />
          </div>
          <span className="text-xl font-black text-slate-900 tracking-tight">NEXUM<span className="text-emerald-500">.</span></span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-600">
          <span className="text-emerald-600">Portafolio</span>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors">
            Agendar Asesoría
          </button>
        </div>
      </nav>

      {/* --- Portfolio Intro --- */}
      <header className="px-8 md:px-16 pt-20 pb-10 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Catálogo de <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400">Soluciones Estratégicas.</span>
          </h1>
        </div>
      </header>

      {/* --- NUEVA SECCIÓN: Resumen Ejecutivo (Fase 1 y Fase 2) --- */}
      <section className="px-8 md:px-16 mb-16 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm grid md:grid-cols-2 gap-10">
          
          {/* FASE 1 */}
          <div>
            <div className="flex items-center gap-3 mb-4 text-emerald-600 font-bold uppercase tracking-widest text-xs">
              <Building2 className="w-5 h-5" /> Fase 1: Identificación
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Nombre de la Empresa</h3>
            <p className="text-xl text-slate-700 font-medium mb-4">Nexum Estrategia & Innovación S.A.S.</p>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Descripción</h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              Firma boutique de asesoría y consultoría especializada en la transformación y escalabilidad de medianas empresas. Conectamos la eficiencia operativa, la tecnología de vanguardia y el talento humano para garantizar la competitividad de nuestros clientes en el mercado actual.
            </p>
          </div>

          {/* FASE 2 */}
          <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-8 md:pt-0 md:pl-10">
            <div className="flex items-center gap-3 mb-4 text-blue-600 font-bold uppercase tracking-widest text-xs">
              <Briefcase className="w-5 h-5" /> Fase 2: El Portafolio
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Clasificación de 6 Servicios Clave</h3>
            <p className="text-slate-600 leading-relaxed text-sm mb-6">
              Hemos seleccionado una empresa del sector de asesorías. El siguiente portafolio interactivo clasifica los 6 servicios requeridos según su naturaleza estratégica:
            </p>
            <ul className="grid grid-cols-2 gap-3 text-sm font-medium text-slate-700">
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Productos Principales</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Productos Innovadores</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-slate-500"></span> Productos Complementarios</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-indigo-500"></span> Servicios Asociados</li>
            </ul>
          </div>

        </div>
      </section>

      {/* --- Interactive Filters --- */}
      <section className="px-8 md:px-16 mb-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20' 
                  : 'bg-white text-slate-500 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* --- Dynamic Grid Gallery --- */}
      <section className="px-8 md:px-16 pb-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredServices.map((service) => (
            <div 
              key={service.id} 
              onClick={() => setSelectedService(service)}
              className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 cursor-pointer h-full"
            >
              {/* Image Container with Hover Effect */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md border ${
                    service.category === 'Productos Innovadores' ? 'bg-emerald-500/90 text-white border-emerald-400' :
                    service.category === 'Productos Principales' ? 'bg-blue-600/90 text-white border-blue-500' :
                    service.category === 'Productos Complementarios' ? 'bg-slate-700/90 text-white border-slate-600' :
                    'bg-white/90 text-slate-800 border-white/50'
                  }`}>
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow relative">
                {/* Floating Icon */}
                <div className="absolute -top-8 right-8 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-slate-800 transform group-hover:-translate-y-2 transition-transform duration-500">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 pr-12 leading-tight">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Card Footer / Action */}
                <div className="flex items-center text-sm font-bold text-slate-900 mt-auto group-hover:text-emerald-600 transition-colors">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transform group-hover:-translate-y-full transition-transform duration-300">Ver detalles</span>
                    <span className="absolute top-0 left-0 inline-block transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-emerald-600">Ver detalles</span>
                  </span>
                  <ArrowUpRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State fallback (just in case) */}
        {filteredServices.length === 0 && (
          <div className="py-20 text-center text-slate-500">
            No se encontraron servicios en esta categoría.
          </div>
        )}
      </section>

      {/* --- Footer Minimalista --- */}
      <footer className="border-t border-slate-200 bg-white py-10 text-center">
        <p className="text-slate-400 font-medium text-sm">
          &copy; 2026 Nexum Estrategia & Innovación S.A.S. — Diseñado para el éxito.
        </p>
      </footer>

      {/* --- Modal de Detalles del Servicio --- */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Overlay oscuro para cerrar al hacer clic fuera */}
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedService(null)}
          ></div>
          
          {/* Contenedor del Modal */}
          <div className="relative bg-white rounded-[2rem] w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row transform transition-all">
            
            {/* Botón de cerrar */}
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-20 bg-white/50 backdrop-blur-md p-2 rounded-full text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Mitad Izquierda: Imagen */}
            <div className="md:w-2/5 h-64 md:h-auto relative hidden sm:block">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md border border-white/30 inline-block mb-4 ${
                    selectedService.category === 'Productos Innovadores' ? 'bg-emerald-500/80' :
                    selectedService.category === 'Productos Principales' ? 'bg-blue-600/80' : 
                    selectedService.category === 'Productos Complementarios' ? 'bg-slate-800/80' : 'bg-white/20 text-slate-900'
                  }`}>
                    {selectedService.category}
                  </span>
                  <div className="text-white/80 flex items-center gap-2 font-medium">
                    {selectedService.icon} Nexum Consulting
                  </div>
                </div>
              </div>
            </div>

            {/* Mitad Derecha: Contenido */}
            <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                {selectedService.title}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Descripción General</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedService.fullDescription}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-5">Entregables y Alcance</h4>
                  <ul className="space-y-4">
                    {selectedService.deliverables.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-700">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100 flex gap-4">
                <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                  Agendar este servicio
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default PortfolioPage;