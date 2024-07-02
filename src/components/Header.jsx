import React, { useState } from 'react';
import { MdLibraryBooks } from 'react-icons/md';
import { FaSearch, FaTv } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = ({ searchQuery, setSearchQuery, setCurrentCategory }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
    setShowSearchBar(false);
  };

  const handleTvClick = () => {
    setCurrentCategory('tv');
  };

  const handleLibraryBooksClick = () => {
    navigate('/magazine');
  };
  const handleHomePage=()=>{
    navigate('/')
  }

  return (
    <div className="w-full bg-white fixed top-10 z-50 border-b border-gray-600">
      <div className='flex justify-between items-center h-12 px-4'>
        <a href="#" onClick={handleHomePage} className="font-bold text-red-600 text-xl ml-14">INDIA TODAY</a>
        <div className="flex items-center mr-20">
          <div className="border-l border-gray-600 h-10 mx-2"></div>
          <button onClick={handleLibraryBooksClick} className="text-gray-800 px-2 flex items-center">
            <MdLibraryBooks size={24} className="mr-2" />
          </button>
          <div className="border-l border-gray-600 h-10 mx-2"></div>
          <button onClick={handleTvClick} className="text-gray-800 px-2 flex items-center">
            <FaTv size={24} className="mr-2" />
            <span className="text-xs text-red-500">LIVE</span>
          </button>
          <div className="border-l border-gray-600 h-10 mx-2"></div>
          <button onClick={handleSearchClick} className="text-gray-800 px-2 flex items-center">
            <FaSearch size={24} />
          </button>
          <div className="border-l border-gray-600 h-10 mx-2"></div>
        </div>
      </div>
      {showSearchBar && (
        <form onSubmit={handleSearchSubmit} className="w-full bg-white fixed top-12 z-50 border-b border-gray-400 px-4 py-2 flex">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="w-4/5 p-2 border border-gray-400 rounded"
            placeholder="Search Your news here......"
          />
          <button type="submit" className="ml-2 p-2 bg-red-600 text-white rounded">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Header;
