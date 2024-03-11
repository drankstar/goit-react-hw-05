import { Link } from "react-router-dom"
import styles from "./MovieList.module.css"

const MovieList = ({ items }) => {
  console.log(items)
  return (
    <ul className={styles.container}>
      {items.map((item) => (
        <li className={styles.item} key={item.id}>
          <Link className={styles.link} to={`/movies/${item.id}`}>
            {item.title}
          </Link>
          <img
            className={styles.img}
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
          />
        </li>
      ))}
    </ul>
  )
}

export default MovieList
