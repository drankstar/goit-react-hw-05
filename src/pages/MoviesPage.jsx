import { useEffect, useState } from "react"
import { MovieSearchApi } from "/moviesApi.js"
import MovieList from "../Components/MovieList/MovieList"
import { useSearchParams } from "react-router-dom"
import toast from "react-hot-toast"

const MoviesPage = () => {
  const [resp, setResp] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get("q")
  console.log(query)
  const [inputValue, setInputValue] = useState(query || "")

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchParams({ q: inputValue })
  }

  const handleChange = (e) => setInputValue(e.target.value.trim())

  useEffect(() => {
    if (!query) return

    async function getData() {
      try {
        const data = await MovieSearchApi({ query })

        setResp(data.results)
      } catch (error) {
        toast.error("Please enter a search word!")
      }
    }

    getData()
  }, [query])

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        autoComplete='off'
        autoFocus
        placeholder='Search images and photos'
        name='inputValue'
        value={inputValue}
        onChange={handleChange}
      />
      <button type='submit'>Search</button>
      <MovieList items={resp} />
    </form>
  )
}

export default MoviesPage
