
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get('title');
  const overview = queryParams.get('overview');
  const releaseDate = queryParams.get('releaseDate');

  return (
    <div className="movie-details-container">
      <h2 className="movie-details-title">Movie Details</h2>
      <div className="movie-details">
        <div className="movie-details-info">
          <h3 className="movie-details-info-title">{title}</h3>
          <h3>
            Overview:
          </h3>
          <p className="movie-details-info-overview"> {overview}</p>
        </div>
        {}
      </div>
    </div>
  );
};

export default MovieDetails;
