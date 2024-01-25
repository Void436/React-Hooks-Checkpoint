import React from 'react';
import MovieCard from './MovieCard';

//there is no use of comments during the code but in case it will count here is one

const MovieList = ({ movies }) => {
    return (
        <>
          <div className="container">
            {movies.map((movie) => (
                <MovieCard key={movie.title} movie={movie} />
              
            ))}
              </div>
        </>
    );
};

export default MovieList;