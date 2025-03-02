import * as React from 'react';
import type { IZiv1Props } from './IZiv1Props';
import '../../../../assets/dist/tailwind.css';
import Card from "./Card";


    const Ziv1: React.FC<IZiv1Props> = (props) => {
      const { trainingData } = props;
    
      console.log(trainingData);

    return (
<div className="w-full border-red-900 border-8 relative overflow-x-hidden">
  <div className="p-1 text-4xl text-red-900 text-center font-sans">
    <h1>Moshe Ashkenazi</h1>
    <div id="carousel"
         className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth p-4"
         style={{ scrollSnapType: 'x mandatory', width: '100%', display: 'flex', flexWrap: 'nowrap' }}>
      {trainingData.producttraining.map((e, i) => (
        <Card key={i} data={e} />
      ))}
    </div>
  </div>
</div>

  );
  };

  export default Ziv1;