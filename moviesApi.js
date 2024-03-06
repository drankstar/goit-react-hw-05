import axios from "axios"

const trendingMovies = axios.create({
  baseURL: "https://api.themoviedb.org",
})

trendingMovies.defaults.headers["Authorization"] =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTlmNjZmYmQ1ZTYyNzYzMmJmMTJhYzVmZTdiMjA5YyIsInN1YiI6IjY1ZTg3N2EzY2U5ZTkxMDE4NTNmZmRiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Chtq89blLOjZycQW5fTNiecDQvX0BTyqqrcr8W8muZM"
trendingMovies.defaults.headers["accept"] = "application/json"

export const trendingMoviesApi = async () => {
  const respons = await axios.get("/trending/movie")
  return respons.data
}
