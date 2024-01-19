import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from '../../services/movies';
import { Item, Title, ReviewsDescr, Span } from './Reviews.styled';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getReviewsMovie(movieId)
      .then(setReviews)
      .catch(error => toast.error(`Oops...Something went wrong: ${error}`))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews?.length > 0 && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <ReviewsDescr>
                Author: <Span>{author}.</Span>
              </ReviewsDescr>
              <ReviewsDescr>{content}</ReviewsDescr>
            </Item>
          ))}
        </ul>
      )}
      {!reviews.length && <Title>No Reviews.</Title>}
    </>
  );
};

export default Reviews;
