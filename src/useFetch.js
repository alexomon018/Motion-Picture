import { useState, useEffect } from 'react'
const API_END = `http://www.omdbapi.com/?apikey=5655c3b5`

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })
  const [data, setData] = useState([])

  const fetchMovies = async (url) => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data.Response === 'True') {
        setData(data.Search || data)
        setError({ show: false, msg: '' })
      } else {
        setError({ show: true, msg: data.Error })
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchMovies(`${API_END}${urlParams}`)
  }, [urlParams])
  return {
    isLoading,
    error,
    data,
  }
}
export default useFetch
