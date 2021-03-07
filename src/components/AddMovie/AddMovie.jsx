import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

function AddMovie() {
  const dispatch = useDispatch();

  const genres = useSelector((store) => store.genres);

  const [newTitle, setNewTitle] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newDescription, setNewDescription] = useState('');

  useEffect(() => {
    dispatch({ type: 'FETCH_GENRES' });
  }, []);

  console.log(genres);
  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log('on submit');
  };

  return (
    <div>
      <h3>Add a Movie</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          label="Title"
          value={newTitle}
          onChange={(evt) => setNewTitle(evt.target.value)}
        ></input>

        <input
          type="text"
          label="Poster Image"
          value={newImage}
          onChange={(evt) => setNewImage(evt.target.value)}
        ></input>

        <textarea
          label="Description"
          value={newDescription}
          onChange={(evt) => setNewDescription(evt.target.value)}
        ></textarea>

        <select name="genre">{/* map out genres */}</select>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddMovie;
