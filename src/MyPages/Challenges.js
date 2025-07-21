import React from 'react';

const challenges = [
  {
    id: 1,
    title: '30-Day Push-Up Challenge',
    date: 'Starts: August 1, 2024',
    description: 'Improve your upper body strength with our 30-day push-up challenge. Gradually increase the number of push-ups each day.',
    image: 'challenge1.jpeg'
  },
  {
    id: 2,
    title: '5K Run Challenge',
    date: 'Starts: September 1, 2024',
    description: 'Train to run a 5K in 6 weeks. Follow our running schedule and tips to improve your stamina and endurance.',
    image: 'challenge2.jpeg'
  },
  {
    id: 3,
    title: 'Plank Challenge',
    date: 'Starts: October 1, 2024',
    description: 'Build core strength with our plank challenge. Hold a plank position for progressively longer times each day.',
    image: 'challenge3.jpeg'
  },
  {
    id: 4,
    title: 'Squat Challenge',
    date: 'Starts: November 1, 2024',
    description: 'Tone your legs and glutes with our squat challenge. Increase the number of squats each day to see great results.',
    image: 'challenge4.jpeg'
  }
];

const Challenges = () => {
  return (
    <div className="challenges-container">
      <h1 className="challenges-title">Fitness Challenges</h1>
      <div className="challenges-list">
        {challenges.map(challenge => (
          <div key={challenge.id} className="challenge-card">
            <img src={challenge.image} alt={challenge.title} className="challenge-image" />
            <div className="challenge-content">
              <h2 className="challenge-title">{challenge.title}</h2>
              <p className="challenge-date">{challenge.date}</p>
              <p className="challenge-description">{challenge.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .challenges-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f0f8ff;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .challenges-title {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2rem;
          color: #2c3e50;
        }

        .challenges-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .challenge-card {
          display: flex;
          flex-direction: column;
          background-color: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .challenge-card:hover {
          transform: scale(1.02);
        }

        .challenge-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .challenge-content {
          padding: 15px;
        }

        .challenge-title {
          font-size: 1.25rem;
          margin: 10px 0;
          color: #34495e;
        }

        .challenge-date {
          font-style: italic;
          color: #7f8c8d;
          margin-bottom: 10px;
        }

        .challenge-description {
          font-size: 1rem;
          color: #2c3e50;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default Challenges;
