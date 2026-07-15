import { API_KEY, BASE_URL, HORROR_GENRE_ID } from "../constants/constants.js";

// Obtiene películas populares de terror
export function getHorrorMovies() {
  return fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${HORROR_GENRE_ID}&sort_by=popularity.desc`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error al obtener películas");
      }
      return res.json();
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

// Busca películas
export function searchMovies(query) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error en la búsqueda");
      }
      return res.json();
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}