import '../../../../assets/dist/tailwind.css';
import * as React from "react";

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
  return (
    <div className="h-[238px] w-[180px] rounded-lg border-2 border-[#41273c] flex-col justify-start items-end inline-flex overflow-hidden">

      {/* Header Section: Image & Level Label */}
      <div className="relative w-full h-[100px] overflow-hidden">
        <img className="w-full h-full object-cover rounded-t-lg" src="https://picsum.photos/160" alt="Course" />

        {/* Level Badge */}
        <div className="absolute top-2 left-2">
          <svg width="107" height="23" viewBox="0 0 107 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M106 1H1V22H106L100.653 12L106 1Z" fill="white" stroke="#F1F1F1"/>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xs text-[#41273c] font-semibold">
            {data.levelName || 'Level'}
          </div>
        </div>
      </div>

      {/* Content Section: Title & Description */}
      <div className="p-2 flex-grow overflow-y-auto max-h-[150px]">
        <h2 className="text-md font-semibold text-gray-800">{data.litmosLearningPathName}</h2>
        <p className="text-gray-600 text-xs">{data.productName}</p>
      </div>

      {/* Footer Section: Read More Button & Progress Ring */}
      <div className="absolute inset-x-0 bottom-2 flex items-center justify-between px-4">
        
        {/* Read More Button - Aligned Left */}
        <button className="py-1 text-sm font-medium text-blue-600 hover:underline"
          onClick={() => window.open(data.litmosLearningPathUrl, `_blank`)}>  
          Read more →
        </button>

        {/* Progress Ring - Aligned Right */}
        <div className="flex flex-col items-end">
          <div className="size-8 relative">
            <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" strokeWidth="2"></circle>
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-blue-500" strokeWidth="2"
                strokeDasharray="75 100" strokeDashoffset={`${75 - (data.PercentageComplete * 75 / 100)}`} strokeLinecap="round"></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-blue-600 text-right">{data.PercentageComplete}%</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
