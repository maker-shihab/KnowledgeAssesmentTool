import { Button, Typography } from '@mui/joy';
import Input from '@mui/joy/Input';
import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { SlEnvolope } from 'react-icons/sl';
import { Link } from 'react-router-dom';


const login = () => {
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
              <button>
                [ICON]
                <span>Sign in as a tutor</span>
              </button> 
              
              <button>
                [ICON]
                <span>Sign in as a learner</span>
              </button> 

              <button>
                [ICON]
                <span>Create Account</span>
              </button>
            </div>
            <div className="auth_main_form">
              <form>
                <div className="single_input">
                <Typography variant="body1">Registered email address</Typography>
                  <Input
                    size="sm"
                    startDecorator={<SlEnvolope />}
                    placeholder="Type your email"
                    type="email"
                  />
                </div>
                <div className="single_input">
                  <Typography variant="body1">Password</Typography>
                  <Input
                    size="sm"
                    startDecorator={<SlEnvolope />}
                    placeholder="Type your email"
                    type="email"
                  />
                </div>
                <div className="form_submit">
                  <Button variant="solid" endDecorator={<BsFillCheckCircleFill />}>
                    Solid
                  </Button>
                </div>
                <Typography variant="body1">
                  Forgot password? <Link to='/login'>Click here</Link>
                </Typography>
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

export default login;