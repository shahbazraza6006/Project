import React, { useState } from 'react';
import './mobilenav.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Import the appropriate icon from react-icons
import evolve from "../../assets/evolve.jpeg";

export default function MobileNav() {
  const [showMenu, setShowMenu] = useState(false);
  
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="mobileNav">
      <div className="main-bar">
      <div className='logo'>
          <img src={evolve} alt="logo" />
        </div>
        <div>
        <FaBars onClick={handleMenu} className={showMenu ? "rotate-icon" : ""}  style={{ fontSize: '28px' }}  />
        </div>
       
      </div>
      {showMenu && (
        <div className="mobileNav-menu">
          <div className="menu-linkContainer">
            <Link className="menu-link" to="/home">
              Home
            </Link>
          </div>
          <div className="menu-linkContainer">
            <Link className="menu-link" to="/home">
              About Us
            </Link>
          </div>
          <div className="menu-linkContainer">
            <Link className="menu-link" to="/home">
              All Courses
            </Link>
          </div>
          <div className="menu-linkContainer">
            <Link className="menu-link" to="/contact">
              Contact Us
            </Link>
          </div>

          
          <div className='nav-search'>
            <input type='text' placeholder='Search'></input>
            </div>
          

          <div className="mobile-navBtn loginContainer">
            <Link className="btnLink">
              <button className="mobileBtn loginBtn">Search</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
