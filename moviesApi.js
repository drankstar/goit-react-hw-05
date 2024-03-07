import axios from "axios"

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  params: { include_adult: "false", language: "en-US", page: "1", query: "" },

  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTlmNjZmYmQ1ZTYyNzYzMmJmMTJhYzVmZTdiMjA5YyIsInN1YiI6IjY1ZTg3N2EzY2U5ZTkxMDE4NTNmZmRiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Chtq89blLOjZycQW5fTNiecDQvX0BTyqqrcr8W8muZM",
  },
})

export const trendingMoviesApi = async () => {
  const respons = await api.get("/trending/movie/day?language=en-US")
  return respons.data
}
export const MovieSearchApi = async () => {
  const respons = await api.get("/search/movie")
  return respons.data
}
