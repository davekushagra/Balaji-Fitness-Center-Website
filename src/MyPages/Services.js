import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  
  const services = [
    {
      title: 'Personal Training',
      description: 'Get personalized training sessions tailored to your fitness goals.',
      imageUrl: 'card1.jpg',
    },
    {
      title: 'Group Classes',
      description: 'Join group classes for various fitness levels and interests.',
      imageUrl: 'card2.jpg',
    },
    {
      title: 'Nutrition Counseling',
      description: 'Consult with nutrition experts to achieve your dietary goals.',
      imageUrl: 'card3.jpg',
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={service.imageUrl} className="card-img-top" alt={service.title} />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
