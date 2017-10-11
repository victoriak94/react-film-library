import React, { Component } from 'react';
import FilmRow from './FilmRow.js';

class FilmListing extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleFilterClick = this.handleFilterClick.bind(this);

    this.state = {
      filter: 'all'
    }
  }

  handleFilterClick(filter) {
    console.log(`Setting filter to ${filter}`);
    this.setState({filter: filter});
  }

  render() {
    const filmRows = this.props.films.map((film) => {
      return <FilmRow film={film} key={film.id} />
    });

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>

        <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>

        {filmRows}
      </div>
    )
  }
}

export default FilmListing;
