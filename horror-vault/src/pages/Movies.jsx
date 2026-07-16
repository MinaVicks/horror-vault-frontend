import { useEffect, useState } from "react";
import { getHorrorMovies } from "../utils/api.js";
import MovieList from "../components/MovieList/MovieList.jsx";
import SearchForm from "../components/SearchForm/SearchForm.jsx";
import Preloader from "../components/Preloader/Preloader.jsx";
import { searchMovies } from "../utils/api.js";
import "./Movies.css"
import "./Home.css"
//import Header from "../components/Header/Header.jsx";

//import Footer from "../components/Footer/Footer.jsx";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleMovies, setVisibleMovies] = useState(3);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
  setLoading(true);

  searchMovies(query)
    .then((data) => {
      setMovies(data.results);
      setVisibleMovies(3);
    })
    .catch(console.error)
    .finally(() => {
      setLoading(false);
    });
};

  useEffect(() => {
    getHorrorMovies()
      .then((data) => {
        
        setMovies(data.results);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <main>
    
      <SearchForm
  query={query}
  setQuery={setQuery}
  onSearch={handleSearch}
/>
<section className="home__favorites">
      {loading ? (
        <Preloader />
      ) : movies.length === 0 ? (
      <p>No se ha encontrado nada.</p>
    ): (
        <MovieList movies={movies.slice(0, visibleMovies)} />
        )} 
        
        <button onClick={() => setVisibleMovies(visibleMovies + 3)} className="home__hero-button">
              Ver más
        </button>

        </section>

   
    
    </main>
  );
}

export default Movies;