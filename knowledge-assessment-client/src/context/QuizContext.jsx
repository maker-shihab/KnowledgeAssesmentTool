import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export function useQuiz() {
  return useContext(QuizContext);
}

export function QuizProvider({ children }) {
  const [currentScreen, setCurrentScreen] = useState('SplashScreen');
  const [quizTopic, setQuizTopic] = useState('React');
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState([]);
  const [timer, setTimer] = useState(15);
  const [endTime, setEndTime] = useState(0);
  const [quizDetails, setQuizDetails] = useState({
    totalQuestions: 0,
    totalScore: 0,
    totalTime: 0,
    selectedQuizTopic: 'React',
  });

  const selectQuizTopic = (topic) => {
    setQuizTopic(topic);
  };

  const quizContextValue = {
    currentScreen,
    setCurrentScreen,
    quizTopic,
    selectQuizTopic,
    questions,
    setQuestions,
    result,
    setResult,
    quizDetails,
    setQuizDetails,
    timer,
    setTimer,
    endTime,
    setEndTime,
  };

  return <QuizContext.Provider value={quizContextValue}>{children}</QuizContext.Provider>;
}
