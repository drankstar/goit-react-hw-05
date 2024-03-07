import { useEffect, useState } from "react"
import { MovieSearchApi } from "/moviesApi.js"
const MoviesPage = () => {
  const [resp, setResp] = useState([])
  const [query, setQuery] = useState("")

  const onSubmit = (value) => {
    setQuery(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(e.target.elements.query.value.trim())
  }

  useEffect(() => {
    async function getData() {
      try {
        const data = await MovieSearchApi({ query })
        console.log(query)
        setResp(data.results)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        autoComplete='off'
        autoFocus
        placeholder='Search images and photos'
        name='query'
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default MoviesPage
