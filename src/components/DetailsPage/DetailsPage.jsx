import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './DetailsPage.css';

import { Container, Grid, Button } from '@material-ui/core';

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
    <Container maxWidth="md">
      <br />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img src={movie.poster} alt={movie.title} />
        </Grid>

        <Grid item xs={8}>
          <h2>{movie.title}</h2>

          {movie.array_agg ? (
            <div>
              {movie.array_agg.map((genre, index) => {
                return (
                  <span className="genreItem" key={index}>
                    {genre}
                  </span>
                );
              })}
            </div>
          ) : (
            <span></span>
          )}

          <p>{movie.description}</p>
        </Grid>
      </Grid>

      <Button variant="outlined" onClick={() => history.push('/')}>
        Back
      </Button>
    </Container>
  );
}

export default DetailsPage;
