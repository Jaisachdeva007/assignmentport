import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar fixed-top">
      <div className="container">
        <Link to="/">Jai Sachdeva</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;