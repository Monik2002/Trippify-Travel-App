import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './AboutUs.css'; // Styling for the About Us page

const AboutUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      toast.success('Your suggestion has been submitted!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setName('');
      setEmail('');
      setMessage('');
    } else {
      toast.error('Please fill out all fields.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="about-us-container">
      <h1>About Trippify</h1>
      <p>
        Welcome to Trippify! Our platform is designed to help travel enthusiasts create, share, and preserve their travel memories. Whether you're exploring new destinations or reminiscing about past adventures, Trippify allows you to journal your journeys and inspire others.
      </p>
      <p>
        At Trippify, we believe in the power of storytelling. Every trip, no matter how big or small, holds a special story. With our easy-to-use interface, you can document your experiences, upload photos, and track your adventures in one place.
      </p>
      <p>
        Join us on a journey to explore the world, share your stories, and discover new places through the eyes of fellow travelers.
      </p>
      <h2>Our Mission</h2>
      <p>
        To make travel journaling easy and accessible for everyone, while fostering a community of travelers who inspire each other through shared experiences.
      </p>

      {/* Suggestions Form */}
      <section className="suggestions-form">
        <h3>We value your suggestions!</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </section>

      {/* Creators Section */}
      <section className="creators">
        <h3>Meet the Creators</h3>
        <div className="creators-list">
          <div className="creator">
            <div className="creator-info">
              <h4>Mir Niyazul Haque</h4>
              <div className="social-links">
                <a href="https://github.com/NIYAZ04" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span className="fab fa-github"></span> GitHub
                </a>
                <a href="https://www.linkedin.com/in/mir-niyazul-haque/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span className="fab fa-linkedin"></span> LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="creator">
            <div className="creator-info">
              <h4>Raashna Krishn</h4>
              <div className="social-links">
                <a href="https://github.com/raashna" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span className="fab fa-github"></span> GitHub
                </a>
                <a href="https://www.linkedin.com/in/raashna-krishn-27a1a8215/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span className="fab fa-linkedin"></span> LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="creator">
            <div className="creator-info">
              <h4>Monikanchan Chatterjee</h4>
              <div className="social-links">
                <a href="https://github.com/Monik2002" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span className="fab fa-github"></span> GitHub
                </a>
                <a href="https://www.linkedin.com/in/monikanchan-chatterjee-a86862200/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <span className="fab fa-linkedin"></span> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
