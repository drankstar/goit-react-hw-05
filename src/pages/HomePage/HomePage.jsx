import { useEffect, useState } from "react"
import { trendingMoviesApi } from "/moviesApi.js"
import MovieList from "../../Components/MovieList/MovieList"
import toast from "react-hot-toast"

const Homepage = () => {
  const [resp, setResp] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const data = await trendingMoviesApi()
        setResp(data.results)
      } catch {
        toast.error("Opps! something wrong try again!")
      }
    }

    getData()
  }, [])

  return <div>{resp.length > 0 && <MovieList items={resp} />}</div>
}

export default Homepage
