import { useLocation } from 'react-router-dom';
import { ItemMovies, ListMovies, StyledLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ListMovies>
      {movies.map(({ id, title }) => (
        <ItemMovies key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </StyledLink>
        </ItemMovies>
      ))}
    </ListMovies>
  );
};

export default MoviesList;
