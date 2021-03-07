import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h1>The Movies Saga!</h1>
      <nav>
        <div>
          <Link to="/add">Add Movie</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
