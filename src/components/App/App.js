import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import AddMovie from '../AddMovie/AddMovie';
import DetailsPage from '../DetailsPage/DetailsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page */}
        <Route path="/movie/:id" exact>
          <DetailsPage />
        </Route>

        {/* Add Movie page */}
        <Route path="/add">
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}

export default App;
