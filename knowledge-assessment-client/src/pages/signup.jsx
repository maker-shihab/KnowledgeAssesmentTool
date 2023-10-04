import { Button, Input, Typography } from '@mui/joy';
import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { SlEnvolope } from 'react-icons/sl';
import { Link } from 'react-router-dom';

const signup = () => {
  return (
    <div className='signup auth_page'>
      <div className="auth_container">
        <div className="auth_wrapper">
          <div className="auth_form">
            <div className="auth_header">
              <Link to="/" className="logo">
                <img src='/images/logo.svg' alt="logo" />
              </Link>
              <h2 className='auto_title'>Create your account and start using QuizWiz!</h2>
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
                <div className="twoItemsDevider">
                  <div className="single_input">
                    <Typography variant="body1">Your first name</Typography>
                    <Input
                      size="sm"
                      startDecorator={<SlEnvolope />}
                      placeholder="Type your first name"
                      type="text"
                    />
                  </div>
                  <div className="single_input">
                    <Typography variant="body1">Your last name</Typography>
                    <Input
                      size="sm"
                      startDecorator={<SlEnvolope />}
                      placeholder="Type your last name"
                      type="text"
                    />
                  </div>
                </div>
                <div className="single_input">
                  <Typography variant="body1">Your email address</Typography>
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
                    placeholder="Type your password"
                    type="email"
                  />
                </div>
                <div className="form_submit">
                  <Button variant="solid" endDecorator={<BsFillCheckCircleFill />}>
                    Sign Up
                  </Button>
                </div>
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

export default signup;