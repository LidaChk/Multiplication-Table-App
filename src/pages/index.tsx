import { useState } from "react";

export default function Home(){
  const [minMultiplier, setMinMultiplier] = useState(1);
  const [maxMultiplier, setMaxMultiplier] = useState(10);
  const [currentQuestion, setCurrentQuestion] = useState({
    multiplicand: 0,
    multiplier: 0,
    userAnswer: '',
    correct: false,
  });

  const generateQuestion = () => {
    const multiplicand = Math.floor(Math.random() * (maxMultiplier - minMultiplier + 1)) + minMultiplier;
    const multiplier = Math.floor(Math.random() * (maxMultiplier - minMultiplier + 1)) + minMultiplier;
    setCurrentQuestion({ multiplicand, multiplier, userAnswer: '', correct: false });
  };

  const checkAnswer = () => {
    const correctAnswer = currentQuestion.multiplicand * currentQuestion.multiplier;
    setCurrentQuestion((prevQuestion) => ({
      ...prevQuestion,
      correct: parseInt(prevQuestion.userAnswer, 10) === correctAnswer,
    }));
  };

  return (
    <div>
      <label htmlFor="minMultiplier">Min Multiplier:</label>
      <input type="number" id="minMultiplier" value={minMultiplier} onChange={(e) => setMinMultiplier(parseInt(e.target.value, 10))} />
      <label htmlFor="maxMultiplier">Max Multiplier:</label>
      <input type="number" id="maxMultiplier" value={maxMultiplier} onChange={(e) => setMaxMultiplier(parseInt(e.target.value, 10))} />
      <button onClick={generateQuestion}>Generate Question</button>
      <div>
        {currentQuestion.multiplicand} x {currentQuestion.multiplier} =
        <input type="number" value={currentQuestion.userAnswer} onChange={(e) => setCurrentQuestion({ ...currentQuestion, userAnswer: e.target.value })} />
        <button onClick={checkAnswer}>Check Answer</button>
        {currentQuestion.correct ? <span>Correct!</span> : <span>Incorrect. Try again.</span>}
      </div>
    </div>
  );
};
