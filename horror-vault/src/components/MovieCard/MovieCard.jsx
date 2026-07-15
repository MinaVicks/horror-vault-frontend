import { IMAGE_BASE_URL } from "../../constants/constants.js";

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
        {movie.release_date}
      </p>
    </article>
  );
}

export default MovieCard;