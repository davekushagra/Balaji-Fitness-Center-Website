import React from 'react';

const events = [
  {
    id: 1,
    title: 'Yoga Workshop',
    date: 'August 5, 2024',
    time: '10:00 AM - 12:00 PM',
    location: 'Community Center',
    description: 'Join us for a relaxing yoga workshop. All levels are welcome!',
    image: 'meditation.jpg' // Replace with actual image path or URL
  },
  {
    id: 2,
    title: 'Nutrition Seminar',
    date: 'August 10, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Health Hall',
    description: 'Learn about the importance of nutrition and how to maintain a healthy diet.',
    image: 'event2.jpg' // Replace with actual image path or URL
  },
  {
    id: 3,
    title: 'Fitness Challenge',
    date: 'August 15, 2024',
    time: '9:00 AM - 11:00 AM',
    location: 'City Park',
    description: 'Take part in our annual fitness challenge and compete with others!',
    image: 'event3.jpg' // Replace with actual image path or URL
  },
  {
    id: 4,
    title: 'Mental Health Awareness Session',
    date: 'August 20, 2024',
    time: '3:00 PM - 5:00 PM',
    location: 'Wellness Center',
    description: 'Join us for a session on mental health awareness and stress management techniques.',
    image: 'event4.jpg' // Replace with actual image path or URL
  }
];

const Events = () => {
  return (
    <div className="events-container">
      <h1 className="events-title">Upcoming Events</h1>
      <div className="events-list">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-details">{event.date} | {event.time}</p>
              <p className="event-details">{event.location}</p>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .events-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f0f8ff;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .events-title {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2rem;
          color: #2c3e50;
        }

        .events-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .event-card {
          background-color: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .event-card:hover {
          transform: scale(1.02);
        }

        .event-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .event-content {
          padding: 15px;
        }

        .event-title {
          font-size: 1.25rem;
          margin: 10px 0;
          color: #34495e;
        }

        .event-details {
          font-style: italic;
          color: #7f8c8d;
          margin-bottom: 10px;
        }

        .event-description {
          font-size: 1rem;
          color: #2c3e50;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default Events;
