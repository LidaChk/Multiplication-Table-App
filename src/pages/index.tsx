import { useState, createContext, useMemo, useCallback } from 'react';
import DoubleRangeSlider from './components/DoubleRangeSlider/DoubleRangeSlider';
import { RangeContextType } from '@/types/types';
import { createTheme, MantineProvider, Button } from '@mantine/core';
import Main from './components/main/main';

const theme = createTheme({
  /** Put your mantine theme override here */
});


export default function Home() {

  return (
    <MantineProvider>
      <Main />
    </MantineProvider>
  );
}
