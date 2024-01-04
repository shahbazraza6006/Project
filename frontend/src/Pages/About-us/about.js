import React from "react";
import MediaQuery from "react-responsive";
import Navbars from "../../components/Navbar/Navbar";
import MobileNav from "../../components/Navbar/MobileNav";
import chatbot from "../../assets/chatbot.png";
import mic from "../../assets/mic.png";
import { SocialIcon } from "react-social-icons";
import "./about.css";

export default function About() {
  return (
    <div>
      <MediaQuery minWidth={720}>
        {(matches) => (matches ? <Navbars /> : <MobileNav />)}
      </MediaQuery>
      <div className="micimage">
        <img src={mic} alt="mic" />
      </div>
      <div className="about-container">
        <div className="about-box">
          <h2>E-volve: Creating Futures, Empowering Minds</h2>
          <p>
            We believe in the transforming potential of education at E-volve.
            Our objective is to deliver a dynamic online learning environment
            where knowledge meets innovation and learners engage on a continual
            evolution adventure.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-topmiddle">
              <h2>We Are Here To Help</h2>
            </div>
            <div className="contact-left">
              <p>
                <span className="con">Contact:</span> +447375344393
              </p>
              <p>
                <span className="con">Contact:</span> +44 0121 204 3000
              </p>
              <p>
                <span className="con">
                  Address: Aston St, Birmingham B4 7ET
                </span>
              </p>
            </div>

            <div className="contact-right">
              <div className="social-media">
                <SocialIcon url="https://facebook.com" network="facebook" />
                <SocialIcon url="https://instgram.com" network="instagram" />
                <SocialIcon url="https://twitter.com" network="twitter" />
                <SocialIcon url="https://linkedin.com" network="linkedin" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="botbuttons">
        <img src={chatbot} alt="chatbot" />
      </div>
    </div>
  );
}
