// Moviecard.js
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import apiUrl from './MovieApi';

const Moviecard = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = apiUrl; // Set the default URL
        if (searchTerm) {
          // If searchTerm is not empty, modify the URL for searching
          url = `https://api.themoviedb.org/3/search/multi?api_key=9813ce01a72ca1bd2ae25f091898b1c7&query=${searchTerm}`;
        }        
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',color: '#fff', background: '#111' }}>
      <div style={{ width: '100%', padding: '20px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearch}
          style={{
            width:'650px',
            border: '1px solid #716e6e',
            fontSize: '15px',
            paddingLeft: '10px',
            height: '44px',
            borderradius: '5px',
            background: '#333',
            color: '#fff',
            borderradius: '5px',
            fontsize:' 15px',
          }}
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ margin: '10px' }}>
            <Movie
              id={movie.id}
              title={movie.title ? movie.title : movie.name}
              posterPath={movie.poster_path}
              releaseDate={movie.release_date ? movie.release_date : movie.first_air_date}
              rate={movie.vote_average}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moviecard;
