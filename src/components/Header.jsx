import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ user, onLogout }) {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/properties">Properties</Link></li>
          {user ? (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><button onClick={onLogout}>Logout</button></li>
            </>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

