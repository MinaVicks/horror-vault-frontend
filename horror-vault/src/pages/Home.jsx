import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Hero from "../assets/hero.svg";
import MovieList from "../components/MovieList/MovieList";
import Preloader from "../components/Preloader/Preloader";


import { getHorrorMovies } from "../utils/api";

import "./Home.css";

function Home() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getHorrorMovies()
      .then((data) => {
        const shuffledMovies = [...data.results].sort(
          () => Math.random() - 0.5
        );

        setFavoriteMovies(shuffledMovies);
      })
      .catch(() => {
        setError("No fue posible cargar las películas.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleShowMore = () => {
    setVisibleMovies((currentValue) => currentValue + 3);
  };

  return (
    <main className="home">
      <div className="home__container">
        <section className="home__hero">
          <img
            src={Hero}
            alt="Escena promocional de Horror Vault"
            className="home__hero-image"
          />

          <div className="home__hero-content">
            <h1 className="home__hero-title">
              Encuentra tus películas de horror favoritas en un solo lugar
            </h1>

            <Link to="/movies" className="home__hero-button">
              Buscar
            </Link>
          </div>
        </section>

        <section className="home__favorites">
          <h2 className="home__favorites-title">Our favorites</h2>

          {loading && <Preloader />}

          {!loading && error && (
            <p className="home__message">{error}</p>
          )}

          {!loading && !error && (
            <>
              <MovieList
                movies={favoriteMovies.slice(0, visibleMovies)}
              />

              {visibleMovies < favoriteMovies.length && (
                <button
                  type="button"
                  className="home__hero-button"
                  onClick={handleShowMore}
                >
                  Ver más
                </button>
              )}
            </>
          )}
        </section>
      </div>
    </main>
  );
}

export default Home;