import React from 'react';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { MdAddTask } from 'react-icons/md';
import { RiBarChartHorizontalLine } from 'react-icons/ri';

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <div className="header_wrapper">
          <div className="menuBar">
            <RiBarChartHorizontalLine />
          </div>
          <div className="header_logo">
            <img src='/images/logo.svg' alt="logo" />
          </div>
        </div>
        <div className="menu_dashboard">
          <h3>Dashboard</h3>
          <button type='button'>
            <MdAddTask />
            <span>New quiz</span>
          </button>
        </div>
        <div className="menu_action">
          <ul>
            <li className='action_item'>
              <button>
                <BsFillEnvelopeFill />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;