import React from 'react'
import './SingleMovie.css'
import { Link } from 'react-router-dom'
function SingleMovie({ Poster, Title, Type, Year, imdbID }) {
  return (
    <article className='movie'>
      <img src={Poster} alt={Title} />

      <div className='movie__info'>
        <h2>{Title}</h2>
        <h4>{Year}</h4>
        <h3>{Type}</h3>
        <Link to={`/movie`} className='btn btn-primary btn-details'>
          Find out
        </Link>
      </div>
    </article>
  )
}

export default SingleMovie
