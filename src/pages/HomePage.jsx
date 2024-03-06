import { useEffect } from "react"
import { trendingMoviesApi } from "/moviesApi.js"
const Homepage = () => {
  useEffect(() => {
    async function getData() {
      try {
        const data = await trendingMoviesApi()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [])

  return
  ;<div>Homepage</div>
}

export default Homepage
