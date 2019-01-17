import React, { Component } from 'react';

class Fave extends Component {
  render () {

    handleClick(e) {
      e.stopPropagation();
      console.log("handling Fave click!");
    }

    return (
      <div className="film-row-fave add_to_queue" onClick={this.handleClick}>
        <i className="material-icons">add_to_queue</i>
      </div>
    );
  }
}

export default Fave;
