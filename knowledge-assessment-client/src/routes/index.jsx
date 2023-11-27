import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../pages/contact'
import Home from '../pages/home'
import Login from '../pages/login'
import Quiz from '../pages/quiz'
import Signup from '../pages/signup'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  )
}

export default AppRouter