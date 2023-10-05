import React from 'react';

const QuizCard = () => {
  return (
    <div className='quizCard'>
      <div className="quizCardThumb">
        <img src="/images/card-thumb-1.png" alt="thumb" />
      </div>
      <div className="quizCardText">
        <h3>Introduction to computer programming</h3>
        <ul>
          <li>
            12 / 03 / 2023
          </li>
          <li>
            09:00 AM
          </li>
        </ul>
        <div className="quizCardTextFooter">
          <p>No. of student's enrolled: 32</p>
          <button type='button' onClick='handaleCard'>
            Open 
            <img src="/images/cardArrowBtn.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;