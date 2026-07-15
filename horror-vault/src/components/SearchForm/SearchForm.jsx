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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search horror movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;