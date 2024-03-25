export interface Question {
  multiplicand: number;
  multiplier: number;
  answer: number;
}
export interface QuestionListParams {
  minMultiplier: number;
  maxMultiplier: number;
}

export interface RangeContextType extends QuestionListParams {
  setMinMultiplier: (minMultiplier: number) => void;
  setMaxMultiplier: (maxMultiplier: number) => void;
}
