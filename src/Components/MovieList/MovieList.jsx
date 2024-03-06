const MovieList = ({ items }) => {
  console.log(items)
  return (
    <ul>
      <li>
        <h2>{items.title}</h2>
        <img src={items.poster_path} alt='' />
        <p></p>
      </li>
    </ul>
  )
}

export default MovieList
