import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SerachIcon from '@material-ui/icons/Search'
import AddToQueueIcon from '@material-ui/icons/AddToQueue'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import LocalMoviesRoundedIcon from '@material-ui/icons/LocalMoviesRounded'
import { useGlobalContext } from '../../context'
function Header() {
  const { query, setQuery, error } = useGlobalContext()

  return (
    <nav className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='https://i.pinimg.com/originals/43/1e/97/431e9739cc57bcece52d2679114f488e.png'
          alt=''
        />
      </Link>
      <div className='header__menu'>
        <MenuRoundedIcon className='header__menuIcon' />
        Menu
      </div>

      <form className='header__input' onSubmit={(e) => e.preventDefault()}>
        <SerachIcon className='header__inputSerachIcon' />
        <input
          type='text'
          placeholder='Serach Favorite Movies'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <div className='header__nav'>
        <Link to='/moviepro' className='header__link'>
          <div className='header__option'>
            <LocalMoviesRoundedIcon />
          </div>
        </Link>
        <Link to='/watchlist' className='header__link'>
          <div className='header__option'>
            <AddToQueueIcon />
          </div>
        </Link>
        <Link to='/login' className='header__link'>
          <div className='header__option'>Sign In</div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
