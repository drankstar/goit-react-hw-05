import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom"
import { MovieInfoApi } from "../../moviesApi"
import styles from "./MovieDetailsPage.module.css"
import { IoArrowUndo } from "react-icons/io5"

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
      } catch {
        toast.error("Please enter a search word!")
      }
    }

    getData()
  }, [movieId])

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <>
      <button className={styles.backBtn} onClick={handleClick}>
        <IoArrowUndo className={styles.svg} />
      </button>
      {movieInfo && (
        <div>
          <h2 className={styles.title}>{movieInfo.title}</h2>

          <div className={styles.itemBox}>
            <img
              className={styles.image}
              src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
              alt={movieInfo.original_title}
            />
            <div>
              <p className={styles.text}>Overview: {movieInfo.overview}</p>
              <p className={styles.text}>
                Country: &nbsp;
                <span>
                  {movieInfo.production_countries
                    .map((country) => country.name)
                    .join(", ")}
                </span>
              </p>
              <p className={styles.text}>Rating : {movieInfo.vote_average}</p>
              <p className={styles.text}>Votes: {movieInfo.vote_count}</p>
              <p className={styles.text}>Status: {movieInfo.status}</p>
            </div>
          </div>
        </div>
      )}

      <ul>
        <li>
          <NavLink className={styles.link} to='cast'>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to='reviews'>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  )
}

export default MovieDetailsPage
