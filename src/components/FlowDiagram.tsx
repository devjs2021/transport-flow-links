
import { useState } from "react";
import { processData } from "@/data/processData";
import ProcessPhase from "./ProcessPhase";
import Legend from "./Legend";

const FlowDiagram = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-5">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 drop-shadow-lg">
          🚛 Diagrama de Flujo - Proceso de Transporte
        </h1>
        
        {processData.map((phase, index) => (
          <div key={phase.id}>
            <ProcessPhase phase={phase} />
            {index < processData.length - 1 && (
              <div className="text-center text-4xl text-gray-500 my-5">
                {index === 2 || index === 6 ? (
                  <div className="flex justify-center items-center my-8">
                    <div className="w-48 h-1 bg-gradient-to-r from-blue-500 to-purple-600 relative overflow-hidden rounded">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-pulse"></div>
                    </div>
                  </div>
                ) : (
                  <div className="animate-bounce">⬇️</div>
                )}
              </div>
            )}
          </div>
        ))}
        
        <Legend />
      </div>
    </div>
  );
};

export default FlowDiagram;
