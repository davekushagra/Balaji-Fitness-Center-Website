import React from 'react';

const classes = [
  {
    id: 1,
    name: 'Yoga',
    schedule: 'Monday, Wednesday, Friday - 6:00 AM to 7:00 AM',
    description: 'A relaxing yoga class suitable for all levels. Improve your flexibility and reduce stress.',
    image: 'c1.jpg'
  },
  {
    id: 2,
    name: 'Pilates',
    schedule: 'Tuesday, Thursday - 5:00 PM to 6:00 PM',
    description: 'A core-strengthening pilates class. Focus on your posture and overall strength.',
    image: 'c2.jpg'
  },
  {
    id: 3,
    name: 'HIIT',
    schedule: 'Monday, Wednesday, Friday - 7:00 PM to 8:00 PM',
    description: 'High-Intensity Interval Training to burn calories and improve cardiovascular health.',
    image: 'c3.jpg'
  },
  {
    id: 4,
    name: 'Zumba',
    schedule: 'Saturday, Sunday - 10:00 AM to 11:00 AM',
    description: 'A fun and energetic dance class to improve your fitness and have fun!',
    image: 'c4.jpg'
  },
  {
    id: 5,
    name: 'Spinning',
    schedule: 'Tuesday, Thursday - 6:00 AM to 7:00 AM',
    description: 'A high-energy indoor cycling class to boost your endurance and cardiovascular health.',
    image: 'c5.jpeg'
  }
];

const Classes = () => {
  return (
    <div className="classes-container">
      <h1 className="classes-title">Our Fitness Classes</h1>
      <div className="classes-list">
        {classes.map(cls => (
          <div key={cls.id} className="class-card">
            <img src={cls.image} alt={cls.name} className="class-image" />
            <div className="class-content">
              <h2 className="class-name">{cls.name}</h2>
              <p className="class-schedule">{cls.schedule}</p>
              <p className="class-description">{cls.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .classes-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f0f8ff;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .classes-title {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2rem;
          color: #2c3e50;
        }

        .classes-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .class-card {
          display: flex;
          flex-direction: column;
          background-color: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .class-card:hover {
          transform: scale(1.02);
        }

        .class-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .class-content {
          padding: 15px;
        }

        .class-name {
          font-size: 1.25rem;
          margin: 10px 0;
          color: #34495e;
        }

        .class-schedule {
          font-style: italic;
          color: #7f8c8d;
          margin-bottom: 10px;
        }

        .class-description {
          font-size: 1rem;
          color: #2c3e50;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default Classes;
