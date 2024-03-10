import { Route, Routes } from "react-router-dom"
import Navigation from "./Components/Navigation/Navigation"
import { Toaster } from "react-hot-toast"
import { Suspense, lazy } from "react"

const HomePage = lazy(() => import("./pages/HomePage/HomePage"))
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
)
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"))
const MovieCast = lazy(() => import("./Components/MovieCast/MovieCast"))
const MovieReviews = lazy(() =>
  import("./Components/MovieReviews/MovieReviews")
)

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
