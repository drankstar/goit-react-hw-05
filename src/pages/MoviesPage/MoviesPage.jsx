import { useEffect, useState } from "react"
import { MovieSearchApi } from "/moviesApi.js"
import MovieList from "../../Components/MovieList/MovieList"
import { useSearchParams } from "react-router-dom"
import styles from "./MoviesPage.module.css"
import { CiSearch } from "react-icons/ci"
import toast from "react-hot-toast"

const MoviesPage = () => {
  const [resp, setResp] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get("q")
  const [inputValue, setInputValue] = useState(query || "")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue === "") {
      toast.error("Please enter a movie name!")
    }

    setSearchParams({ q: inputValue })
  }

  const handleChange = (e) => setInputValue(e.target.value)

  useEffect(() => {
    if (!query) return

    async function getData() {
      try {
        const data = await MovieSearchApi({ query })

        setResp(data.results)
      } catch {
        toast.error("Opps! something wrong try again")
      }
    }

    getData()
  }, [query])

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          autoComplete='off'
          type='text'
          placeholder='Search images and photos'
          name='inputValue'
          value={inputValue}
          onChange={handleChange}
        />
        <button className={styles.searchBtn} type='submit'>
          Search <CiSearch />
        </button>
      </form>
      {resp.length > 0 && <MovieList items={resp} />}
    </div>
  )
}

export default MoviesPage