import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

// MATERIAL UI
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// COMPONENTS
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import AddMovie from '../AddMovie/AddMovie';
import DetailsPage from '../DetailsPage/DetailsPage';

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: '#c81912',
  //   },
  //   secondary: {
  //     main: '',
  //   },
  // },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />

          <Route path="/" exact>
            <MovieList />
          </Route>

          <Route path="/movie/:id" exact>
            <DetailsPage />
          </Route>

          <Route path="/add">
            <AddMovie />
          </Route>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
