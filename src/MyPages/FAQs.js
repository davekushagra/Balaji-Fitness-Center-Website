import React from 'react';

const faqs = [
  {
    id: 1,
    question: 'What are the gym hours?',
    answer: 'Our gym is open 24/7 for members. Staffed hours are from 8:00 AM to 8:00 PM.',
  },
  {
    id: 2,
    question: 'Do I need to bring my own towel?',
    answer: 'Yes, we recommend bringing your own towel. We do provide towel service for an additional fee.',
  },
  {
    id: 3,
    question: 'Are personal trainers available?',
    answer: 'Yes, we have certified personal trainers available. You can book sessions at the front desk or online.',
  },
  {
    id: 4,
    question: 'What kind of fitness classes do you offer?',
    answer: 'We offer a variety of fitness classes including yoga, pilates, HIIT, and Zumba. Check our schedule for more details.',
  },
  {
    id: 5,
    question: 'Is there a membership cancellation fee?',
    answer: 'No, we do not charge any cancellation fees. You can cancel your membership at any time.',
  }
];

const FAQs = () => {
  return (
    <div className="faqs-container">
      <h1 className="faqs-title">Frequently Asked Questions</h1>
      <div className="faqs-list">
        {faqs.map(faq => (
          <div key={faq.id} className="faq-card">
            <div className="faq-content">
              <h2 className="faq-question">{faq.question}</h2>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .faqs-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f0f8ff;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .faqs-title {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2rem;
          color: #2c3e50;
        }

        .faqs-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .faq-card {
          display: flex;
          flex-direction: column;
          background-color: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .faq-card:hover {
          transform: scale(1.02);
        }

        .faq-content {
          padding: 15px;
        }

        .faq-question {
          font-size: 1.25rem;
          margin: 10px 0;
          color: #34495e;
        }

        .faq-answer {
          font-size: 1rem;
          color: #2c3e50;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default FAQs;
