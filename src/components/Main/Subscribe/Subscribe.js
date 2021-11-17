import React from 'react';
import './Subscribe.scss';

function Subscribe() {
  return (
    <>
      <section className="subscribe" id="subscribe">
        <article className="subscribe__request">
          <h3 className='subscribe__title'>
            Haven't found a suitable vehicle?
          </h3>
          <p className="subscribe__text">
            Sign up for our newsletter and be the first to know
            when we publish new vehicle offers.
          </p>
        </article>
        <form className="subscribe__form">
          <input
            className="subscribe__input"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button className="subscribe__button" type="submit">
            Subscribe now
          </button>
        </form>
      </section>
    </>
  );
}

export default Subscribe;