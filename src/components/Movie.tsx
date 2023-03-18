import React from "react";
import './Movie.css';
import { MovieType } from '../App';

type MovieProp = {
  movie: MovieType;
}

const Movie = ({ movie }: MovieProp) => {
  const { title, posterSrc, synopsis, rating } = movie;
  return (
    <article className='movie'>
      <div className='thumbnailWrapper'>
        <img alt='Movie poster' src={posterSrc}></img>
      </div>
      <div className='textWrapper'>
        <div className='title'>{title}</div>
        <div>
          <strong>Rating:</strong>{' '}
          <span className={movie.rating >= 9 ? 'glowingReview' : ''}>
            {rating}
          </span>
        </div>
        <p className='synopsis'>{synopsis}</p>
      </div>
    </article>
  )
};

export default Movie;
