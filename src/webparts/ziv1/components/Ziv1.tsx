import * as React from 'react';
import { useState } from 'react';
import type { IZiv1Props } from './IZiv1Props';
import '../../../../assets/dist/tailwind.css';
import Pillars from './Pillars';
import Levels from './Levels';
import Carousel from './Carousel';

const Ziv1: React.FC<IZiv1Props> = (props) => {
  const { trainingData } = props;
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');

  return (
    <div className="w-full relative overflow-hidden p-4">
      <h1 className="text-[#ee0c5d] text-[22px] mb-8 font-semibold">Technical Training</h1>
      <div className="flex items-center justify-start space-x-2 p-2 max-w-[400px] mb-8">
        <Pillars selectedFilter={selectedFilter} onFilterChange={setSelectedFilter} />
        <Levels selectedLevel={selectedLevel} onLevelChange={setSelectedLevel} />
      </div>
      
      {/* קרוסלה */}
      <Carousel courses={trainingData.producttraining} selectedFilter={selectedFilter} selectedLevel={selectedLevel} />
    </div>
  );
};

export default Ziv1;
