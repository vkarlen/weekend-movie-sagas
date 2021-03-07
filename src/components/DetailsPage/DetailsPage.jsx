import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DetailsPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const movie = useSelector((store) => store.exactMovie);
  //const movie = useSelector(store);

  useEffect(() => {
    //grab details about specific movie
    dispatch({
      type: 'FETCH_EXACT_MOVIE',
      payload: { id: params.id },
    });
  }, []);

  return (
    <div>
      <img src={movie.poster} alt={movie.title} />

      <h3>{movie.title}</h3>

      <ul>
        {movie.array_agg.map((genre) => {
          return <li>{genre}</li>;
        })}
      </ul>

      <p>{movie.description}</p>

      <button onClick={() => history.push('/')}>Back</button>
    </div>
  );
}

export default DetailsPage;
