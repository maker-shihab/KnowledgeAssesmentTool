import React from 'react'
import QuizCp from '../components/quiz/QuizCp'
import { QuizProvider } from '../context/QuizContext'

const Quiz = () => {
  return (
    <QuizProvider>
      <QuizCp />
    </QuizProvider>
  )
}

export default Quiz