import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const QuizTitleHead = () => {
  return (
    <div className="up_quizHeader">
      <h3>Upcoming quizzes</h3>
      <Link to='/quiz/:quiz'>
        Quiz directory <span><BsArrowRight /></span>
      </Link>
    </div>
  );
};

export default QuizTitleHead;