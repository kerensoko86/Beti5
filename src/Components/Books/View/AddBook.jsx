import React from "react";
import TextInput from "../../Common/Inputs/TextInput";

const AddBook = ({ newBook, handleChange }) => {
  return (
    <div>
      <h3>Add New Book</h3>
      <TextInput
        lableName={"Book Name: "}
        id="name"
        value={newBook.name || ""}
        onChange={handleChange}
      />
      <TextInput
        lableName={"Book Author: "}
        id="author"
        value={newBook.author || ""}
        onChange={handleChange}
      />
    </div>
  );
};

export default AddBook;
