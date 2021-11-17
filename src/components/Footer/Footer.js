import React from 'react';
import './Footer.scss';
import NavBar from '../NavBar/NavBar';
import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';

function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="footer__navigation">
          <Logo width="191" height="48" />
          <NavBar />
          <Socials />
        </section>
      </footer>
    </>
  );
}

export default Footer;