export interface Question  { multiplicand: number, multiplier: number}


export interface RangeContextType {
    minMultiplier: number;
    maxMultiplier: number;
    setMinMultiplier: (minMultiplier: number) => void;
    setMaxMultiplier: (maxMultiplier: number) => void;
  }
