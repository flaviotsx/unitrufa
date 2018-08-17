import React from 'react';
import { Link } from 'react-router-dom';

import logo from './img/logo-unitrufa.svg';

const Header = props => {
  return (
    <header className="navbar-fixed">
      <nav className="z-depth-5">
        <div className="nav-wrapper amber">
          <div className="container">
            <Link to="/" className="brand-logo small">
              <img
                className="responsive-img"
                style={{ height: '40px', position: 'relative', top: '7px' }}
                src={logo}
                alt="logo"
              />
              Unitrufa
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              <li>
                <Link to="/contact/add">Add New</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
