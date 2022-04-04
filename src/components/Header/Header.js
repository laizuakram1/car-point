import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
          <div>
              <p className='text-3xl'>Laizu Car Point</p>
          </div>
          <div className='navLink'>
              <Link to='/'>Home</Link>
              <Link to='/review'>Review</Link>
              <Link to='/dashboard'>Dashboard</Link>
              <Link to='/blogs'>Blogs</Link>
              <Link to='/about'>About</Link>
          </div>
        </div>
    );
};

export default Header;