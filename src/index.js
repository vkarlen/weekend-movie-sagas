import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies);
  yield takeEvery('FETCH_EXACT_MOVIE', fetchExactMovie);
  yield takeEvery('FETCH_GENRES', fetchAllGenres);
}

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get('/api/movie');
    console.log('get all:', movies.data);
    yield put({ type: 'SET_MOVIES', payload: movies.data });
  } catch {
    console.log('get all error');
  }
} // end fetchAllMovies

function* fetchExactMovie(action) {
  //console.log('in fetch exact', action.payload);

  try {
    const response = yield axios.get(`/api/movie/${action.payload.id}`);

    yield put({
      type: 'SET_EXACT',
      payload: response.data,
    });
  } catch (error) {
    console.log('Error in fetch exact', error);
  }
} // end fetchExactMovie

function* fetchAllGenres() {
  //console.log('in fetchAllGenres');

  try {
    const response = yield axios.get('/api/genre');

    yield put({ type: 'SET_GENRES', payload: response.data });
  } catch {
    console.log('get all error');
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload;
    default:
      return state;
  }
};

// Used to store exact movie retrieved from server
const exactMovie = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EXACT':
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    exactMovie,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
