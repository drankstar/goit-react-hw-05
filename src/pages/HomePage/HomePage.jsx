import { useEffect, useState } from "react"
import { trendingMoviesApi } from "/moviesApi.js"
import MovieList from "../../components/MovieList/MovieList"
import toast from "react-hot-toast"
import Loader from "../../components/loader/Loader"

const Homepage = () => {
  const [resp, setResp] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true)
        const data = await trendingMoviesApi()
        setResp(data.results)
      } catch {
        toast.error("Opps! something wrong try again!")
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [])

  return (
    <div>
      {loading && <Loader />}
      {resp.length > 0 && <MovieList items={resp} />}
    </div>
  )
}

export default Homepage
