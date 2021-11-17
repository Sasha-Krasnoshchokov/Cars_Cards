import React from 'react';
import './Socials.scss';
import facebook from '../../images/icons/facebook.svg';
import instagram from '../../images/icons/instagram.svg';

function Socials() {
  return (
    <>
      <section className="socials">

        <a
          className="nav-bar__link"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="nav-bar__facebook"
            src={facebook}
            alt="Facebook logo"
            width="18"
          />
        </a>

        <a
          className="nav-bar__link"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="nav-bar__instagram"
            src={instagram}
            alt="Instagram logo"
            width="25"
          />
        </a>

      </section>
    </>
  );
}

export default Socials;