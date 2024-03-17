// ParentComponent.tsx

import React, { createContext, useContext, useState } from 'react';
import DoubleRangeSlider from './DoubleRangeSlider';

interface RangeContextType {
  min: number;
  max: number;
  setMin: (min: number) => void;
  setMax: (max: number) => void;
}

const RangeContext = createContext<RangeContextType | undefined>(undefined);

const ParentComponent: React.FC = () => {
  const [min, setMin] = useState(3);
  const [max, setMax] = useState(5);

  const handleMinChange = (value: number) => {
    setMin(value);
  };

  const handleMaxChange = (value: number) => {
    setMax(value);
  };

  return (
    <RangeContext.Provider value={{ min, max, setMin: handleMinChange, setMax: handleMaxChange }}>
      <div>
        <DoubleRangeSlider />
      </div>
    </RangeContext.Provider>
  );
};

export default ParentComponent;
