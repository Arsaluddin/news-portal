import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../api';
import ArticleList from './ArticleList';
import CategoryFilter from './CategoryFilter';
import Pagination from './Pagination';
import Search from './Search';
import '../styles.css';

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      try {
        const data = await fetchArticles(category || 'india', page);
        setArticles(data.articles);
        setTotalPages(Math.ceil(data.totalResults / 10)); // Assuming 10 articles per page
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    loadArticles();
  }, [category, page]);

  const handleSearch = (query) => {
    setCategory(query);
  };

  return (
    <div className="container mx-auto p-4">
      <Search onSearch={handleSearch} />
      <CategoryFilter
        categories={['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
      <ArticleList articles={articles} loading={loading} error={error} />
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default HomePage;







