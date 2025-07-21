// MyPages/Blog.js (CSS included)
import React from 'react';

const articles = [
  {
    id: 1,
    title: '5 Tips for a Healthy Lifestyle',
    date: 'July 1, 2024',
    content: 'Eat a balanced diet.Stay hydrated.Exercise regularly.Get enough sleep.Manage stress.',
    author: 'John Doe',
    image: 'Health.jpg'
  },
  {
    id: 2,
    title: 'Benefits of Regular Exercise',
    date: 'June 25, 2024',
    content: 'Improves cardiovascular health.Boosts mental health.Aids weight management.Enhances flexibility and strength.Increases energy levels.',
    author: 'Jane Smith',
    image: 'Exercise.jpg'
  },
  {
    id: 3,
    title: 'Creating a Balanced Diet Plan',
    date: 'June 20, 2024',
    content: 'Assess your nutritional needs.Include a variety of foods.Watch portion sizes.Plan your meals.Limit processed foods.',
    author: 'Emily Johnson',
    image: 'diet.jpg'
  },
  {
    id: 4,
    title: 'Benefits of Meditation',
    date: 'June 15, 2024',
    content: 'Reduces stress.Improves concentration.Promotes emotional health.Enhances self-awareness.Lengthens attention span.',
    author: 'Michael Brown',
    image: 'meditation.jpg'
  },
  {
    id: 5,
    title: 'Role of Hydration in Health',
    date: 'June 10, 2024',
    content: 'Regulates body temperature.Keeps joints lubricated.Prevents infections Delivers nutrients to cells.Keeps organs functioning.',
    author: 'Sarah Wilson',
    image: 'water.jpg'
  },
  {
    id: 6,
    title: 'Importance of a Balanced Breakfast',
    date: 'June 5, 2024',
    content: 'Boosts energy levels.Improves concentration.Supports weight management.Enhances nutrient intake. Improves mood.',
    author: 'David Lee',
    image: 'food.jpg'
  }
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Fitness Articles & Tips</h1>
      <div className="article-list">
        {articles.map(article => (
          <div key={article.id} className="article-card">
            <img src={article.image} alt={article.title} className="article-image" />
            <div className="article-content">
              <h2 className="article-title">{article.title}</h2>
              <p className="article-details">By {article.author} on {article.date}</p>
              <p className="article-description" dangerouslySetInnerHTML={{ __html: article.content }}></p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .blog-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f0f8ff;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .blog-title {
          text-align: center;
          margin-bottom: 40px;
          font-size: 2rem;
          color: #2c3e50;
        }

        .article-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }

        .article-card {
          display: flex;
          flex-direction: column;
          background-color: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }

        .article-card:hover {
          transform: scale(1.02);
        }

        .article-image {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }

        .article-content {
          padding: 15px;
        }

        .article-title {
          font-size: 1.25rem;
          margin: 10px 0;
          color: #34495e;
        }

        .article-details {
          font-style: italic;
          color: #7f8c8d;
          margin-bottom: 10px;
        }

        .article-description {
          font-size: 1rem;
          color: #2c3e50;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
};

export default Blog;
