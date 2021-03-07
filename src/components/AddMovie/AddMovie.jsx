import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

function AddMovie() {
  const dispatch = useDispatch();

  const genres = useSelector((store) => store.genres);

  const [newTitle, setNewTitle] = useState('');
  const [newPoster, setNewPoster] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newGenre, setNewGenre] = useState('');

  useEffect(() => {
    dispatch({ type: 'FETCH_GENRES' });
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log('on submit', newGenre);

    dispatch({
      type: 'ADD_MOVIE',
      payload: {
        title: newTitle,
        poster: newPoster,
        description: newDescription,
        genre_id: newGenre,
      },
    });
  }; // end handleSubmit

  const handleCancel = () => {
    console.log('in cancel');
  }; //end handleCancel

  return (
    <div>
      <h3>Add a Movie</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          label="Title"
          value={newTitle}
          onChange={(evt) => setNewTitle(evt.target.value)}
          required
        ></input>

        <input
          type="text"
          label="Poster Image"
          value={newPoster}
          onChange={(evt) => setNewPoster(evt.target.value)}
          required
        ></input>

        <textarea
          label="Description"
          value={newDescription}
          onChange={(evt) => setNewDescription(evt.target.value)}
          required
        ></textarea>

        <select
          name="genre"
          onChange={(evt) => setNewGenre(evt.target.value)}
          required
        >
          <option disabled selected value>
            Select a Genre
          </option>
          {genres.map((genre) => {
            return <option value={genre.id}>{genre.name}</option>;
          })}
        </select>

        <button type="button" onClick={handleCancel}>
          Cancel
        </button>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddMovie;
