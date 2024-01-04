import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

import evolve from "../../assets/evolve.jpeg";

export default function Navbars() {
  return (
    <div>
      <div className='navbar'>
       <div className='logo'>
          <img src={evolve} alt="logo" />
          </div>
        <div className='nav-links'>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/home'>All Courses</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
          </ul>
          </div>
          <div className='navsearch'>
            <input type='text' placeholder='Search'></input>
            <button type='submit'>Search</button>
            </div> 
      </div>
    </div>
  );
}
