import React, { useState } from 'react';
import { FaUserGraduate, FaUserPlus, FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {

  const [selectedValue, setSelectedValue] = useState('');
  const [isHidden, setIsHidden] = useState(true);

  const handleButtonClick = (value) => {
    setSelectedValue(value);
    setIsHidden(false);
  };

  return (
    <div className='login auth_page'>
      <div className="auth_container">
        <div className="auth_wrapper">
          <div className="auth_form">
            <div className="auth_header">
              <Link to="/" className="logo">
                <img src='/images/logo.svg' alt="logo" />
              </Link>
              <h2 className='auto_title'>Continue your learning journey with QuizWiz!</h2>
            </div>
            <div className="auto_routes">
              <button
                type="button"
                className={selectedValue === 'tutor' ? 'active' : ''}
                onClick={() => handleButtonClick('tutor')}
              >
                <span><FaUserTie /></span>
                <span>Sign in as a tutor</span>
              </button>

              <button
                type="button"
                className={selectedValue === 'learner' ? 'active' : ''}
                onClick={() => handleButtonClick('learner')}
              >
                <span><FaUserGraduate /></span>
                <span>Sign in as a learner</span>
              </button>

              <button
                type="button"
                className={selectedValue === 'createAccount' ? 'active' : ''}
                onClick={() => handleButtonClick('createAccount')}
              >
                <span><FaUserPlus /></span>
                <span>Create Account</span>
              </button>
              {!isHidden && <p className='selectValue_hidden'>{selectedValue}</p>}
            </div>
            <div className="auth_main_form">
              <form>
                <div className="single_input">
                  <label htmlFor="auth_mail">Registered email address</label>
                  <div className="input_field">
                    <input placeholder="Type your email"
                      type="email" />
                  </div>
                </div>
                <div className="single_input">
                  <label htmlFor="auto_pas">Password</label>
                  <div className='input_field'>
                    <input type="password" placeholder="Type your password" />
                  </div>
                </div>
                <div className="form_submit">
                  <button type='button'>
                    Sign In
                  </button>
                </div>
                <p className='form_redirect'>If you are a new user, you can <Link to="/signup">Sign up here</Link>.</p>
              </form>
            </div>
          </div>
          <div className="auth_illustration">
            <img src='/images/login.svg' alt="illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;