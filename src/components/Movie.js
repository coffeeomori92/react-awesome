import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

function Movie({ year, title, summary, poster, genres, id }){
    return (
        <div className='movie'>
        <Link to={{
            pathname: `/movie/${id}`,
            state: {
                year, title, summary, poster, genres
            }
        }}>
            <img src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre, idx) => (
                        <li key={idx} className="genres__genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie__summary">{summary.slice(0, 180)}...</p>
            </div>
        </Link>
        </div>
    );
}

export default Movie;