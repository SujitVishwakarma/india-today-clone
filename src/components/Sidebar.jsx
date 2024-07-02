import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BallotIcon from '@mui/icons-material/Ballot';
import HomeIcon from '@mui/icons-material/Home';
import SportsIcon from '@mui/icons-material/Sports';
import TechIcon from '@mui/icons-material/Computer';
import HealthIcon from '@mui/icons-material/LocalHospital';
import ScienceIcon from '@mui/icons-material/Science';
import BusinessIcon from '@mui/icons-material/Business';
import EntertainmentIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import DeckIcon from '@mui/icons-material/Deck';
import PublicIcon from '@mui/icons-material/Public';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const categories = [
  { icon: <HomeIcon />, label: 'General', value: 'general' },
  { icon: <BallotIcon />, label: 'Elections', value: 'election', subcategories: ['News', 'Lok Sabha Election', 'Assembly Election'] },
  { icon: <LiveTvIcon />, label: 'TV Live', value: 'tv', subcategories: ['News', 'Shows', 'Movies'] },
  { icon: <ImportContactsIcon />, label: 'Magazine', value: 'magazine', subcategories: ['Fashion', 'Technology', 'Health'] },
  { icon: <SportsIcon />, label: 'All Sports', value: 'sports', subcategories: ['Cricket', 'Football', 'Basketball'] },
  { icon: <DeckIcon />, label: 'Life + Style', value: 'life' },
  { icon: <PublicIcon />, label: 'World', value: 'world' },
  { icon: <TechIcon />, label: 'Technology', value: 'technology' },
  { icon: <HealthIcon />, label: 'Health', value: 'health' },
  { icon: <ScienceIcon />, label: 'Science', value: 'science' },
  { icon: <BusinessIcon />, label: 'Business', value: 'business' },
  { icon: <EntertainmentIcon />, label: 'Entertainment', value: 'entertainment' },
  { icon: <FactCheckIcon />, label: 'Fact Check', value: 'fact' },
  { icon: <FastfoodIcon />, label: 'Food', value: 'food' },
];

const Sidebar = ({ setCurrentCategory }) => {
  const [collapsedSections, setCollapsedSections] = useState({});
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const toggleCollapse = (label) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <aside className="hidden lg:block w-64 bg-gray-100 shadow-md fixed top-24 h-[calc(100vh-24px)] overflow-y-auto">
      <div className="flex items-center justify-evenly h-10">
        <div className="text-xl font-semibold">
          {user ? (
            <span className='text-2'>{user.email.charAt(0).toUpperCase()}</span>
          ) : (
            <AccountCircleIcon style={{ fontSize: '40px' }} />
          )}
        </div>
        {user ? (
          <button
            className="w-20 text-red-800 py-1 mb-2 mt-[19px] rounded-[19px] -ml-[56px] border border-red-700"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        ) : (
          <button
            className="w-20 text-red-800 py-1 mb-2 mt-[19px] rounded-[19px] -ml-[56px] border border-red-700"
            onClick={() => navigate('/login')}
          >
            SIGN IN
          </button>
        )}
      </div>
      <hr className="border-gray-400 my-2" />

      <div className="p-4">
        <div className="flex">
          <button className="w-20 text-black py-2 mb-4 rounded">Edition</button>
          <select className="w-40 bg-white border border-gray-300 p-2 rounded mb-4">
            <option value="IN">IN</option>
            <option value="US">US</option>
          </select>
        </div>
        <hr className="border-gray-400 my-1 " />
        <button className="w-40 bg-red-600 text-white mb-4 rounded-[30px] ml-14">Subscribe</button>
        <ul className="ml-14 space-y-4">
          {categories.map((category, index) => (
            <li key={index} className="flex flex-col">
              <div className="flex items-center space-x-2">
                {category.icon}
                <button className="text-gray-700 flex-1 text-left" onClick={() => category.subcategories ? toggleCollapse(category.label) : setCurrentCategory(category.value)}>
                  {category.label}
                </button>
                {category.subcategories && (
                  <button onClick={() => toggleCollapse(category.label)}>
                    {collapsedSections[category.label] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </button>
                )}
              </div>
              {category.subcategories && collapsedSections[category.label] && (
                <ul className="ml-8 mt-2 space-y-2">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex} className="text-gray-700">
                      <button onClick={() => setCurrentCategory(subcategory)}>
                        {subcategory}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
