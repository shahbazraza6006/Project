import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import mic from "../../assets/mic.png";
import chatbot from "../../assets/chatbot.png";
import { useNavigate ,Link} from "react-router-dom";

export default function Login() {
  const [studentID, setStudentID] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!studentID || !password) {
      setMessage('Please fill in all fields.'); 
      return; 
    }
    const formData = {
      StudentID: studentID,
      password: password,
    };

    try {
      const response = await axios.post('http://backend-env.eba-cwvy2dnp.us-east-1.elasticbeanstalk.com/user/login', formData);
      console.log('Login successful:', response.data);

      if (response.data && response.data.success) {
        setMessage(response.data.message);
        navigate('/home');
      } else {
        setMessage("Login failed. Please try again.");
      }
    } catch (error) {
      console.error('Login failed:', error);
      setMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="left-side">
          <h2>WELCOME TO E-VOLVE </h2>

          <div className="inputs">
            <input
              className="input"
              type="text"
              placeholder="Student ID"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
            ></input>
            <input
              className="input"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            {message &&  <p style={{margin:"0px", color:"red"}}>{message}</p>}  
            
            <button className="Login-bt" onClick={handleSubmit}>Login</button>
          </div>
          
          <p>
            Don't have an account?{' '}
            <Link to="/signup" style={{ marginLeft: '2px', color:'#325d43' }}>
              SignUp
            </Link>
          </p>

          <hr className="line"></hr>

          <div className="chathere">
            <img src={mic} alt="mic" />
            <img src={chatbot} alt="chatbot" />
          </div>
        </div>
      </div>
    </div>
  );
}
