import React from 'react';

const membershipPlans = [
  {
    id: 1,
    title: 'Basic Plan',
    price: '$30/month',
    features: [
      'Access to gym equipment',
      'Locker room access',
      '1 personal training session'
    ]
  },
  {
    id: 2,
    title: 'Standard Plan',
    price: '$50/month',
    features: [
      'Access to gym equipment',
      'Locker room access',
      '5 personal training sessions',
      'Access to group fitness classes'
    ]
  },
  {
    id: 3,
    title: 'Premium Plan',
    price: '$70/month',
    features: [
      'Access to gym equipment',
      'Locker room access',
      'Unlimited personal training sessions',
      'Access to group fitness classes',
      'Nutrition consultation'
    ]
  }
];

const GymMembershipPlans = () => {
  return (
    <div className="membership-container">
      <h1 className="membership-title">Gym Membership Plans</h1>
      <div className="membership-list">
        {membershipPlans.map(plan => (
          <div key={plan.id} className="membership-card">
            <h2 className="membership-plan-title">{plan.title}</h2>
            <p className="membership-price">{plan.price}</p>
            <ul className="membership-features">
              {plan.features.map((feature, index) => (
                <li key={index} className="membership-feature">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style jsx>{`
        .membership-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f0f8ff;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .membership-title {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2rem;
          color: #2c3e50;
        }

        .membership-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .membership-card {
          background-color: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
          padding: 20px;
        }

        .membership-card:hover {
          transform: scale(1.02);
        }

        .membership-plan-title {
          font-size: 1.5rem;
          margin: 10px 0;
          color: #34495e;
          text-align: center;
        }

        .membership-price {
          font-size: 1.25rem;
          margin: 10px 0;
          color: #e74c3c;
          text-align: center;
        }

        .membership-features {
          list-style: none;
          padding: 0;
          color: #2c3e50;
        }

        .membership-feature {
          padding: 5px 0;
          border-bottom: 1px solid #ecf0f1;
        }
      `}</style>
    </div>
  );
};

export default GymMembershipPlans;
