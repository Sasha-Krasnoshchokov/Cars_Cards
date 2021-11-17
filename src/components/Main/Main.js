import React from 'react';
import './Main.scss';
import Catalog from './Catalog/Catalog';
import Subscribe from './Subscribe/Subscribe';
import FAQ from './FAQ/FAQ';

function Main() {
  return (
    <>
      <main className="main" id="catalog">
        <Catalog />
        <Subscribe />
        <FAQ />
      </main>
    </>
  );
}

export default Main;