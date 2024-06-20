import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../api';
import ArticleList from './ArticleList';
import Pagination from './Pagination';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      try {
        const data = await fetchArticles('tesla', '2024-05-20', 'publishedAt', page);
        setArticles(data);
        setTotalPages(Math.ceil(data.totalResults / 10)); // Assuming 10 articles per page
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    loadArticles();
  }, [page]);
  return (
    <div>
      <h1>Latest Tesla News</h1>
      <ArticleList articles={articles} loading={loading} error={error} />
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default HomePage;

