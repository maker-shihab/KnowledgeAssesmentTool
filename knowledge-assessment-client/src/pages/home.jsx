import React from 'react';
import QuizCard from '../components/QuizCard';
import Header from '../components/common/Header';

const Home = () => {
  return (
    <>
      <Header />
      <div className='upcoming_quiz'>
        {/* Here is quiz components */}
        <QuizCard />
      </div>
    </>
  );
};

export default Home;