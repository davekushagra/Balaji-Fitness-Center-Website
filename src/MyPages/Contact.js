import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const formStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const labelStyle = {
    fontWeight: 'bold',
  };

  const inputStyle = {
    marginBottom: '15px',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      {submitted ? (
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <h2>Thanks for contacting us!</h2>
          <p>We will get back to you shortly.</p>
        </div>
      ) : (
        <form style={formStyle} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" style={labelStyle}>Name</label>
            <input type="text" className="form-control" id="name" style={inputStyle} required />
          </div>  
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={labelStyle}>Email Address</label>
            <input type="email" className="form-control" id="email" style={inputStyle} required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label" style={labelStyle}>Message</label>
            <textarea className="form-control" id="message" rows="3" style={inputStyle} required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
