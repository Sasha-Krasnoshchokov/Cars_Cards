import React from 'react';
import './Header.scss';
import NavBar from '../NavBar/NavBar';
import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';

function Header() {
  return (
    <>
      <header className="header" id="home">
        <section className="header__navigation">
          <Logo width="139" height="35" />
          <div className="header__nav-socials">
            <NavBar />
            <Socials />
          </div>
        </section>

        <h1 className="header__title">
          The right way to get a car
        </h1>

        <section className="header__description">
          <p className="header__text">
            Monza Motorsports is a boutique-style dealership specializing in premium imports.
            We offer an advanced online vehicle purchasing experience with integrated financing
            and contactless home delivery.
          </p>
          <p className="header__text">
            All of our cars come with a 5 day/500 kilometres no-hassle exchange option.
            Since 2012 Monza Motorsports
            <br/>
            has been the benchmark for innovation in the
            automotive industry.
          </p>
        </section>

        <a href="#catalog">
          <div className="header__button">
            Browse cars
          </div>
        </a>

      </header>
    </>
  );
}

export default Header;