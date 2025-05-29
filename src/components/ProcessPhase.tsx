
import { Phase } from "@/types/processTypes";
import ProcessBox from "./ProcessBox";

interface ProcessPhaseProps {
  phase: Phase;
}

const ProcessPhase = ({ phase }: ProcessPhaseProps) => {
  const getPhaseColor = (id: string) => {
    const colors = {
      config: "bg-gradient-to-br from-blue-50 to-blue-100",
      client: "bg-gradient-to-br from-purple-50 to-purple-100", 
      operConfig: "bg-gradient-to-br from-green-50 to-green-100",
      specialized: "bg-gradient-to-br from-orange-50 to-orange-100",
      mainOper: "bg-gradient-to-br from-sky-50 to-sky-100",
      tracking: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      financial: "bg-gradient-to-br from-pink-50 to-pink-100",
      risk: "bg-gradient-to-br from-red-50 to-red-100",
      support: "bg-gradient-to-br from-emerald-50 to-emerald-100"
    };
    return colors[id as keyof typeof colors] || "bg-gray-50";
  };

  return (
    <div className={`mb-10 p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${getPhaseColor(phase.id)}`}>
      <div className="flex items-center text-xl font-bold mb-4 pb-3 border-b-2 border-white border-opacity-50">
        <span className="text-2xl mr-3">{phase.icon}</span>
        {phase.title}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {phase.processes.map((process) => (
          <ProcessBox key={process.id} process={process} />
        ))}
      </div>
    </div>
  );
};

export default ProcessPhase;
