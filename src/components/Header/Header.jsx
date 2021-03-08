import { Link } from 'react-router-dom';
import './Header.css';

import { Container } from '@material-ui/core';

function Header() {
  return (
    <Container maxWidth="lg" id="banner">
      <h1>The Movie Saga</h1>
      <nav>
        <span>
          <Link to="/" class="navigation">
            Home
          </Link>
        </span>
        <span>
          <Link to="/add" class="navigation">
            Add Movie
          </Link>
        </span>
      </nav>
    </Container>
  );
}

export default Header;
