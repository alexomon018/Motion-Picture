import React from 'react'
import './Movies.css'
import Loader from '../Loader'
import { useGlobalContext } from '../../context'
import SingleMovie from './SingleMovie'
function Movies() {
  const { isLoading, error, movies } = useGlobalContext()
  console.log(movies)

  if (isLoading) {
    return <Loader />
  }
  return (
    <section className='home__section'>
      {movies.map((item) => {
        return <SingleMovie key={item.id} {...item} />
      })}
    </section>
  )
}

export default Movies
