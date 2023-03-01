import React from "react";
import RadioInput from "../../Common/Inputs/RadioInput";

const SwitchBookTypes = ({ TypeOfBooks, context }) => {
  return (
    <div className="switchInput">
      <RadioInput
        name={"switch"}
        lableName={"All"}
        value={TypeOfBooks.ALL}
        handleClick={() => context.setBooksType(TypeOfBooks.ALL)}
        checked={context.booksType === TypeOfBooks.ALL}
      />
      <RadioInput
        name={"switch"}
        lableName={"Private"}
        value={TypeOfBooks.PRIVATE}
        handleClick={() => context.setBooksType(TypeOfBooks.PRIVATE)}
        checked={context.booksType === TypeOfBooks.PRIVATE}
      />
    </div>
  );
};

export default SwitchBookTypes;
