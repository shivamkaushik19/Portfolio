import React from 'react';
import '../contactform/contact.css'; 
import { Link } from 'react-router-dom';


const ContactForm = () => {
    return (
        <>
        <div className="qniue-contact-form-container"  id='contact'   >
            <h1 className="qniue-contact-form-title">Get In Touch</h1>
            <p className="qniue-contact-form-info">
                If you have any project in mind or want to know more about our business, feel free to contact us.
                We are always open to discussing new ideas and helping you achieve your goals.
            </p>
           
            
            <form className="qniue-contact-form">
                <div className="qniue-form-group">
                    <input
                        type="text"
                        id="qniue-name"
                        name="name"
                        placeholder="Your Name*"
                        className="qniue-input"
                        required
                    />
                    <input
                        type="email"
                        id="qniue-email"
                        name="email"
                        placeholder="Email address*"
                        className="qniue-input"
                        required
                    />
                </div>
                <div className="qniue-form-group">
                    <input
                        type="tel"
                        id="qniue-phone"
                        name="phone"
                        placeholder="Phone*"
                        className="qniue-input"
                        required
                    />
                    <input
                        type="text"
                        id="qniue-location"
                        name="location"
                        placeholder="Location*"
                        className="qniue-input"
                        required
                    />
                </div>
                <div className="qniue-form-group">
                    <textarea
                        id="qniue-message"
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        className="qniue-input qniue-textarea"
                    ></textarea>
                </div>
                <div className="qniue-form-group-checkbox">
                    <input type="checkbox" id="qniue-save-info" name="save-info" className="qniue-checkbox" />
                    <label htmlFor="qniue-save-info" className="qniue-checkbox-label">
                        Save my name, email, and website in this browser for the next time.
                    </label>
                </div>
                <Link to="/thankyou"  ><button className="resume_btn">View Resume</button></Link> 
            </form>
            
        </div>

        
        
        </>
    );
};

export default ContactForm;
