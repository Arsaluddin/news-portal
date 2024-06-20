import React from 'react';

const ArticleList = ({ articles, loading, error }) => {
  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading articles</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {articles.map((article) => (
        <div key={article.url} className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105">
          <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p className="text-gray-600">{article.description}</p>
            <a href={`/article/${encodeURIComponent(article.url)}`} className="text-blue-500 hover:underline mt-2 inline-block">Read more</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;



