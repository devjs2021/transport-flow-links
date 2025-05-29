
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

  const handleLinkClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="relative">
      <div 
        className="bg-white bg-opacity-90 p-4 rounded-lg border-l-4 border-blue-500 transition-all duration-300 cursor-pointer hover:bg-opacity-100 hover:scale-105 hover:shadow-lg"
        onClick={() => setShowLinks(!showLinks)}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-800">{process.name}</span>
          <ExternalLink className="w-4 h-4 text-gray-500" />
        </div>
      </div>

      {showLinks && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border z-10 overflow-hidden">
          {linkTypes.map(({ key, icon: Icon, label, color }) => {
            const url = process.links[key as keyof typeof process.links];
            return (
              <button
                key={key}
                onClick={() => handleLinkClick(url)}
                disabled={!url || url === '#'}
                className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                  !url || url === '#' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                <Icon className={`w-4 h-4 ${color}`} />
                <span className="text-sm font-medium">{label}</span>
                {url && url !== '#' && <ExternalLink className="w-3 h-3 text-gray-400 ml-auto" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProcessBox;
