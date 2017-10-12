import React, { Component } from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave.js';

class FilmRow extends Component {
  render() {
    return (
      <div className="film-row" onClick={this.props.onDetailsClick}>
        <FilmPoster film={this.props.film} />
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{new Date(this.props.film.release_date).getFullYear()}</p>
        </div>

        <Fave isFave={this.props.isFave} onFaveToggle={this.props.onFaveToggle} />
      </div>
    )
  }
}

export default FilmRow;
