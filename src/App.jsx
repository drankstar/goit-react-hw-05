import { Route, Routes } from "react-router-dom"
import Navigation from "./Components/Navigation/Navigation"
import MoviesPage from "./pages/MoviesPage"
import NotFoundPage from "./pages/NotFoundPage"
import MovieDetailsPage from "./pages/MovieDetailsPage"

import MovieCast from "./Components/MovieCast/MovieCast"
import MovieReviews from "./Components/MovieReviews/MovieReviews"
import { Toaster } from "react-hot-toast"
import { Suspense, lazy } from "react"

const HomePage = lazy(() => import("./pages/HomePage"))

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies' element={<MoviesPage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            <Route path='cast' element={<MovieCast />} />
            <Route path='reviews' element={<MovieReviews />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  )
}

export default App
