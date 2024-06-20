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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading article</p>;

  return (
    <div className="article-detail">
      {article && (
        <>
          <h1>{article.title}</h1>
          <img src={article.urlToImage} alt={article.title} />
          <p>{article.content}</p>
        </>
      )}
    </div>
  );
};

export default ArticleDetail;

