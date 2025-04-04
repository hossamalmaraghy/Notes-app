import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ProfileInfo from '../Cards/ProfileInfo';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = ({ userInfo, onSearchNote, handleClearSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Hide search bar and profile info on login and sign-up pages
  const hideExtras = location.pathname === '/login' || location.pathname === '/signUp';

  const onLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleSearch = () => {
    if (searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  const onClearSearch = () => {
    setSearchQuery('');
    handleClearSearch();
  };

  return (
    <div className="bg-white shadow-md p-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left: Logo */}
        <div className="flex flex-1 justify-start">
          <div className="flex items-center space-x-2">
            <h1
              className="text-3xl font-bold text-blue-600"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Note
            </h1>
            <span className="text-2xl text-gray-700 font-light italic">
              Scribe
            </span>
          </div>
        </div>
        {/* Center: Search Bar */}
        <div className="flex flex-1 justify-center">
          {!hideExtras && (
            <div className="w-full max-w-md">
              <SearchBar
                value={searchQuery}
                onChange={({ target }) => setSearchQuery(target.value)}
                handleSearch={handleSearch}
                onClearSearch={onClearSearch}
              />
            </div>
          )}
        </div>
        {/* Right: Profile Info */}
        <div className="flex flex-1 justify-end">
          {!hideExtras && (
            <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
