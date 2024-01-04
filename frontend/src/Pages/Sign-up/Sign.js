import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import evolve from "../../assets/evolve.jpeg";
import mic from "../../assets/mic.png";

export default function Signup() {
  const [studentID, setStudentID] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [success, setSuccess] = useState();
  const [message, setMessage] = useState('');

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!studentID || !email || !password || !selectedDate) {
      setMessage('Please fill in all fields.'); 
      return; 
    }
    const formData = {
      StudentID: studentID,
      email: email,
      password: password,
      Dob: selectedDate
    };

    try {
      const response = await axios.post('http://cloudproject-env.eba-krwc6p82.us-east-1.elasticbeanstalk.com:4000/user/register', formData);
      console.log('Signup successful:', response.data);
      setSuccess('Signup successful. You can now login.');

      
    } catch (error) {
      console.error('Signup failed:', error);
      setMessage('Signup failed. Please try again.'); 
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="left-side">
          <h2>WELCOME TO E-VOLVE </h2>
          <img src={evolve} alt="Evolve Logo" />

          <div className="inputs">
            <input
              className="input"
              type="text"
              placeholder="Student ID"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
            />
            <input
              className="input"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="">
              <DatePicker
                className="input"
                selected={selectedDate}
                onChange={handleDateChange}
                placeholderText="Enter your Date of Birth                                  📅"
                dateFormat="MM/dd/yyyy"
              />
            </div>
            {(!success && message) && ( 
            <p style={{ color: 'red' }}>{message}</p>
          )}
           {(success && !message) && ( 
            <p style={{ color: 'green' }}>{success}</p>
          )}
              <button className="Login-bt" onClick={handleSubmit}>Sign Up</button>
           
          </div>
          
          <p>
            Already have an account?{' '}
            <Link to="/" style={{ marginLeft: '2px', color: '#325d43' }}>
              Login
            </Link>
          </p>
          <hr className="line" />
          <div className="chathere">
            <img src={mic} alt="mic" />
          </div>
        </div>
      </div>
    </div>
  );
}
