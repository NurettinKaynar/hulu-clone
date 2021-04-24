const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trendler",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Sevilenler",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchAction: {
    title: "Aksiyon",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Komedi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Korku",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romantik",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Gizem",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchScifi: {
    title: "Bilim Kurgu",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  fetchWestern: {
    title: "Batı (Western)",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  fetchAnimation: {
    title: "Animasyon",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  fetchTV: {
    title: "TV Şov",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};
