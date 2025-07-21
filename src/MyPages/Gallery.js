import React from 'react';

const gymImages = [
  {
    id: 1,
    title: 'Weightlifting Area',
    description: 'A well-equipped weightlifting area with various weights and benches.',
    image: 'g1.jpg' // Replace with actual image path or URL
  },
  {
    id: 2,
    title: 'Cardio Machines',
    description: 'A range of cardio machines including treadmills, ellipticals, and stationary bikes.',
    image: 'g2.jpg' // Replace with actual image path or URL
  },
  {
    id: 3,
    title: 'Yoga and Stretching Zone',
    description: 'A dedicated area for yoga, stretching, and cool-down exercises.',
    image: 'g3.jpg' // Replace with actual image path or URL
  },
  {
    id: 4,
    title: 'Group Fitness Classes',
    description: 'Join our group fitness classes for a fun and motivating workout experience.',
    image: 'g4.jpg' // Replace with actual image path or URL
  }
];

const Gallery = () => {
  return (
    <div className="gym-gallery-container">
      <h1 className="gym-gallery-title">Gym Gallery</h1>
      <div className="gym-gallery-list">
        {gymImages.map(image => (
          <div key={image.id} className="gym-gallery-card">
            <img src={image.image} alt={image.title} className="gym-gallery-image" />
            <div className="gym-gallery-content">
              <h2 className="gym-gallery-title">{image.title}</h2>
              <p className="gym-gallery-description">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .gym-gallery-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f0f8ff;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .gym-gallery-title {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2rem;
          color: #2c3e50;
        }

        .gym-gallery-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .gym-gallery-card {
          background-color: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .gym-gallery-card:hover {
          transform: scale(1.02);
        }

        .gym-gallery-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .gym-gallery-content {
          padding: 15px;
        }

        .gym-gallery-title {
          font-size: 1.25rem;
          margin: 10px 0;
          color: #34495e;
        }

        .gym-gallery-description {
          font-size: 1rem;
          color: #2c3e50;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
