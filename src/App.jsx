import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArticleDetail from './components/ArticleDetail';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
        <header className="w-full bg-blue-600 p-4 shadow-md text-white text-center text-2xl font-bold">
          News Portal
        </header>
        <main className="w-full flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:url" element={<ArticleDetail />} />
          </Routes>
        </main>
        <footer className="w-full bg-blue-600 p-4 text-white text-center">
          © 2024 News Portal
        </footer>
      </div>
    </Router>
  );
};

export default App;



