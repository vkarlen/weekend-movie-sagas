import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css';

import { Container, Grid, Card } from '@material-ui/core';

function MovieList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  return (
    <Container maxWidth="lg" id="movieContainer">
      <h2>Featured Films</h2>
      <Grid container spacing={2}>
        {movies.map((movie) => {
          return (
            <Grid item xs={2} key={movie.id}>
              <Card>
                <h3>{movie.title}</h3>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  onClick={() => history.push(`/movie/${movie.id}`)}
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default MovieList;
