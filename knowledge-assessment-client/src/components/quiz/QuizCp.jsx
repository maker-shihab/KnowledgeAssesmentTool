import React, { useState } from 'react';
import { generalKnowledge } from '../../data/QuizQuestion/generalKnowledge';
import { programming } from '../../data/QuizQuestion/programming';

const QuizCp = ({ quizType }) => {
  const selectedQuiz = quizType === 'GeneralKnowledge' ? generalKnowledge : programming;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    const currentQues = selectedQuiz.questions[currentQuestion];
    if (currentQues.type === 'boolean') {
      // Check if the selected answer matches the correct answer
      const isCorrect = selectedAnswer === currentQues.correctAnswers[0];
      if (isCorrect) {
        setScore(score + currentQues.score);
      }
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(''); // Reset selected answer for the next question
  };

  if (currentQuestion >= selectedQuiz.totalQuestions) {
    return (
      <div className="quiz_result_container">
      <div className='quiz_result'>
        <h2>Quiz Completed!</h2>
        <p>Your score: {score}</p>
      </div>
      </div>
    );
  }

  const currentQues = selectedQuiz.questions[currentQuestion];

  return (
    <div className='quizcp'>
      <div className="container">
        <h2>Question {currentQuestion + 1}</h2>
        <h3>{currentQues.question}</h3>
        <div className='quiz_questions'>
          {currentQues.choices.map((option, index) => (
            <div key={index} className='quiz_questions_options'>
              <input
                type={currentQues.type === 'boolean' ? 'radio' : 'checkbox'}
                id={index}
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={() => handleAnswerSelection(option)}
              />
              <label htmlFor={index}>{option}</label>
            </div>
          ))}
        </div>
        <button onClick={handleNextQuestion} className='btn btn_primary'>Next</button>
      </div>
    </div>
  );
};

export default QuizCp;
