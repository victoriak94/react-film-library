import React, { Component } from 'react';
import FilmPoster from './FilmPoster.js';

class FilmRow extends Component {
  render() {

    handleDetailsClick(film) {
      console.log(`Fetching details for ${film.title}!`);
    }

    return (
      <div className="film-row" onClick={() => this.handleDetailsClick(this.props.film)}>
        <FilmPoster film={this.props.film} />
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{new Date(this.props.film.release_date).getFullYear()}</p>
        </div>
      </div>
    )
  }
}

export default FilmRow;
