import "./SearchForm.css";

function SearchForm({
  query,
  setQuery,
  onSearch
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div >
    <form onSubmit={handleSubmit} className="form__search-container">
      <input
        type="text"
        placeholder="Encuentra tu próxima pelicula..."
        className="form__search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />

      <button type="submit" className="form__search-button">
        Buscar
      </button>

      <p className="form__search-instruction">Busca la película que desees utilizando el título, el género, o incluso una palabra que esté incluida en el título; con eso será suficiente.</p>
    </form>
    </div>
  );
}

export default SearchForm;