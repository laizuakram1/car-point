import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
        <div>
            
          <div className='Link'>
              
              <Link className='mr-8 text-danger' to='/'>Home</Link>
              <Link className='mr-8' to='/review'>Review</Link>
              <Link className='mr-8' to='/dashboard'>Dashboard</Link>
              <Link className='mr-8' to='/blogs'>Blogs</Link>
              <Link className='mr-8' to='/about'>About</Link>
          </div>
        </div>
    );
};

export default Header;