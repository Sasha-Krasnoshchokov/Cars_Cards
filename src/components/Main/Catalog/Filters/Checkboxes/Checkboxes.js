import React, { useState } from 'react';
import classnames from 'classnames';
import './Checkboxes.scss';

function Checkboxes() {
  const [isChecked, setIschecked] = useState(false);

  return (
    <>
      <div
        onClick={() => setIschecked(!isChecked)}
        className="checkboxes"
      >
        <div
          className={
            classnames({
              'checkboxes__input': true,
              'checkboxes__input-active': isChecked,
            })
          }
          id="checked"
        />
        <p
          className={
            classnames({
              'checkboxes__title': true,
              'checkboxes__title-active': isChecked,
            })
          }
        >
          Instantly available vehicles
        </p>
      </div>
    </>
  );
}

export default Checkboxes;