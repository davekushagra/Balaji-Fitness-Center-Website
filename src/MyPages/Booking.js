import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sessionType: '',
    date: '',
    time: '',
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log('Booking details:', formData);

    // After successful submission, update state to show thank you message
    setSubmitted(true);
  };

  return (
    <div className="booking-container">
      {!submitted ? (
        <>
          <h1 className="booking-title">Book a Personal Training Session or Class</h1>
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="sessionType">Session Type</label>
              <select
                id="sessionType"
                name="sessionType"
                value={formData.sessionType}
                onChange={handleChange}
                required
              >
                <option value="">Select a session</option>
                <option value="personal-training">Personal Training</option>
                <option value="group-class">Group Class</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="additionalNotes">Additional Notes</label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Book Now</button>
          </form>
        </>
      ) : (
        <div className="thank-you-message">
          <h3>Thank you for booking!</h3>
          <p>Your personal training session or class has been successfully booked.</p>
        </div>
      )}

      <style jsx>{`
        .booking-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f0f8ff;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .booking-title {
          text-align: center;
          margin-bottom: 20px;
          font-size: 2rem;
          color: #2c3e50;
        }

        .booking-form {
          display: flex;
          flex-direction: column;
        }

        .form-group {
          margin-bottom: 15px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          color: #34495e;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
        }

        .form-group textarea {
          resize: vertical;
        }

        .submit-button {
          padding: 10px 20px;
          background-color: #3498db;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1rem;
          margin-top: 10px;
        }

        .submit-button:hover {
          background-color: #2980b9;
        }

        .thank-you-message {
          text-align: center;
          color: #2c3e50;
        }

        .thank-you-message h3 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .thank-you-message p {
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
};

export default Booking;
