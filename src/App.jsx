import { Route, Routes } from "react-router-dom"
import Navigation from "./Navigation/Navigation"
import MoviesPage from "./pages/MoviesPage"
import NotFoundPage from "./pages/NotFoundPage"
import MovieDetailsPage from "./pages/MovieDetailsPage"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <Navigation />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
