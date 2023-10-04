import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className="nav_container">
        <Link to='/'>Dashboard</Link>
        
      </div>
    </nav>
  );
};

export default Nav;