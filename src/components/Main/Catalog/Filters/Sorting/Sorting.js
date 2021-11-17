import React, { useState } from 'react';
import './Sorting.scss';
import classnames from 'classnames';

const items = [
  'Publication date',
  'Price (ascending)',
  'Price (descending)',
  'Mileage (ascending)',
  'Mileage (descending)',
  'Performance (ascending)',
  'Performance (descending)'
];

function Sorting() {
  const [sortByAscending, setSortByAscending] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [sortParam, setSortParam] = useState('Select sort parameter')

  const selectParam = (event) => {
    setSortParam(event.target.innerText);
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <section className="sorting">

        <span className="sorting__title">
          Sort by
        </span>

        <div
          onClick={() => setSortByAscending(!sortByAscending)}
          className="sorting__arrows"
        >
          <div
            className={
              sortByAscending
                ? 'sorting__arrows--up-active'
                : 'sorting__arrows--up'
            }
          />
          <div
            className={
              sortByAscending
                ? 'sorting__arrows--down'
                : 'sorting__arrows--down-active'
            }
          />
        </div>

        <div className="sorting__dropdown">

          <span
            onClick={() => setIsOpen(!isOpen)}
            className="sorting__dropdown-title"
          >
            {sortParam}
          </span>

          <div id="selectSortBy"
            className={classnames({
              'sorting__dropdown-menu': true,
              'sorting__dropdown-menu--open': isOpen,
            })}
          >
            <ul className="sorting__dropdown-items">
              {
                items.map(item => (
                  <li
                    onClick={(event) => selectParam(event)}
                    className="sorting__dropdown-item"
                    key={item}
                  >
                    {item}
                  </li>
                ))
              }

            </ul>
          </div>
        </div>

      </section>
    </>
  );
}

export default Sorting;