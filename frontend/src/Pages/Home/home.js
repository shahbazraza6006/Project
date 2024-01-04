import React from 'react';
import './home.css';
import essay from "../../assets/home/essay.jpg";
import mcq from "../../assets/home/mcq.jpg";
import rubric from "../../assets/home/rubric.jpg";
import english from "../../assets/home/english.jpg";
import science from "../../assets/home/science.jpg";
import history from "../../assets/home/history.jpg";
import maths from "../../assets/home/maths.jpg";
import geography from "../../assets/home/geography.jpg";
import Navbars from '../../components/Navbar/Navbar';
import MobileNav from'../../components/Navbar/MobileNav';
import MediaQuery from 'react-responsive';
import chatbot from "../../assets/chatbot.png";
import evolve from "../../assets/evolve.jpeg";
import mic from "../../assets/mic.png";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    
    <div >
   <MediaQuery minWidth={720}>
            {(matches) =>
                matches ? <Navbars></Navbars> : <MobileNav></MobileNav>
            }
    </MediaQuery>
      <div className='micimage'>
        <img src={mic} alt="mic" />
      </div>
   <div className="grid-container">

  
      <div className="grid-item">
        <Link to='/essay'>
        <img src={essay} alt="essayPicture" />
        <p className="name">2023_CS2EC</p>
        <div className="description">
        <p className="description">2023_CS2EC Essay Create  </p>
        </div>
        <div className='open'>
        <p >Open</p>
        </div>
        </Link>
      </div>
      <div className="grid-item">
        <a href='/rubric'>
        <img src={rubric} alt="rubric" />
        <p className="name">2023_CS2R</p>
        <div className="description">
        <p className="description">2023_CS2R Rubrics </p>
        </div>
        <div className='open'>
        <p >Open</p>
        
        </div>
        </a>
      </div>
      <div className="grid-item">
        <a href='/mcq'>
        <img src={mcq} alt="mcqs" />
        <p className="name">2023_CS2MCQ</p>
        <div className="description">
        <p className="description">2023_CS2MCQ Introduction to Multiple Choice Questions </p>
        </div>
        <div className='open'>
        <p >Open</p>
        </div>
        </a>
      </div>
      <div className="grid-item">
        <a href='/english'>
        <img src={english} alt="english" />
        <p className="name">2023_CS2IE</p>
        <div className="description">
        <p className="description">2023_CS2IE Introduction to English </p>
        </div>
        <div className='open'>
        <p >Open</p>
        </div>
        </a>
      </div>
      <div className="grid-item">
        <a href='/science'>
        <img src={science} alt="science" />
        <p className="name">2023_CS2IS</p>
        <div className="description">
        <p className="description">2023_CS2IS Introduction to Science</p>
        </div>
        <div className='open'>
        <p >Open</p>
        </div>
        </a>
      </div>
      <div className="grid-item">
        <a href='/history'>
        <img src={history} alt="history" />
        <p className="name">2023_CS2IH</p>
        <div className="description">
        <p className="description">2023_CS2IH Introduction to History </p>
        </div>
        <div className='open'>
        <p >Open</p>
        </div>
        </a>
      </div>
      <div className="grid-item">
        <a href='/maths'>
        <img src={maths} alt="maths" />
        <p className="name">2023_CS2IM</p>
        <div className="description">
        <p className="description">2023_CS2IM Introduction to Maths </p>
        </div>
        <div className='open'>
        <p >Open</p>
        </div>
        </a>
      </div>
      <div className="grid-item">
        <a href='/geography'>
        <img src={geography} alt="geography" />
        <p className="name">2023_CS2IG</p>
        <div className="description">
        <p className="description">2023_CS2IG Introduction to Geography </p>
        </div>
        <div className='open'>
        <p >Open</p>
        </div>
        </a>
      </div>
     
      </div>
      <div className='botbuttons'>
     
            <img src={chatbot} alt="chatbot" />
      </div>
    </div>
  );
};

export default Home;
