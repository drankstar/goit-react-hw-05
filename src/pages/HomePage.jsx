import { useEffect, useState } from "react"
import { trendingMoviesApi } from "/moviesApi.js"
import MovieList from "../Components/MovieList/MovieList"
const Homepage = () => {
  const [resp, setResp] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const data = await trendingMoviesApi()
        setResp(data.results)
        console.log(resp)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <div>{resp.length > 0 && <MovieList items={resp} />}</div>
}

export default Homepage
