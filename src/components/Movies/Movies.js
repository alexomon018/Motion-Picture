import React from 'react'
import './Movies.css'
import Loader from '../Loader'
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom'
function Movies() {
  const { isLoading, error, movies } = useGlobalContext()
  console.log(movies)

  if (isLoading) {
    return <Loader />
  }
  return (
    <section className='home__section'>
      {movies.map(({ Poster, Title, Year, imdbID }) => {
        return (
          <Link to={`/movie${imdbID}`} style={{ textDecoration: 'none' }}>
            <article className='movie' key={imdbID}>
              <img src={Poster} alt={Title} />
              <div className='movie__info'>
                <h2>{Title}</h2>
                <h4>{Year}</h4>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  )
}

export default Movies
