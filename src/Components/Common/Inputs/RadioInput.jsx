import React from "react";

const RadioInput = ({ lableName, value, handleClick, checked, name }) => {
  return (
    <label>
      {lableName}
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onClick={handleClick}
      />
    </label>
  );
};

export default RadioInput;
