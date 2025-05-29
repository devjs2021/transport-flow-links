
const Legend = () => {
  const legendItems = [
    { color: "bg-gradient-to-br from-blue-50 to-blue-100", title: "Configuración Inicial", desc: "Preparación de recursos básicos" },
    { color: "bg-gradient-to-br from-purple-50 to-purple-100", title: "Gestión de Clientes", desc: "Administración de cartera de clientes" },
    { color: "bg-gradient-to-br from-green-50 to-green-100", title: "Configuración Operativa", desc: "Definición de parámetros comerciales" },
    { color: "bg-gradient-to-br from-orange-50 to-orange-100", title: "Operación Especializada", desc: "Servicios específicos y especializados" },
    { color: "bg-gradient-to-br from-sky-50 to-sky-100", title: "Proceso Operativo", desc: "Flujo principal de operaciones" },
    { color: "bg-gradient-to-br from-yellow-50 to-yellow-100", title: "Control y Seguimiento", desc: "Monitoreo en tiempo real" },
    { color: "bg-gradient-to-br from-pink-50 to-pink-100", title: "Gestión Financiera", desc: "Procesos de facturación y cobro" },
    { color: "bg-gradient-to-br from-red-50 to-red-100", title: "Gestión de Riesgos", desc: "Manejo de excepciones y contingencias" },
    { color: "bg-gradient-to-br from-emerald-50 to-emerald-100", title: "Soporte y Servicios", desc: "Servicios transversales de apoyo" }
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-xl mt-8 border-2 border-gray-200">
      <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center">
        📋 Leyenda del Proceso
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded ${item.color} border border-gray-300`}></div>
            <div>
              <span className="font-semibold text-sm">{item.title}:</span>
              <span className="text-xs text-gray-600 ml-1">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legend;
