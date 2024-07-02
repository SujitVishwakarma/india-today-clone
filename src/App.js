import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NewsList from './components/NewsList';
import TopBar from './TopBar';
import Login from './components/register/Login.jsx';
import SignUp from './components/register/Signup.jsx';
import Magazine from './components/Magazine.jsx';

const API_KEY = process.env.REACT_APP_API_URL;

function App() {
  const [currentCategory, setCurrentCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
          params: {
            category: currentCategory,
            q: searchQuery,
            apiKey: API_KEY,
            country: 'in',
          }
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error("Error fetching the news data", error);
      }
    };

    fetchNews();
  }, [currentCategory, searchQuery]);

  useEffect(() => {
    setFilteredNews(news);
  }, [news]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="*" element={
          <>
            <TopBar />
            <div className="min-h-screen flex flex-col">
              <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} setCurrentCategory={setCurrentCategory} />
              <div className="flex flex-1">
                <Sidebar setCurrentCategory={setCurrentCategory} />
                <main className="flex-1 p-4 bg-[#fff] text-gray-950">
                  <Routes>
                    <Route path="/" element={<NewsList news={filteredNews} setCurrentCategory={setCurrentCategory} />} />
                    <Route path="/magazine" element={<Magazine />} />
                  </Routes>
                </main>
              </div>
            </div>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
