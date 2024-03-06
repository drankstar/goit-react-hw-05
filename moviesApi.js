import axios from "axios"

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTlmNjZmYmQ1ZTYyNzYzMmJmMTJhYzVmZTdiMjA5YyIsInN1YiI6IjY1ZTg3N2EzY2U5ZTkxMDE4NTNmZmRiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Chtq89blLOjZycQW5fTNiecDQvX0BTyqqrcr8W8muZM",
  },
})

// api.defaults.headers["Authorization"] =

export const trendingMoviesApi = async () => {
  const respons = await api.get("/trending/movie/day?language=en-US")
  return respons.data
}
export const MovieApi = async () => {
  const respons = await api.get("/movie/day?language=en-US")
  return respons.data
}
