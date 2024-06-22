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
  const [query, setQuery] = useState('india');
  const [sortBy, setSortBy] = useState('publishedAt');

  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      try {
        console.log('Fetching articles with:', { query, category, page, sortBy });
        const data = await fetchArticles(query, category, page, sortBy);
        setArticles(data.articles);
        setTotalPages(Math.ceil(data.totalResults / 10)); // Assuming 10 articles per page
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    loadArticles();
  }, [category, page, query, sortBy]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1); // Reset to first page for new search
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setPage(1); // Reset to first page for new category
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setPage(1); // Reset to first page for new sorting
  };

  return (
    <div className="container mx-auto p-4">
      <Search onSearch={handleSearch} />
      <div className="flex justify-between items-center">
        <CategoryFilter
          categories={['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']}
          selectedCategory={category}
          onSelectCategory={handleCategoryChange}
        />
        <select value={sortBy} onChange={handleSortChange} className="bg-gray-200 border border-gray-400 p-2 rounded-md">
          <option value="publishedAt">Published At</option>
          <option value="relevancy">Relevancy</option>
          <option value="popularity">Popularity</option>
        </select>
      </div>
      <ArticleList articles={articles} loading={loading} error={error} />
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default HomePage;









