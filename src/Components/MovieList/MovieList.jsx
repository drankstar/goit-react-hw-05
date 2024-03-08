import { Link } from "react-router-dom"

const MovieList = ({ items }) => {
  console.log(items)
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`}>{item.title}</Link>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt=''
          />
        </li>
      ))}
    </ul>
  )
}

export default MovieList
