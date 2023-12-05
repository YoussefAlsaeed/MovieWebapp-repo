// Movie.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Movie.css'; // Import the CSS file

const Movie = ({ id, title, overview, posterPath, releaseDate, rate }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500/" + posterPath;
  const [showDetails, setShowDetails] = useState(false);


  return (
    <div className="movie-card" 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
        margin: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        color: 'white',
        width: '200px',
        height: '450px',
        overflow: 'hidden'
      }}
    >
      <img src={imgUrl} alt={title} style={{ width: '100%' }} />
      <div style={{ marginLeft: '10px' }}>
        <h3>{title}</h3>
        <p>{releaseDate}</p>
        <p className="rate">
          <span role="img" aria-label="star" style={{ color: 'yellow', fontSize: '1.4em' }}></span>
          <span style={{ fontSize: '14.5px' }}>⭐️{rate}</span>
          <span role="img" aria-label="star" style={{ color: 'yellow', fontSize: '1.4em' }}></span>
          /10
        </p>



      </div>
    </div>
  );
};

export default Movie;
