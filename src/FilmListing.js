import React, { Component } from 'react';
import FilmRow from './FilmRow.js';

class FilmListing extends Component {
  render() {
    const filmRows = this.props.films.map((film) => {
      return <FilmRow film={film} key={film.id} />
    });

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {filmRows}
      </div>
    )
  }
}

export default FilmListing;
