import React from 'react';

const schedules = [
  {
    id: 1,
    day: 'Monday',
    classes: [
      {
        time: '7:00 AM - 8:00 AM',
        className: 'Yoga',
        trainer: 'Emily Johnson'
      },
      {
        time: '9:00 AM - 10:00 AM',
        className: 'Cardio Blast',
        trainer: 'Michael Brown'
      }
    ]
  },
  {
    id: 2,
    day: 'Tuesday',
    classes: [
      {
        time: '7:00 AM - 8:00 AM',
        className: 'Pilates',
        trainer: 'Sarah Wilson'
      },
      {
        time: '6:00 PM - 7:00 PM',
        className: 'Zumba',
        trainer: 'David Lee'
      }
    ]
  },
  {
    id: 3,
    day: 'Wednesday',
    classes: [
      {
        time: '8:00 AM - 9:00 AM',
        className: 'Strength Training',
        trainer: 'John Doe'
      },
      {
        time: '5:00 PM - 6:00 PM',
        className: 'HIIT',
        trainer: 'Jane Smith'
      }
    ]
  },
  {
    id: 4,
    day: 'Thursday',
    classes: [
      {
        time: '7:00 AM - 8:00 AM',
        className: 'Spin Class',
        trainer: 'Emily Johnson'
      },
      {
        time: '6:00 PM - 7:00 PM',
        className: 'Boxing',
        trainer: 'Michael Brown'
      }
    ]
  },
  {
    id: 5,
    day: 'Friday',
    classes: [
      {
        time: '8:00 AM - 9:00 AM',
        className: 'Yoga',
        trainer: 'Sarah Wilson'
      },
      {
        time: '5:00 PM - 6:00 PM',
        className: 'Circuit Training',
        trainer: 'David Lee'
      }
    ]
  },
  {
    id: 6,
    day: 'Saturday',
    classes: [
      {
        time: '9:00 AM - 10:00 AM',
        className: 'Pilates',
        trainer: 'John Doe'
      },
      {
        time: '11:00 AM - 12:00 PM',
        className: 'Bootcamp',
        trainer: 'Jane Smith'
      }
    ]
  }
];

const Schedule = () => {
  return (
    <div className="schedule-container">
      <h1 className="schedule-title">Class and Trainer Schedules</h1>
      <div className="schedule-list">
        {schedules.map(schedule => (
          <div key={schedule.id} className="schedule-card">
            <h2 className="schedule-day">{schedule.day}</h2>
            {schedule.classes.map((cls, index) => (
              <div key={index} className="class-details">
                <p className="class-time">{cls.time}</p>
                <p className="class-name">{cls.className}</p>
                <p className="class-trainer">Trainer: {cls.trainer}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        .schedule-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f0f8ff;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .schedule-title {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2rem;
          color: #2c3e50;
        }

        .schedule-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .schedule-card {
          background-color: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .schedule-card:hover {
          transform: scale(1.02);
        }

        .schedule-day {
          background-color: #3498db;
          color: #fff;
          padding: 10px;
          text-align: center;
          font-size: 1.5rem;
          margin: 0;
        }

        .class-details {
          padding: 15px;
          border-top: 1px solid #ddd;
        }

        .class-time {
          font-size: 1rem;
          color: #2c3e50;
        }

        .class-name {
          font-size: 1.25rem;
          color: #34495e;
          margin: 5px 0;
        }

        .class-trainer {
          font-size: 1rem;
          color: #7f8c8d;
        }
      `}</style>
    </div>
  );
};

export default Schedule;
