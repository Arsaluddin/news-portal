import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArticleDetail from './components/ArticleDetail';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/article/:url" element={<ArticleDetail/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

