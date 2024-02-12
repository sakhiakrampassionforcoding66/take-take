import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard'; // Import MovieCard component

const LatestMovies = () => {
    const [latestMovies, setLatestMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLatestMovies = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const apiKey = '1cf8e5bade158cd5e507ac3b5bbb7631'; // Replace with your actual API key
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
                const data = await response.json();
                setLatestMovies(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLatestMovies();
    }, []);

    return (
        <div className="latest-movies">
            {isLoading && <p>Loading movies...</p>}
            {error && <p>Error: {error}</p>}
            {latestMovies && latestMovies.length > 0 && (
                <div className="movie-grid">
                    {latestMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
            {/* If there are no latest movies, display a message */}
            {latestMovies && latestMovies.length === 0 && !isLoading && (
                <p>No latest movies found.</p>
            )}
        </div>
    );
};

export default LatestMovies;
