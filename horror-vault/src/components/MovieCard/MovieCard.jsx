import { IMAGE_BASE_URL } from "../../constants/constants.js";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img
        className="movie-card__image"
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
      />

      <h2 className="movie-card__title">
        {movie.title}
      </h2>

      <p className="movie-card__year">
        Fecha de estreno {movie.release_date}
      </p>

      <p className="movie-card__year">
        Calificación {movie.vote_average}
      </p>




    </article>
  );
}

export default MovieCard;