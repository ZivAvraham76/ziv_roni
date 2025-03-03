import '../../../../assets/dist/tailwind.css';
import * as React from "react";

interface CardProps {
  // If you want to pass in props dynamically, you could define them here.
  // For this demo, we'll keep the content hard-coded.
  data: {
    litmosLearningPathName: string;
    pillar: string;
    productName: string;
    litmosLearningPathUrl: string;
    PercentageComplete: number;
    levelName : string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="rounded-lg shadow flex-none w-1/4 overflow-visible p-1 relative border-2 border-[#41273c]">

      {/* Image Section */}
      <img
        className="w-full h-auto object-cover"
        src="https://picsum.photos/160"
        alt=""
      />
      <div className="absolute top-2 left-2">
        <svg width="107" height="23" viewBox="0 0 107 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M106 1H1V22H106L100.653 12L106 1Z" fill="white" stroke="#F1F1F1"/>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xs text-[#41273c]0 font-semibold">
            {data.levelName || 'Level'}
        </div>
      </div>

      {/* Text Section */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          {data.litmosLearningPathName}
        </h2>
        {/* <p className="text-gray-700 mb-4 text-sm">
          You completed {data.PercentageComplete}% of the training module
        </p> */}

<div className="absolute bottom-2 right-2 size-8">
  <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200 dark:text-neutral-700" stroke-width="2"></circle>
    <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-blue-600 dark:text-blue-500" stroke-width="2" stroke-dasharray="50 100" stroke-dashoffset="65" stroke-linecap="round"></circle>
  </svg>

  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-center text-xs font-bold text-blue-600 dark:text-blue-500">{data.PercentageComplete}%</span>
  </div>
</div>

        {/* Read More Button */}
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 hover:underline"
          onClick={() => window.open(data.litmosLearningPathUrl, `_blank`)}
        >
          Read more →
        </button>
      </div>
    </div>
  );
};

export default Card;
