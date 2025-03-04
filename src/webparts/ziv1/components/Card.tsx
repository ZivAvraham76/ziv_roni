import '../../../../assets/dist/tailwind.css';
import * as React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

interface CardProps {
  data: {
    litmosLearningPathName: string;
    pillar: string;
    productName: string;
    litmosLearningPathUrl: string;
    PercentageComplete: number;
    levelName: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
    const percentage = Math.max(0, Math.min(100, data.PercentageComplete));
  return (
    <div className="h-[238px] w-[180px] rounded-lg border-2 border-[#41273c] flex-col justify-start items-end inline-flex overflow-hidden">
        <CardHeader levelName={data.levelName} />
        <CardBody litmosLearningPathName={data.litmosLearningPathName} litmosLearningPathUrl={data.litmosLearningPathUrl} PercentageComplete={percentage} />
    </div>
  );
};

export default Card;
