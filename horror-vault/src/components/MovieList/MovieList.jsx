import MovieCard from "../MovieCard/MovieCard.jsx";

function MovieList({ movies }) {
  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </section>
  );
}

export default MovieList;