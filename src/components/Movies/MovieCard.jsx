import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchComponent from './search/SearchComponent';

const MovieCard = ({ movie }) => {
  // Default fallback movie data (replace with your desired default)
  const defaultMovie = {
    title: 'No search results found.',
    poster_path: null,
    vote_count: 0,
  };

  // Use movie prop if provided, otherwise use defaultMovie
  const movieToDisplay = movie ?? defaultMovie;

  // Get the navigate function from react-router-dom
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/movies/' + movieToDisplay.id); // Navigate to the movie page
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth', // Optional: Smooth scrolling behavior
    });
  };

  return (
    <div key={movieToDisplay.id} className="movie-card" onClick={handleClick}>
      <Link to={`/movies/${movieToDisplay.id}`}>
        <img
          src={movieToDisplay.poster_path
            ? `https://image.tmdb.org/t/p/w500${movieToDisplay.poster_path}`
            : 'https://via.placeholder.com/200x300?text=No+Image'}
          alt={movieToDisplay.title}
          className="movie-image"
        />
      </Link>
      <h3>{movieToDisplay.title}</h3>
      <h4>Rating: {movieToDisplay.vote_count}</h4>
    </div>
  );
};

export default MovieCard;
