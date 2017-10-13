import React from 'react';

function FilmPoster(props) {
  const posterUrl = `https://image.tmdb.org/t/p/w780/${props.film.poster_path}`;

  return (
    <figure className="film-poster">
      <img src={posterUrl} alt="" />
    </figure>
  )
}

export default FilmPoster;
