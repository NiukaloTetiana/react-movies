import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'components/services/movies';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const movie = searchParams.get('query');
    if (!movie) return;

    setIsLoading(true);
    getMovieByQuery(movie)
      .then(setMovies)
      .finally(() => setIsLoading(false));
  }, [searchParams]);
  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
    </>
  );
};

export default Movies;
