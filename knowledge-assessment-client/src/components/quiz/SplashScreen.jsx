import { useQuiz } from "../../context/QuizContext";


const SplashScreen = () => {
  const { setCurrentScreen } = useQuiz();

  const handleStartQuiz = () => {
    setCurrentScreen('QuestionScreen');
  };

  return (
    <div>
      <h1>Welcome to the Quiz</h1>
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default SplashScreen;
