import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './movies.css';

const Cast = () => {
    const { movieId } = useParams();
    const apiKey = '1cf8e5bade158cd5e507ac3b5bbb7631'; // Replace with your actual API key
    const [castData, setCastData] = useState([]);

    useEffect(() => {
        const fetchCastData = () => {
            fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`)
                .then(response => response.json())
                .then(data => setCastData(data.cast.slice(0, 7)))
                .catch(err => console.error(err));
        };

        fetchCastData();
    }, [movieId]);

    return (
        <div className="cast">
             <h3 className="cast-word">Cast:</h3>
            <div className="cast-photos ">
                {castData.map((castMember) => (
                    castMember.profile_path ? (
                        <div key={castMember.id} className="cast-member-container">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
                                alt={castMember.name}
                                className="cast-photo"
                            />
                            <p className="cast-member">
                                {castMember.name.includes(' ') || castMember.name.includes('-') ? 
                                    <span>
                                        {castMember.name.split(/[\s-]/)[0]}
                                        <br />
                                        {castMember.name.split(/[\s-]/)[1]}
                                    </span>
                                    : castMember.name
                                }
                            </p>
                        </div>
                    ) : null
                ))}
            </div>
        </div>
    );
};

export default Cast;
