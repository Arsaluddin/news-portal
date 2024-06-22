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
        className="bg-gray-200 border border-gray-400 p-2 rounded-md"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
        Search
      </button>
    </div>
  );
};

export default Search;






