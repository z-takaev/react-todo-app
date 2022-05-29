import classNames from 'classnames';
import React from 'react';
import { BsCheck } from 'react-icons/bs';

function checkbox({ isChecked, onToggle }) {
  return (
    <div
      className={classNames(
        'w-6 h-6 flex justify-center items-center  text-xl text-white cursor-pointer border-2 border-purple-600 rounded-md',
        {
          'bg-purple-600': isChecked,
        },
      )}
      onClick={() => onToggle()}>
      {isChecked && <BsCheck />}
    </div>
  );
}

export default checkbox;
