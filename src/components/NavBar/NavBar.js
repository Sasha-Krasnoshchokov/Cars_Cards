import React from 'react';
import './NavBar.scss';

function NavBar() {
  return (
    <>
      <nav className="nav-bar" role="navigation">
        <ul className="nav-bar__list">
          <li  className="nav-bar__item">
            <a className="nav-bar__link" href="#home">
              Inventory
            </a>
          </li>
          <li  className="nav-bar__item">
            <a className="nav-bar__link" href="#home">
              Financing
            </a>
          </li>
          <li  className="nav-bar__item">
            <a className="nav-bar__link" href="#subscribe">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;