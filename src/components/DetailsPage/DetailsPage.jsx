import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const movie = useSelector((store) => store.exactMovie);

  useEffect(() => {
    // grab details about specific movie
    dispatch({
      type: 'FETCH_EXACT_MOVIE',
      payload: { id },
    });
  }, []);

  return (
    <div>
      <img src={movie.poster} alt={movie.title} />

      <h3>{movie.title}</h3>

      {movie.array_agg ? (
        <ul>
          {movie.array_agg.map((genre, index) => {
            return <li key={index}>{genre}</li>;
          })}
        </ul>
      ) : (
        <ul>none</ul>
      )}

      <p>{movie.description}</p>

      <button onClick={() => history.push('/')}>Back</button>
    </div>
  );
}

export default DetailsPage;
