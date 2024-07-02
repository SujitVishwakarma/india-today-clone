import React from 'react';

const TopBar = () => {
  return (
    <div className="bg-white fixed top-0 w-full z-50 border-b border-gray-600 ">
      <div className="flex whitespace-nowrap p-2 overflow-x-auto">
        <a href="#" className="font-bold text-black px-4">INDIA TODAY</a>
        <a href="#" className="text-gray-800 px-4">AAJ TAK</a>
        <a href="#" className="text-gray-800 px-4">GNTTV</a>
        <a href="#" className="text-gray-800 px-4">LALLANTOP</a>
        <a href="#" className="text-gray-800 px-4">BUSINESS TODAY</a>
        <a href="#" className="text-gray-800 px-4">BANGLA</a>
        <a href="#" className="text-gray-800 px-4">MALAYALAM</a>
        <a href="#" className="text-gray-800 px-4">NORTHEAST</a>
        <a href="#" className="text-gray-800 px-4">BT BAZAAR</a>
        <a href="#" className="text-gray-800 px-4">HARPER'S BAZAAR</a>
        <a href="#" className="text-gray-800 px-4">SPORTS</a>
        <a href="#" className="text-gray-800 px-4">&#x25BC;</a>
      </div>
    </div>
  );
};

export default TopBar;
