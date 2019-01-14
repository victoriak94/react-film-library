import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <FilmListing tmdb={TMDB}/>
        <FilmDetails tmdb={TMDB}/>
      </div>
    );
  }
}

export default App;
