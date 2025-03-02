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
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="bg-red-500 rounded-lg shadow flex-none w-1/4 overflow-visible p-1"
>
      {/* Image Section */}
      <img
        className="w-full h-auto object-cover"
        src="https://via.placeholder.com/80x80"
        alt=""
      />

      {/* Text Section */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          {data.litmosLearningPathName}
        </h2>
        <p className="text-gray-700 mb-4 text-sm">
          You completed {data.PercentageComplete}% of the training module
        </p>

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
