import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleByUrl } from '../api';

const ArticleDetail = () => {
  const { url } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true);
      try {
        const data = await fetchArticleByUrl(decodeURIComponent(url));
        setArticle(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    loadArticle();
  }, [url]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading article</p>;

  return (
    <div className="article-detail">
      {article && (
        <>
          <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
          <img src={article.urlToImage} alt={article.title} className="w-full h-auto mb-4 rounded-md" />
          <p className="text-lg text-gray-700">{article.content}</p>
        </>
      )}
    </div>
  );
};

export default ArticleDetail;





