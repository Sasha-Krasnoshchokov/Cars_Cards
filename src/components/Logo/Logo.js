import React from 'react';
import logo from '../../images/icons/logo.svg';

function Logo({ width, height }) {
  return (
    <>
      <a className="logo" href="#home">
        <img
          src={logo}
          alt="Monza motorsport logo"
          width={`${width}`}
          height={`${height}`}
        />
      </a>

    </>
  );
}

export default Logo;
