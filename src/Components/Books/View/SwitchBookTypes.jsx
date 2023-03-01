import React from "react";
import RadioInput from "../../Common/Inputs/RadioInput";

const SwitchBookTypes = ({ TypeOfBooks, booksType, handleChange }) => {
  return (
    <div className="switchInput">
      <RadioInput
        name={"switch"}
        lableName={"All"}
        value={TypeOfBooks.ALL}
        handleClick={() => handleChange(TypeOfBooks.ALL)}
        checked={booksType === TypeOfBooks.ALL}
      />
      <RadioInput
        name={"switch"}
        lableName={"Private"}
        value={TypeOfBooks.PRIVATE}
        handleClick={() => handleChange(TypeOfBooks.PRIVATE)}
        checked={booksType === TypeOfBooks.PRIVATE}
      />
    </div>
  );
};

export default SwitchBookTypes;
