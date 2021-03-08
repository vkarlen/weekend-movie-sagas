import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

import './AddMovie.css';

import {
  TextField,
  Card,
  Container,
  Select,
  MenuItem,
  Button,
  Grid,
  InputLabel,
  FormControl,
} from '@material-ui/core';

function AddMovie() {
  const dispatch = useDispatch();
  const history = useHistory();

  const genres = useSelector((store) => store.genres);

  // Local Stores
  const [newTitle, setNewTitle] = useState('');
  const [newPoster, setNewPoster] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newGenre, setNewGenre] = useState('');

  useEffect(() => {
    dispatch({ type: 'FETCH_GENRES' });
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Send all info to the server
    dispatch({
      type: 'ADD_MOVIE',
      payload: {
        title: newTitle,
        poster: newPoster,
        description: newDescription,
        genre_id: newGenre,
      },
    });

    history.push('/');
  }; // end handleSubmit

  const handleCancel = () => {
    clearInputs();

    history.push('/');
  }; //end handleCancel

  const clearInputs = () => {
    // Clears all inputs
    setNewDescription('');
    setNewGenre('');
    setNewPoster('');
    setNewTitle('');
  }; // end clearInputs

  return (
    <Container maxWidth="sm">
      <h2>Add a Movie</h2>

      <Card>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} direction="column" justify="center">
            <Grid item xs={12}>
              <TextField
                type="text"
                variant="outlined"
                label="Title"
                className="movieInput"
                value={newTitle}
                onChange={(evt) => setNewTitle(evt.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                type="text"
                variant="outlined"
                label="Poster Image"
                className="movieInput"
                value={newPoster}
                onChange={(evt) => setNewPoster(evt.target.value)}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Description"
                variant="outlined"
                rows={4}
                className="movieInput"
                value={newDescription}
                onChange={(evt) => setNewDescription(evt.target.value)}
                required
                multiline
              />
            </Grid>

            <Grid item xs={5}>
              <FormControl variant="outlined" className="movieInput">
                <InputLabel id="pickGenre">Pick a Genre</InputLabel>
                <Select
                  name="genre"
                  labelId="pickGenre"
                  onChange={(evt) => setNewGenre(evt.target.value)}
                  required
                >
                  {genres.map((genre) => {
                    return <MenuItem value={genre.id}>{genre.name}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button variant="outlined" type="submit">
                Save
              </Button>

              <Button variant="outlined" type="button" onClick={handleCancel}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Container>
  );
}

export default AddMovie;
