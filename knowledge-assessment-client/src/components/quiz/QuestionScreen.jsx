import React from 'react';
import '../../assets/css/global.css';
import { useQuiz } from '../../context/QuizContext';

const QuestionScreen = () => {
  const { questions, setCurrentScreen } = useQuiz();
  console.log(questions);
  const handleFinishQuiz = () => {
    setCurrentScreen('ResultScreen');
  };

  return (
    <div>
      <h2>Question Screen</h2>
      <button onClick={handleFinishQuiz}>Finish Quiz</button>
    </div>
  );
};

export default QuestionScreen;
