import * as React from "react";
import '../../../../assets/dist/tailwind.css';

interface ProgressRingProps {
    percentage: number;
}

const ProgressRing: React.FC<ProgressRingProps> = ({ percentage }) => {
    const validPercentage = Math.max(0, Math.min(100, percentage));

    return (
        <div className="relative w-8 h-8 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                {/* Background Circle */}
                <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="2"></circle>
                {/* Foreground Circle */}
                <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-[#41273c]"
                    strokeWidth="2"
                    strokeDasharray="100"
                    strokeDashoffset={100 - validPercentage}
                    strokeLinecap="round"
                ></circle>
            </svg>
            {/* Progress Percentage Text */}
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#41273c]">
                {validPercentage}%
            </div>
        </div>
    );
};

export default ProgressRing;