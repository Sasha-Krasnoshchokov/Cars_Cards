import React from 'react';
import './Filters.scss';
import Dropdowns from './Dropdowns/Dropdowns';
import Checkboxes from './Checkboxes/Checkboxes';
import Sorting from './Sorting/Sorting';

function Filters() {
  return (
    <>
      <section className="filters">
        <Dropdowns />
        <div className="filters__check-sort">
          <Checkboxes />
          <Sorting />
        </div>
      </section>
    </>
  );
}

export default Filters;