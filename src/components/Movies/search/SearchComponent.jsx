import React, { useContext } from 'react';

import { SearchContext } from './SearchContext';
import { useNavigate } from 'react-router-dom';

const SearchComponent = () => {
  const { searchQuery, setSearchQuery, handleSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    handleSearch(); // Trigger search logic
    navigate('/search'); // Navigate to /search route
  };

  return (
    <div className="search-component">
      <form onSubmit={handleSearchSubmit}> 
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for movies..."
          className='p-1 rounded border-none outline-none border-b-2 border-gray-400 bg-transparent'
        />
        <button type="submit"> <img src="/src/assets/search.svg" alt="Search" className="search-icon" /></button>
      </form>
    </div>
  );
};

export default SearchComponent;