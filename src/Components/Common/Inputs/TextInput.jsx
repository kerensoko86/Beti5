import React from "react";

const TextInput = ({ lableName, id, value, onChange }) => {
  return (
    <label>
      {lableName}
      <input
        className="textInput"
        type="text"
        id={id}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default TextInput;
