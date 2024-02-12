import React, { createContext, useState } from 'react';

const SearchContext = createContext({
  searchQuery: '',
  setSearchQuery: () => {},
  searchResults: [],
  isLoading: false,
  error: null,
  handleSearch: () => {},
});

const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Replace with your actual API key and logic
      const apiKey = '1cf8e5bade158cd5e507ac3b5bbb7631';
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, searchResults, isLoading, error, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchProvider };
