import React, { useState } from 'react';
import './Dropdowns.scss';
import classnames from 'classnames';
import DropMenu from './DropMenu/DropMenu';

const years = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'];
const makes = ['AUDI', 'Mazda', 'Volkswagen', 'Mersedes-Benz', 'Toyota', 'Lexus', 'Hyundai'];

function Dropdowns() {
  const [isOpenYear, setIsOpenYear] = useState(false);
  const [isSelectYear, setIsSelectYear] = useState(false);
  const [year, setYear] = useState('Years');
  const [isOpenMake, setIsOpenMake] = useState(false);
  const [isSelectMake, setIsSelectMake] = useState(false);
  const [make, setMake] = useState('Make');
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [isSelectModel, setIsSelectModel] = useState(false);
  const [model, setModel] = useState('Model');
  const [isOpenTrim, setIsOpenTrim] = useState(false);
  const [isSelectTrim, setIsSelectTrim] = useState(false);
  const [trim, setTrim] = useState('Trim');
  const [isOpenMileage, setIsOpenMileage] = useState(false);
  const [isSelectMileage, setIsSelectMileage] = useState(false);
  const [mileage, setMileage] = useState('Mileage');

  const result = 40;

  return (
    <>
      <section className="dropdowns">

        <div id="year"
          className={classnames({
            'drops': true,
            'drops--open': isOpenYear,
            'drops--select': isSelectYear,
          })}
        >

          <DropMenu
            isOpenQuery={isOpenYear}
            setIsOpenQuery={setIsOpenYear}
            query={year}
            setQuery={setYear}
            isSelectQuery={isSelectYear}
            setIsSelectQuery={setIsSelectYear}
            arrayForMenu={years}
          />

        </div>

        <div id="make"
          className={classnames({
            'drops': true,
            'drops--open': isOpenMake,
            'drops--select': isSelectMake,
          })}
        >

          <DropMenu
            isOpenQuery={isOpenMake}
            setIsOpenQuery={setIsOpenMake}
            query={make}
            setQuery={setMake}
            isSelectQuery={isSelectMake}
            setIsSelectQuery={setIsSelectMake}
            arrayForMenu={makes}
          />

        </div>

        <div id="model"
          className={classnames({
            'drops': true,
            'drops--open': isOpenModel,
            'drops--select': isSelectModel,
          })}
        >

          <DropMenu
            isOpenQuery={isOpenModel}
            setIsOpenQuery={setIsOpenModel}
            query={model}
            setQuery={setModel}
            isSelectQuery={isSelectModel}
            setIsSelectQuery={setIsSelectModel}
            arrayForMenu={makes}
          />

        </div>

        <div id="trim"
          className={classnames({
            'drops': true,
            'drops--open': isOpenTrim,
            'drops--select': isSelectTrim,
          })}
        >

          <DropMenu
            isOpenQuery={isOpenTrim}
            setIsOpenQuery={setIsOpenTrim}
            query={trim}
            setQuery={setTrim}
            isSelectQuery={isSelectTrim}
            setIsSelectQuery={setIsSelectTrim}
            arrayForMenu={makes}
          />

        </div>

        <div id="mileage"
          className={classnames({
            'drops': true,
            'drops--open': isOpenMileage,
            'drops--select': isSelectMileage,
          })}
        >

          <DropMenu
            isOpenQuery={isOpenMileage}
            setIsOpenQuery={setIsOpenMileage}
            query={mileage}
            setQuery={setMileage}
            isSelectQuery={isSelectMileage}
            setIsSelectQuery={setIsSelectMileage}
            arrayForMenu={years}
          />

        </div>

        <div className="dropdowns__selected-result">
          <span className="dropdowns__selected-text">
            {result + ' cars'}
          </span>
        </div>

      </section>
    </>
  );
}

export default Dropdowns;
