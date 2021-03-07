import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function DetailsPage() {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    //grab details about specific movie
    dispatch({
      type: 'FETCH_EXACT_MOVIE',
      payload: { id: params.id },
    });
  });

  return <div>Details {params.id}</div>;
}

export default DetailsPage;
