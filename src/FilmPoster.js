import React, { Component } from 'react';

class FilmPoster extends Component {
  render() {
    const posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`;

    return (
      <figure className="film-poster">
        <img src={posterUrl} alt="" />
      </figure>
    )
  }
}

export default FilmPoster;
