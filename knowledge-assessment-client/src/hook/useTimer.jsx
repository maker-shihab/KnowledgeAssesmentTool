import { useEffect } from 'react';

const useTimer = (
  timer,
  quizDetails,
  setEndTime,
  setTimer,
  setShowTimerModal,
  showResultModal
) => {
  useEffect(() => {
    if (timer <= 0) {
      const timeTaken = quizDetails.totalTime;
      setEndTime(timeTaken);
      setShowTimerModal(true);
      setTimer(0);
    }
  }, [timer, quizDetails.totalTime, setEndTime, setShowTimerModal, setTimer]);

  useEffect(() => {
    if (!showResultModal) {
      const countTimer = setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearTimeout(countTimer);
    }
  }, [timer, setTimer, showResultModal]);
};

export default useTimer;
