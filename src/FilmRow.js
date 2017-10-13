import React from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave.js';

function FilmRow(props) {
  return (
    <div className="film-row" onClick={props.onDetailsClick}>
      <FilmPoster film={props.film} />
      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{new Date(props.film.release_date).getFullYear()}</p>
      </div>

      <Fave isFave={props.isFave} onFaveToggle={props.onFaveToggle} />
    </div>
  )
}

export default FilmRow;
