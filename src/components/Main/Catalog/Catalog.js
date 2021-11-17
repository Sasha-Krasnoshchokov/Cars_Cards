import React from 'react';
import Filters from './Filters/Filters';
import Cards from './Cards/Cards';
import './Catalog.scss';
import array from '../../../api/cars';

function Catalog() {
  const cars = array;
  return (
    <>
      <section className="catalog" id="catalog">
        <h2 className="catalog__title">CURRENT OFFERS</h2>
        <Filters />
        <section className="catalog__cards">
          {
            cars.map(car => (
              <Cards car={car} key={car.id}/>
            ))
          }
        </section>
      </section>
    </>
  );
}

export default Catalog;