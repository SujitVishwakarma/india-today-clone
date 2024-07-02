import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_URL;

const Magazine = () => {
  const [magazines, setMagazines] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchMagazines = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything`, {
          params: {
            q: 'magazine',
            apiKey: API_KEY,
            sortBy: 'publishedAt',
            language: 'en',
          }
        });
        const sortedMagazines = response.data.articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        setMagazines(sortedMagazines.slice(0, 8));
        setArticles(sortedMagazines.slice(5));
      } catch (error) {
        console.error("Error fetching the magazine data", error);
      }
    };

    fetchMagazines();
  }, []);

  return (
    <div className="lg:ml-60 lg:mr-60 mt-20">
      <h1 className="text-2xl font-bold mb-4 text-red-600">Latest Magazines</h1>
      <div className="grid gap-4">
        {magazines.length === 0 ? (
          <p className="p-4">No magazine articles found</p>
        ) : (
          magazines.map((magazine, index) => (
            <div key={index} className="p-6 rounded-xl shadow-lg bg-white border border-gray-200 flex flex-col neumorphism">
              <h2 className="text-xl font-semibold mb-2">{magazine.title}</h2>
              <p className="text-gray-700 mb-4">{magazine.description}</p>
              {magazine.urlToImage && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={magazine.urlToImage}
                    alt={magazine.title}
                    className="w-full h-auto"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              <a
                href={magazine.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Read more
              </a>
            </div>
          ))
        )}
      </div>
      <h2 className="text-xl font-bold mt-6 mb-4 text-red-700">Latest Articles</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {articles.map((article, index) => (
          <div key={index} className="p-6 rounded-xl shadow-lg bg-white border border-gray-200 flex flex-col neumorphism transition-transform transform hover:scale-105">
            <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-700 mb-4">{article.description}</p>
            {article.urlToImage && (
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-auto"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Magazine;
