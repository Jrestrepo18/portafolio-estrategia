import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Cpu, 
  Leaf, 
  ShieldCheck, 
  Users,
  Briefcase,
  Workflow
} from 'lucide-react';

export const services = [
  {
    id: 1,
    title: "Reingeniería de Procesos",
    category: "Productos Principales",
    description: "Rediseñamos tu cadena de valor para eliminar cuellos de botella y maximizar la rentabilidad operativa de forma sostenible.",
    fullDescription: "Nuestra consultoría en reingeniería de procesos (BPR) examina tu empresa desde sus cimientos. No hacemos ajustes superficiales; cuestionamos y rediseñamos los flujos de trabajo fundamentales para lograr mejoras dramáticas en medidas críticas de rendimiento.",
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
    description: "Análisis técnico de salud económica, optimización de flujo de caja y proyecciones estratégicas de inversión.",
    fullDescription: "A través de un análisis profundo de los estados financieros, revelamos la verdadera salud económica de tu organización. Identificamos riesgos de liquidez y evaluamos la rentabilidad real de tus líneas de negocio.",
    deliverables: [
      "Análisis vertical y horizontal de estados financieros.",
      "Evaluación de márgenes, EBITDA y capital de trabajo.",
      "Modelado y proyecciones financieras a 5 años.",
      "Estrategias de optimización fiscal."
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    id: 3,
    title: "IA Aplicada a Ventas",
    category: "Productos Innovadores",
    description: "Implementación de algoritmos de aprendizaje automático para predecir comportamientos del consumidor.",
    fullDescription: "Transformamos tu departamento comercial integrando Inteligencia Artificial. Pasamos de las ventas intuitivas a las ventas predictivas, utilizando datos históricos para prever comportamientos.",
    deliverables: [
      "Auditoría y limpieza de bases de datos comerciales.",
      "Integración de CRM con módulos de Machine Learning.",
      "Lead Scoring predictivo.",
      "Despliegue de Chatbots conversacionales avanzados."
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: 4,
    title: "Auditoría ESG y Sostenibilidad",
    category: "Productos Innovadores",
    description: "Certificación y planes de acción bajo criterios ESG para empresas que buscan liderar con propósito.",
    fullDescription: "Adaptamos tu modelo de negocio a las exigencias del mercado actual mediante la integración de criterios Ambiental, Social y de Gobernanza (ESG).",
    deliverables: [
      "Elaboración de Matriz de Materialidad.",
      "Cálculo de Huella de Carbono (Alcance 1, 2 y 3).",
      "Diseño de políticas de equidad e inclusión.",
      "Redacción de Reportes de Sostenibilidad bajo estándares GRI."
    ],
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80&w=800",
    icon: <Leaf className="w-6 h-6" />
  },
  {
    id: 5,
    title: "Asesoría Jurídico-Laboral",
    category: "Productos Complementarios",
    description: "Protección legal preventiva y gestión de cumplimiento normativo para blindar tu operación.",
    fullDescription: "Actuamos como el escudo protector de tu empresa. Nuestro enfoque es preventivo, asegurando que todas tus operaciones comerciales estén estrictamente apegadas a la ley.",
    deliverables: [
      "Auditoría legal de contratos comerciales.",
      "Actualización de Reglamentos Internos de Trabajo.",
      "Asesoría en procesos de contratación.",
      "Implementación de programas de Compliance."
    ],
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: 6,
    title: "Alta Gerencia y Liderazgo",
    category: "Servicios Asociados",
    description: "Entrenamiento de alto rendimiento para equipos directivos enfocado en gestión del cambio.",
    fullDescription: "Nuestro programa es un entrenamiento intensivo diseñado para potenciar las habilidades directivas, resolver conflictos en la cúpula y alinear la cultura organizacional.",
    deliverables: [
      "Evaluaciones de Liderazgo 360°.",
      "Sesiones de Coaching Ejecutivo.",
      "Talleres de gestión del cambio.",
      "Diseño de planes de sucesión."
    ],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    icon: <Users className="w-6 h-6" />
  }
];

export const team = [
  { 
    name: "Jerónimo Cardona Restrepo", 
    role: "Gerente General", 
    icon: <Users className="w-5 h-5" />,
    functions: [
      "Representación legal y direccional de la empresa.",
      "Toma de decisiones estratégicas de alto nivel.",
      "Gestión de relaciones con stakeholders clave.",
      "Aprobación de la visión y planificación corporativa 2030."
    ]
  },
  { 
    name: "María Camila Moreno Cataño", 
    role: "Directora Comercial", 
    icon: <Briefcase className="w-5 h-5" />,
    functions: [
      "Diseño de estrategias de adquisición y retención de clientes.",
      "Liderazgo en negociaciones de alto valor y alianzas estratégicas.",
      "Estructuración de metas de ventas y proyecciones de ingresos.",
      "Análisis de expansión de mercado nacional e internacional."
    ]
  },
  { 
    name: "Isabel Rodríguez Restrepo", 
    role: "Director Tecnológico (CTO)", 
    icon: <Cpu className="w-5 h-5" />,
    functions: [
      "Definición y adopción de la arquitectura de software (Tech Stack).",
      "Liderazgo del equipo de desarrollo e ingeniería técnica.",
      "Implementación de metodologías ágiles en el ciclo de vida del software.",
      "Aseguramiento de ciberseguridad y escalabilidad de las soluciones."
    ]
  },
  { 
    name: "Ángel David Mosquera Palacios", 
    role: "Director Operativo", 
    icon: <Workflow className="w-5 h-5" />,
    functions: [
      "Supervisión y optimización de los procesos internos de producción.",
      "Control de calidad y cumplimiento en la entrega de proyectos.",
      "Gestión de recursos y eficiencia en el flujo de trabajo.",
      "Resolución operativa de cuellos de botella en tiempo real."
    ]
  }
];

export const valuesVerbatim = [
  "Innovación",
  "Responsabilidad",
  "Calidad",
  "Trabajo en equipo",
  "Compromiso",
  "Adaptabilidad tecnológica"
];
