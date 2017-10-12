import React, {Component} from 'react';

class Fave extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleFaveClick = this.handleFaveClick.bind(this);
  }

  handleFaveClick(e) {
    e.stopPropagation();
    console.log('Handling Fave click!');

    this.props.onFaveToggle()
  }

  render() {
    const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue';

    return (
      <div className={`film-row-fave ${isFave}`} onClick={this.handleFaveClick}>
        <i className="material-icons">{isFave}</i>
      </div>
    )
  }
}

export default Fave;
