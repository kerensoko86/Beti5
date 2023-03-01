import React from "react";

const MainButton = ({ value, handleClick, disabled }) => {
  return (
    <button onClick={handleClick} disabled={disabled}>
      {value}
    </button>
  );
};

export default MainButton;
