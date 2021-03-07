import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DetailsPage() {
  const params = useParams();
  const dispatch = useDispatch();
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
      <img src={movie.poster} />

      <h3>{movie.title}</h3>

      <ul>
        {movie.array_agg.map((genre) => {
          return <li>{genre}</li>;
        })}
      </ul>

      <p>{movie.description}</p>
    </div>
  );
}

export default DetailsPage;
