import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import { constInfoApi } from "../../../moviesApi"

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState([])
  const { movieId } = useParams()
  console.log(movieCast)

  useEffect(() => {
    if (!movieId) return

    async function getData() {
      try {
        const data = await constInfoApi(movieId)
        setMovieCast(data.cast)
      } catch (error) {
        toast.error("Please enter a search word!")
      }
    }

    getData()
  }, [movieId])

  return movieCast.length > 0 ? (
    <ul>
      {movieCast.map((cast) => (
        <li key={cast.id}>
          <p>{cast.name}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
            alt={cast.original_name}
          />
        </li>
      ))}
    </ul>
  ) : (
    <p>Not found!</p>
  )
}

export default MovieCast
