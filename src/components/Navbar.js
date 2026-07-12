import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import { Link } from 'react-router-dom';

const THEME_SWITCHES = [
  { id: 'switchCheckOlive', theme: 'olive', label: 'Enable Olive Dark Mode' },
  { id: 'switchCheckGrey', theme: 'grey', label: 'Enable Grey Dark Mode' },
  { id: 'switchCheckRed', theme: 'red', label: 'Enable Red Dark Mode' },
  { id: 'switchCheckGreen', theme: 'green', label: 'Enable Green Dark Mode' },
  { id: 'switchCheckBlue', theme: 'blue', label: 'Enable Blue Dark Mode' },
];

export default function Navbar({ title, aboutText, theme, navbarMode, toggleTheme }) {
  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  const labelClass = navbarMode === 'light' ? 'text-dark' : 'text-light';

  return (
    <nav className={`navbar navbar-expand-lg navbar-${navbarMode} bg-${navbarMode} navbar-custom fixed-top`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              type="button"
              className={`btn btn-primary mx-1 my-1 ${navbarMode === 'light' ? 'text-dark' : ''}`}
            >
              Search
            </button>
          </form>

          {THEME_SWITCHES.map(({ id, theme: themeName, label }) => (
            <div key={id} className={`form-check form-switch ${labelClass} mx-3`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id={id}
                checked={theme === themeName}
                onChange={() => toggleTheme(themeName)}
              />
              <label className="form-check-label" htmlFor={id}>
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  theme: PropTypes.string.isRequired,
  navbarMode: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About Text here',
};
