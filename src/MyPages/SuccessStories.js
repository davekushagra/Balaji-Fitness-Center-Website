import React from 'react';

const stories = [
  {
    id: 1,
    name: 'Alice Johnson',
    date: 'June 1, 2024',
    description: 'Alice lost 20 pounds in 3 months by following our fitness and nutrition plan. She is now healthier and happier!',
    image: 's1.jpeg'
  },
  {
    id: 2,
    name: 'Bob Smith',
    date: 'May 15, 2024',
    description: 'Bob gained 15 pounds of muscle in 6 months. Our personalized training program helped him achieve his goals.',
    image: 's2.jpg'
  },
  {
    id: 3,
    name: 'Catherine Lee',
    date: 'April 10, 2024',
    description: 'Catherine improved her cardiovascular health and stamina. She can now run a marathon without any issues!',
    image: 's3.jpeg'
  },
  {
    id: 4,
    name: 'David Brown',
    date: 'March 5, 2024',
    description: 'David reduced his body fat percentage significantly. Our HIIT classes and diet plan worked wonders for him.',
    image: 's4.jpg'
  }
];

const SuccessStories = () => {
  return (
    <div className="stories-container">
      <h1 className="stories-title">Client Success Stories</h1>
      <div className="stories-list">
        {stories.map(story => (
          <div key={story.id} className="story-card">
            <img src={story.image} alt={story.name} className="story-image" />
            <div className="story-content">
              <h2 className="story-name">{story.name}</h2>
              <p className="story-date">{story.date}</p>
              <p className="story-description">{story.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .stories-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f0f8ff;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .stories-title {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2rem;
          color: #2c3e50;
        }

        .stories-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .story-card {
          display: flex;
          flex-direction: column;
          background-color: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .story-card:hover {
          transform: scale(1.02);
        }

        .story-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .story-content {
          padding: 15px;
        }

        .story-name {
          font-size: 1.25rem;
          margin: 10px 0;
          color: #34495e;
        }

        .story-date {
          font-style: italic;
          color: #7f8c8d;
          margin-bottom: 10px;
        }

        .story-description {
          font-size: 1rem;
          color: #2c3e50;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default SuccessStories;
