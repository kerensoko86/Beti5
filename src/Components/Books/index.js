import React, { useContext } from "react";

import BookList from "./View/BookList";
import MainButton from "../Common/Buttons/MainButton";
import RadioInput from "../Common/Inputs/RadioInput";
import { Context } from "../../index";

import TypeOfBooks from "../Books/ViewModel/Books.type";

const BooksMain = () => {
  const context = useContext(Context);

  return (
    <>
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
      <BookList list={context.list} />
      <MainButton value={"Add"} handleClick={() => alert("TBD")} />
    </>
  );
};

export default BooksMain;
