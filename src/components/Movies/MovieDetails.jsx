
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cast from './Cast';
import MovieResults from './search/MovieResults';
import './movies.css';




const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const apiKey = '1cf8e5bade158cd5e507ac3b5bbb7631'; 

  useEffect(() => {
    const fetchMovieDetails = () => {
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
        .then(response => response.json())
        .then(response => setMovieDetails(response))
        .catch(err => {
          console.error(err);
        });
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <p className="loading">Loading...</p>;
  }


  return (
    <><div className="movie-details">
      <div className="movie-poster">
        <img
          className="movie-poster-img"
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title} />
      </div>
      <div className="movie-details-txt">
        <h2 className="movie-title">{movieDetails.title}</h2>
        <p className="movie-genre">Genre: {movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
        <p className="movie-overview"><span className="overview">Overview:</span><br />{movieDetails.overview}</p>
        <Cast movieId={movieId} apiKey={apiKey} />
      </div>
    </div>
    <h2 className="good">Other Good Ones:</h2>
    <div><MovieResults /></div>
    </>
  );
};

export default MovieDetails;
