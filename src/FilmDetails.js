import React from 'react';

function FilmDetails(props) {
  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${props.current.backdrop_path}`
  const posterUrl = `https://image.tmdb.org/t/p/w780/${props.current.poster_path}`

  let detail;

  if ( props.current.id ) {
    detail = (
      <div className="film-detail is-hydrated">
        <figure className="film-backdrop">
          <img src={backdropUrl} alt="" />
          <h1 className="film-title">{props.current.title}</h1>
        </figure>
        <div className="film-meta">
          <h2 className="film-tagline">{props.current.tagline}</h2>
          <p className="film-detail-overview">
            <img src={posterUrl} className="film-detail-poster" alt={props.current.title} />
            {props.current.overview}
          </p>
        </div>
      </div>
    )
  } else {
    detail = (
      <div className="film-detail">
        <p>
          <i className="material-icons">subscriptions</i>
          <span>No film selected</span>
        </p>
      </div>
    )
  }

  return (
    <div className="film-details">
      <h1 className="section-title">Details</h1>
      {detail}
    </div>
  )
}

export default FilmDetails;
