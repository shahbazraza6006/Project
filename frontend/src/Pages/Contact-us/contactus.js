import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import Navbars from '../../components/Navbar/Navbar';
import MobileNav from '../../components/Navbar/MobileNav';
import chatbot from "../../assets/chatbot.png";
import mic from "../../assets/mic.png";
import './contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        country:'',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your logic here to handle form submission, like sending data to an API
        console.log('Form data:', formData);
        // Reset form fields after submission
        setFormData({
            firstname: '',
            lastname: '',
            email: '',
            country:'',
            message: ''
        });
    };

    return (
        <div>
            <MediaQuery minWidth={720}>
                {(matches) =>
                    matches ? <Navbars></Navbars> : <MobileNav></MobileNav>
                }
            </MediaQuery>
            <div className='micimage'>
        <img src={mic} alt="mic" />
            </div>
            <div className="blue-heading">
                <h1 className="heading-text">Reach Out To Us</h1>
                <h4>We're Eager to Hear from You and Here to Assist You With Any Questions!</h4>
            </div>
            
            <div className="contact-container-custom">
                <div className="contact-form-custom">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group-custom">
                            <label htmlFor="firstname">First Name:</label>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                value={formData.firstname}
                                onChange={handleChange}
                                placeholder='Your name..'
                                required
                            />
                        </div>
                        <div className="form-group-custom">
                            <label htmlFor="lastname">Last Name:</label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                placeholder='Your name..'
                                value={formData.lastname}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group-custom">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Your email..'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group-custom">
                            <label htmlFor="country">Country:</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                placeholder='Your country..'
                                value={formData.country}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group-custom">
                            <label htmlFor="message">Comments:</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder='Write Something..'
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button className='btttt' type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className='botbuttons'>
     
            <img src={chatbot} alt="chatbot" />
      </div>
        </div>
    );
}
