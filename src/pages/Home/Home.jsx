import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { getTrendingMovies } from 'services/movies';
import { useEffect, useState } from 'react';
import { Title } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getTrendingMovies()
      .then(setMovies)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
    </>
  );
};

export default Home;
