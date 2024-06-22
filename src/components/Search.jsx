import React, { useState } from 'react';
import '../styles.css';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search">
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for articles..." 
      />
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;





