import React from 'react';
import { Link } from 'react-router-dom';

const Aboutus = () => {
  const sectionStyle = {
    maxWidth: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backgroundImage: `url('/about.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: '#fff',
    textAlign: 'center',
    lineHeight: '1.6', // Adjusted line height for better readability
  };

  const headingStyle = {
    color: '#fff',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  };

  const listStyle = {
    marginBottom: '20px',
  };

  const blockquoteStyle = {
    fontStyle: 'italic',
    marginBottom: '20px',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <div style={sectionStyle}>
      <h1 style={headingStyle}>Welcome to BALAJI FITNESS CENTER</h1>
      <h2 style={{ ...headingStyle, marginBottom: '30px' }}>Your Health, Our Commitment</h2>
      
      <p>
        At BALAJI FITNESS CENTER, we believe in fostering a community of health and wellness. Our state-of-the-art facilities, expert trainers, and comprehensive programs are designed to help you achieve your fitness goals, whether you are a beginner or a seasoned athlete.
      </p>

      <h3 style={headingStyle}>Why Choose Us?</h3>
      <ul style={listStyle}>
        <li>Experienced and Certified Trainers</li>
        <li>Personalized Workout Plans</li>
        <li>Modern Equipment</li>
        <li>Friendly and Supportive Environment</li>
        <li>Flexible Membership Options</li>
      </ul>

      <p>
        Ready to transform your fitness journey? <Link to="/signup" style={linkStyle}>Sign up</Link> now and get started with a free consultation!
      </p>

      <h3 style={headingStyle}>What Our Members Say</h3>
      <blockquote style={blockquoteStyle}>
        <p>"BALAJI FITNESS CENTER has completely changed my life. The trainers are fantastic, and the atmosphere is always motivating. I've never felt more fit and healthy!" - Rajesh K.</p>
      </blockquote>
      <blockquote style={blockquoteStyle}>
        <p>"The personalized workout plans have helped me achieve my fitness goals faster than I ever thought possible. Highly recommend this place!" - Meena S.</p>
      </blockquote>

      <h3 style={headingStyle}>Get in Touch</h3>
      <p>
        Have any questions or need more information? Feel free to <Link to="/Contact" style={linkStyle}>contact us</Link>. We're here to help you on your fitness journey.
      </p>
    </div>
  );
}

export default Aboutus;
