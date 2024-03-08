import { Route, Routes } from "react-router-dom"
import Navigation from "./Components/Navigation/Navigation"
import MoviesPage from "./pages/MoviesPage"
import NotFoundPage from "./pages/NotFoundPage"
import MovieDetailsPage from "./pages/MovieDetailsPage"
import HomePage from "./pages/HomePage"
import MovieCast from "./Components/MovieCast/MovieCast"
import MovieReviews from "./Components/MovieReviews/MovieReviews"

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
          <Route path='cast' element={<MovieCast />} />
          <Route path='reviews' element={<MovieReviews />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
