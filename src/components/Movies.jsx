export default function Movies({ title, movies, fallbackText, onSelectMovie }) {
  return (
    <section className="movies-category">
      <h2>{title}</h2>
      {movies.length === 0 && <p className='fallback-text'>{fallbackText}</p>}
      {movies.length > 0 && (
        <ul className="movies">
          {movies.map((movie) => (
            <li key={movie.id} className="movie-item">
              <button onClick={() => onSelectMovie(movie.id)}>
                <img src={movie.image.src} alt={movie.image.alt} />
                <h3>{movie.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
