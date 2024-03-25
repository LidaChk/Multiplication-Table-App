import { useState, createContext, useMemo, useCallback } from 'react';

import { QuestionListParams, RangeContextType } from '@/types/types';
import { Button } from '@mantine/core';
import DoubleRangeSlider from '../DoubleRangeSlider/DoubleRangeSlider';
import style from './main.module.scss';
import Carousel from '../Carousel/Carousel';

export const RangeContext = createContext<RangeContextType>({
  minMultiplier: 1,
  maxMultiplier: 10,
  setMinMultiplier: () => {},
  setMaxMultiplier: () => {},
});

export default function Main() {
  const [minMultiplier, setMinMultiplier] = useState(1);
  const [maxMultiplier, setMaxMultiplier] = useState(10);

  const handleMinChange = useCallback((value: number) => {
    setMinMultiplier(value);
  }, []);

  const handleMaxChange = useCallback((value: number) => {
    setMaxMultiplier(value);
  }, []);

  const contextValue = useMemo(
    () => ({
      minMultiplier,
      maxMultiplier,
      setMinMultiplier: handleMinChange,
      setMaxMultiplier: handleMaxChange,
    }),
    [minMultiplier, maxMultiplier, handleMinChange, handleMaxChange]
  );

  return (
    <main className={style.main}>
      <RangeContext.Provider value={contextValue}>
        <DoubleRangeSlider />
      </RangeContext.Provider>
      <Carousel minMultiplier={minMultiplier} maxMultiplier={maxMultiplier} />

    </main>
  );
}
