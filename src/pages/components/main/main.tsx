import { useState, createContext, useMemo, useCallback } from 'react';

import { RangeContextType } from '@/types/types';
import { Button } from '@mantine/core';
import DoubleRangeSlider from '../DoubleRangeSlider/DoubleRangeSlider';
import style from './main.module.scss';

export const RangeContext = createContext<RangeContextType>({
  minMultiplier: 1,
  maxMultiplier: 10,
  setMinMultiplier: () => {},
  setMaxMultiplier: () => {},
});

export default function Main() {
  const [minMultiplier, setMinMultiplier] = useState(1);
  const [maxMultiplier, setMaxMultiplier] = useState(10);
  const [currentQuestion, setCurrentQuestion] = useState({
    multiplicand: 0,
    multiplier: 0,
    userAnswer: '',
    correct: false,
  });

  const handleMinChange = useCallback((value: number) => {
    setMinMultiplier(value);
  }, []);

  const handleMaxChange = useCallback((value: number) => {
    setMaxMultiplier(value);
  }, []);

  const generateQuestion = () => {
    const multiplicand =
      Math.floor(Math.random() * (maxMultiplier - minMultiplier + 1)) +
      minMultiplier;
    const multiplier =
      Math.floor(Math.random() * (maxMultiplier - minMultiplier + 1)) +
      minMultiplier;
    setCurrentQuestion({
      multiplicand,
      multiplier,
      userAnswer: '',
      correct: false,
    });
  };

  const checkAnswer = () => {
    const correctAnswer =
      currentQuestion.multiplicand * currentQuestion.multiplier;
    setCurrentQuestion((prevQuestion) => ({
      ...prevQuestion,
      correct: parseInt(prevQuestion.userAnswer, 10) === correctAnswer,
    }));
  };

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
        <Button onClick={generateQuestion}>Generate</Button>
        <div>
          {currentQuestion.multiplicand} x {currentQuestion.multiplier} =
          <input
            type="number"
            value={currentQuestion.userAnswer}
            onChange={(e) =>
              setCurrentQuestion({
                ...currentQuestion,
                userAnswer: e.target.value,
              })
            }
          />
          <button onClick={checkAnswer}>Check Answer</button>
          {currentQuestion.correct ? (
            <span>Correct!</span>
          ) : (
            <span>Incorrect. Try again.</span>
          )}
        </div>
      </RangeContext.Provider>
    </main>
  );
}
