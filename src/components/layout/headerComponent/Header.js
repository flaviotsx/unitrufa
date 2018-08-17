import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header className="navbar-fixed">
      <nav className="z-depth-5">
        <div className="nav-wrapper amber">
          <div className="container">
            <Link to="/" className="brand-logo small">
              {/* <img
                className="responsive-img"
                style={{ height: '40px', position: 'relative', top: '7px' }}
                src={logo}
                alt="logo"
              /> */}
              <i
                className="material-icons brown-text"
                style={{ fontSize: '4rem' }}
              >
                lens
              </i>
              Unitrufa
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">
                  <i className="material-icons">home</i>
                </Link>
              </li>
              <li>
                <Link to="/contacts">
                  <i className="material-icons">contacts</i>
                </Link>
              </li>
              <li>
                <Link to="/contact/add">
                  <i className="material-icons">add</i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
