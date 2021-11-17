import React from 'react';
import './Cards.scss';
import classnames from 'classnames';

function Cards({ car }) {
  return (
    <>
      <section className="cards">
        <div>
          <span
              className={classnames({
                'cards__is-sold': true,
                'cards__is-sold-active': car.isSold,
              })}
            >
            SOLD
          </span>
                <img
            className="cards__image"
            src={`${car.source}`}
            alt="Vehicle"
            width="100%"
          />
          <span
              className={classnames({
                'cards__new': true,
                'cards__new-active': car.isNew,
              })}
            >
            New
          </span>
        </div>
        <section className="cards__details">
          <h3 className="cards__title">
            <span className="cards__year">{car.year}</span>
            <span
              className={classnames({
                'cards__model': true,
                'cards-sold': car.isSold,
              })}
            >
              {car.model}
            </span>
          </h3>
          <p className="cards__information">
            <span className="cards__info">{car.mileAge} km</span>
            <span className="cards__info">{car.transmission}</span>
            <span className="cards__info">{car.engineType}</span>
          </p>
          <span
            className={classnames({
              'cards__price': true,
              'cards-sold': car.isSold,
            })}
          >
            ${car.price}
          </span>
        </section>
      </section>
    </>
  );
}

export default Cards;