import * as React from 'react';
import '../../../../assets/dist/tailwind.css';

// Define the props for the CourseFilter component
interface PillarsProps {
    selectedFilter: string;// Currently selected filter value
    onFilterChange: (filter: string) => void;// Callback function to handle filter changes
}

const Pillars: React.FC<PillarsProps> = ({ selectedFilter, onFilterChange }) => {
    const filters = ['Quantum', 'Harmony', 'CloudGuard', 'Infinity'];

    return (
        <div className="flex items-center gap-2">
        <div className="text-[#41273c] text-lg">Pillar</div>
        <div className="h-8 flex border border-[#41273c] rounded-full overflow-hidden divide-x divide-[#41273c] flex-shrink-0">
            {filters.map((filter) => (
                <button
                    key={filter}
                    className={`px-3 py-1 text-sm font-medium transition-colors duration-200 
                        ${selectedFilter === filter ? 'bg-[#41273c] text-white' : 'bg-white text-[#41273c] hover'}`}
                    onClick={() => onFilterChange(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
        </div>
    );
};

export default Pillars;
