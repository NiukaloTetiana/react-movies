import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const getTrendingMovies = async () => {
  const { data } = await instance.get(`trending/movie/day?language=en-US`);

  return data.results;
};

export const getMovieByQuery = async query => {
  const { data } = await instance.get(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );

  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await instance.get(`movie/${movieId}?language=en-US`);

  return data;
};

export const getCastMovie = async movieId => {
  const { data } = await instance.get(
    `movie/${movieId}/credits?language=en-US`
  );

  return data.cast;
};
export const getReviewsMovie = async movieId => {
  const { data } = await instance.get(
    `movie/${movieId}/reviews?language=en-US&page=1`
  );

  return data.results;
};
