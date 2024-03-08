import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom"
import { MovieInfoApi } from "../../moviesApi"

const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const [movieInfo, setMovieInfo] = useState(null)
  const navigate = useNavigate()
  useEffect(() => {
    if (!movieId) return

    async function getData() {
      try {
        const data = await MovieInfoApi(movieId)
        setMovieInfo(data)
      } catch (error) {
        toast.error("Please enter a search word!")
      }
    }

    getData()
  }, [movieId])
  console.log(movieInfo)

  const handleClick = () => {
    navigate(-1)
  }
  return (
    <div>
      <button onClick={handleClick}>goBack</button>
      {movieInfo && <div>{movieInfo.title}</div>}
      <ul>
        <li>
          <NavLink to='cast'>Cast</NavLink>
        </li>
        <li>
          <NavLink to='reviews'>Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default MovieDetailsPage
