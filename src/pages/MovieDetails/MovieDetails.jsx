import { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Descr,
  Img,
  MovieTitle,
  StyledLink,
  List,
  Title,
  Wrapper,
  InfoWrapper,
  MovieWrapper,
} from './MovieDetails.styled';
import { TfiControlBackward } from 'react-icons/tfi';
import Loader from 'components/Loader/Loader';
import { getMovieDetails } from 'services/movies';
import { toast } from 'react-toastify';

const defaultImg =
  'https://img.freepik.com/premium-photo/the-premiere-of-a-horror-movie-in-the-cinema-a-young-woman-watches-a-movie-in-fear-vertical-photo-one-person-in-the-cinema_307890-7327.jpg?w=360';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const backLinkRef = useRef(location.state?.from || `/movies`);

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(error => toast.error(`Oops...Something went wrong: ${error}`))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (!movie) return;

  return (
    <>
      <StyledLink to={backLinkRef.current}>
        <TfiControlBackward />
        Go back.
      </StyledLink>
      {isLoading && <Loader />}
      <Wrapper>
        <Img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
        <MovieWrapper>
          <MovieTitle>{movie.title}</MovieTitle>
          <Title>Rating: {Math.round(movie.vote_average)}</Title>
          <Title>Overview</Title>
          <Descr>{movie.overview}</Descr>
          <Title>Genres</Title>
          <List>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </List>
        </MovieWrapper>
      </Wrapper>
      <InfoWrapper>
        <StyledLink to={'cast'}>Cast.</StyledLink>
        <StyledLink to={'reviews'}>Reviews.</StyledLink>
      </InfoWrapper>
      <Outlet />
    </>
  );
};

export default MovieDetails;
