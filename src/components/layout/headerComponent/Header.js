import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {
  return (
    <header className="navbar-fixed">
      <nav className="z-depth-5">
        <div className="nav-wrapper amber">
          <div className="container">
            <NavLink exact to="/" className="brand-logo small">
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
            </NavLink>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <NavLink exact to="/">
                  <i className="material-icons">home</i>
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/contacts">
                  <i className="material-icons">contacts</i>
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/contact/add">
                  <i className="material-icons">add</i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
