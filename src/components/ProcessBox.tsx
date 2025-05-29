import { useState } from "react";
import { Process } from "@/types/processTypes";
import { ExternalLink, Video, FileText, Settings, Figma } from "lucide-react";

interface ProcessBoxProps {
  process: Process;
}

const ProcessBox = ({ process }: ProcessBoxProps) => {
  const [showLinks, setShowLinks] = useState(false);

  const linkTypes = [
    { key: 'videoLink', icon: Video, label: 'Video Levantamiento', color: 'text-red-600' },
    { key: 'docLink', icon: FileText, label: 'Documentación', color: 'text-blue-600' },
    { key: 'reqLink', icon: Settings, label: 'Requerimiento Funcional', color: 'text-green-600' },
    { key: 'figmaLink', icon: Figma, label: 'Figma', color: 'text-purple-600' }
  ];

  const handleLinkClick = (url: string, event: React.MouseEvent) => {
    // Prevenir que el evento se propague al contenedor padre
    event.stopPropagation();
    
    console.log('Intentando abrir URL:', url); // Debug
    
    if (url && url !== '#') {
      // Limpiar la URL de posibles caracteres problemáticos
      const cleanUrl = url.trim();
      
      // Verificar si es una URL válida
      try {
        new URL(cleanUrl);
      } catch (urlError) {
        console.error('URL inválida:', cleanUrl);
        alert('URL inválida: ' + cleanUrl);
        return;
      }
      
      // Intentar abrir la URL de diferentes maneras para asegurar compatibilidad
      try {
        // Método principal
        const opened = window.open(cleanUrl, '_blank', 'noopener,noreferrer');
        
        // Verificar si se abrió correctamente
        if (!opened || opened.closed || typeof opened.closed == 'undefined') {
          throw new Error('Popup bloqueado');
        }
        
        console.log('URL abierta exitosamente'); // Debug
      } catch (error) {
        console.log('Método principal falló, intentando alternativo:', error); // Debug
        
        // Método alternativo si el primero falla
        try {
          const link = document.createElement('a');
          link.href = cleanUrl;
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          console.log('URL abierta con método alternativo'); // Debug
        } catch (altError) {
          console.error('Ambos métodos fallaron:', altError);
          // Como último recurso, mostrar la URL para que el usuario la copie
          alert('No se puede abrir automáticamente. URL: ' + cleanUrl);
        }
      }
    } else {
      console.log('URL vacía o marcador:', url); // Debug
    }
  };

  const toggleShowLinks = (event: React.MouseEvent) => {
    // Solo alternar si el click fue en el contenedor principal, no en un botón
    if (event.target === event.currentTarget || 
        (event.target as HTMLElement).closest('.process-header')) {
      setShowLinks(!showLinks);
    }
  };

  return (
    <div className="relative">
      <div 
        className="bg-white bg-opacity-90 p-4 rounded-lg border-l-4 border-blue-500 transition-all duration-300 cursor-pointer hover:bg-opacity-100 hover:scale-105 hover:shadow-lg"
        onClick={toggleShowLinks}
      >
        <div className="flex items-center justify-between process-header">
          <span className="text-sm font-medium text-gray-800">{process.name}</span>
          <ExternalLink className="w-4 h-4 text-gray-500" />
        </div>
      </div>

      {showLinks && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border z-10 overflow-hidden">
          {linkTypes.map(({ key, icon: Icon, label, color }) => {
            const url = process.links[key as keyof typeof process.links];
            const isDisabled = !url || url === '#';
            
            return (
              <button
                key={key}
                onClick={(event) => handleLinkClick(url, event)}
                disabled={isDisabled}
                className={`w-full px-4 py-3 text-left transition-colors flex items-center gap-3 ${
                  isDisabled 
                    ? 'opacity-50 cursor-not-allowed bg-gray-50' 
                    : 'cursor-pointer hover:bg-blue-50 active:bg-blue-100'
                }`}
                type="button"
              >
                <Icon className={`w-4 h-4 ${color}`} />
                <span className="text-sm font-medium">{label}</span>
                {!isDisabled && <ExternalLink className="w-3 h-3 text-gray-400 ml-auto" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProcessBox;