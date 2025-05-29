
import { Phase } from "@/types/processTypes";

export const processData: Phase[] = [
  {
    id: "config",
    title: "FASE 1: CONFIGURACIÓN INICIAL",
    icon: "🔧",
    processes: [
      {
        id: "vehicles",
        name: "CREACIÓN DE VEHÍCULOS",
        links: {
          videoLink: "#", // Reemplaza con el link real del video
          docLink: "#", // Reemplaza con el link real de documentación
          reqLink: "#", // Reemplaza con el link real de requerimientos
          figmaLink: "#" // Reemplaza con el link real de Figma
        }
      },
      {
        id: "associates",
        name: "CREACIÓN DE ASOCIADOS, CONDUCTORES Y POSEEDORES",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "activation",
        name: "ACTIVACIÓN DE VEHÍCULOS",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "security",
        name: "SEGURIDAD - ANÁLISIS",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      }
    ]
  },
  {
    id: "client",
    title: "FASE 2: GESTIÓN DE CLIENTES",
    icon: "👥",
    processes: [
      {
        id: "clientCreation",
        name: "CREACIÓN DE CLIENTE",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "clientActivation",
        name: "ACTIVACIÓN DE CLIENTES",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "quotaAssignment",
        name: "ASIGNACIÓN DE CUPO CLIENTES",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "quotaNews",
        name: "NOVEDADES CUPOS DE CLIENTES",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      }
    ]
  },
  {
    id: "operConfig",
    title: "FASE 3: CONFIGURACIÓN OPERATIVA",
    icon: "💰",
    processes: [
      {
        id: "freights",
        name: "FLETES Y TARIFAS",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "costGuide",
        name: "GUÍA DE COSTOS OPERACIONALES",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "businessLines",
        name: "LÍNEAS DE NEGOCIO - RELACIÓN OP",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      }
    ]
  },
  {
    id: "specialized",
    title: "FASE 4: OPERACIÓN ESPECIALIZADA",
    icon: "🚛",
    processes: [
      {
        id: "specializedOp",
        name: "CREACIÓN OP REFRIGERADOS, MERCANCÍAS PELIGROSAS Y RO RO, EXTRADIMENSIONADA",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "foreignTrade",
        name: "COMERCIO EXTERIOR",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "logistics",
        name: "LOGÍSTICA - CONTENEDORES",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "international",
        name: "OPERACIÓN INTERNACIONAL",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      }
    ]
  },
  {
    id: "mainOper",
    title: "FASE 5: PROCESO OPERATIVO PRINCIPAL",
    icon: "📋",
    processes: [
      {
        id: "enturnamiento",
        name: "ENTURNAMIENTO",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "opCreation",
        name: "CREACIÓN DE OP",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "opNews",
        name: "NOVEDADES OP",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "loadOrder",
        name: "ORDEN DE CARGUE",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "remesa",
        name: "REMESA",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "manifest",
        name: "MANIFIESTO",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      }
    ]
  },
  {
    id: "tracking",
    title: "FASE 6: CONTROL Y SEGUIMIENTO",
    icon: "📍",
    processes: [
      {
        id: "sealControl",
        name: "CONTROL DE PRECINTOS",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "securityTracking",
        name: "TRACKING SEGURIDAD TRÁFICO",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "commercialTracking",
        name: "TRACKING COMERCIAL - OPERACIONES",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "trafficSecurity",
        name: "SEGURIDAD - TRÁFICO",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      }
    ]
  },
  {
    id: "financial",
    title: "FASE 7: GESTIÓN FINANCIERA",
    icon: "💵",
    processes: [
      {
        id: "advance",
        name: "CREACIÓN DE ANTICIPO",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "settlements",
        name: "CUMPLIDOS Y LIQUIDACIONES",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "settlementNews",
        name: "NOVEDADES DE LIQUIDACIÓN Y CUMPLIDOS",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "transporterPortfolio",
        name: "CARTERA TRANSPORTADOR",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      }
    ]
  },
  {
    id: "risk",
    title: "FASE 8: GESTIÓN DE RIESGOS Y EXCEPCIONES",
    icon: "⚠️",
    processes: [
      {
        id: "risks",
        name: "RIESGOS Y SEGUROS",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "reshipments",
        name: "REEXPEDICIONES",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "claims",
        name: "SINIESTROS",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "liquids",
        name: "LÍQUIDOS",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      }
    ]
  },
  {
    id: "support",
    title: "FASE 9: SOPORTE Y SERVICIOS",
    icon: "🛠️",
    processes: [
      {
        id: "customerService",
        name: "SERVICIO AL CLIENTE - PQRs",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "bearings",
        name: "RODAMIENTOS",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      },
      {
        id: "appStructure",
        name: "ESTRUCTURA APP TURNPIKE",
        links: {
          videoLink: "#",
          docLink: "#",
          reqLink: "#",
          figmaLink: "#"
        }
      }
    ]
  }
];
