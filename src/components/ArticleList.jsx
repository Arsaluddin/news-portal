import React from 'react';

const ArticleList = ({ articles, loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading articles</p>;

  return (
    <div className="article-list">
      {articles.map((article) => (
        <div key={article.url} className="article">
          <img src={article.urlToImage} alt={article.title} />
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={`/article/${encodeURIComponent(article.url)}`} className="read-more">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;

