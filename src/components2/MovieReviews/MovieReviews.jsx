import { useEffect, useState } from "react"
import { reviewsInfoApi } from "../../../moviesApi"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import styles from "./MovieReviews.module.css"

const MovieReviews = () => {
  const [MovieReviews, setMovieReviews] = useState([])
  const { movieId } = useParams()

  useEffect(() => {
    if (!movieId) return

    async function getData() {
      try {
        const data = await reviewsInfoApi(movieId)
        setMovieReviews(data.results)
        console.log(data.results)
      } catch (error) {
        toast.error("Opps! something wrong try again!")
      }
    }

    getData()
  }, [movieId])

  return MovieReviews.length > 0 ? (
    <div>
      {MovieReviews.map((reviews) => (
        <div key={reviews.id}>
          <p className={styles.text}>
            Author: {reviews.author_details.username}
          </p>
          <p className={styles.text}>{reviews.content}</p>
        </div>
      ))}
    </div>
  ) : (
    <p className={styles.text}>Not found!</p>
  )
}

export default MovieReviews
