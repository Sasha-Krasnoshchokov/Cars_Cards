import React from 'react';
import './DropMenu.scss';
import classnames from 'classnames';
import { useState } from 'react/cjs/react.development';

function DropMenu({
  isOpenQuery,
  setIsOpenQuery,
  query,
  setQuery,
  isSelectQuery,
  setIsSelectQuery,
  arrayForMenu = [],
}) {
  const [count, setCount] = useState(0);

  const selectQuery = (event) => {
    setQuery(event.target.innerText);
    if (count === 0) {
      setIsSelectQuery(!isSelectQuery);
      setCount(1);
    }
    setIsOpenQuery(!isOpenQuery);
  };

  return (
    <>
      <div className="drop-menu">

        <div className="drop-menu__menu">

          <span
            className={classnames({
              'drop-menu__menu-title': true,
              'drop-menu__menu--active': isOpenQuery,
            })}
          >
            {query}
          </span>

          <div
            onClick={() => setIsOpenQuery(!isOpenQuery)}
            className={classnames({
              'drop-menu__menu-openner': true,
              'drop-menu__menu--closure': isOpenQuery,
            })}
          />

        </div>

        <ul className="drop-menu__items">
          {
            arrayForMenu.map(item => (
              <li
                onClick={(event) => selectQuery(event)}
                className="drop-menu__item"
                key={item}
              >
                {item}
              </li>
            ))
          }

        </ul>

      </div>
    </>
  );
}

export default DropMenu;