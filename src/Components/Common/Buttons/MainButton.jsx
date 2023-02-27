import React from "react";

const MainButton = ({ value, handleClick }) => {
  return <button onClick={handleClick}>{value}</button>;
};

export default MainButton;
