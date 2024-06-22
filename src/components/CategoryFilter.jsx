import React from 'react';
import '../styles.css';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-filter">
      <select
        value={selectedCategory}
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;







