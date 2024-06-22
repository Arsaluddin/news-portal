import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const ArticleList = ({ articles, loading, error }) => {
  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading articles</p>;

  return (
    <div className="article-list">
      {articles.map((article) => (
        <div key={article.url} className="article">
          <div className="relative h-48">
            <img src={article.urlToImage} alt={article.title} className="object-cover" />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-700 mb-4">{article.description}</p>
            <Link to={`/article/${encodeURIComponent(article.url)}`} className="read-more">Read more</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;







