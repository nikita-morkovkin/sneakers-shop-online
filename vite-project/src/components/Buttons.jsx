import React from 'react';

const Buttons = ({onClickHandler, value, title}) => {
  return (
    <button
      onClick={onClickHandler}
      type="button"
      value={value}
      className={'btns'}
    >
      {title}
    </button>
  );
};

export default Buttons;