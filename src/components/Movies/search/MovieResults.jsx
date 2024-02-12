import React, { useContext } from 'react';
import { SearchContext } from './SearchContext';
import MovieCard from '../MovieCard';

const MovieResults = () => {
  const { searchResults, isLoading, error } = useContext(SearchContext);

  if (isLoading) {
    return <p className="loading">Loading results...</p>;
  }

  if (error) {
    return <p className="error">Error: {error}</p>;
  }

  return (
    <div className="movie-grid">
      {searchResults.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieResults;
