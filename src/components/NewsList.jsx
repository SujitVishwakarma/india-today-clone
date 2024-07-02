import React from 'react';
import Carousel from './Carousel';

const NewsList = ({ news, setCurrentCategory }) => {

  console.log("News:", news); // Log the news array for inspection
  console.log("News length:", news.length);
  const categoriess = ["NEET Row", "Heatwave Alert", "Arvind Kejriwal Bail", "Sonakshi Sinha", "Actor Darshan Arrest", "T20 World Cup", "Tech", "Education"];

  return (
    <div className="lg:ml-60 lg:mr-60 mt-20"> 
      <div className="w-full">
        <Carousel items={categoriess} setCurrentCategory={setCurrentCategory} />
      </div>
      {news.length === 0 ? (
        <p className="p-4">No news articles found</p>
      ) : (
        <ul className="p-4 grid gap-4">
          {news.map((article, index) => (
            <li
              key={index}
              className="p-6 rounded-xl shadow-lg bg-white border border-gray-200 flex flex-col neumorphism"
            >
              <span className="text-red-500 font-bold mb-2 uppercase">{article.category || 'News'}</span>
              <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsList;
