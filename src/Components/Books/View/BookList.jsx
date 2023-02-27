import React from "react";
import BookItem from "./BookItem";

const BookList = ({ list }) => {
  return (
    <div>
      <h3>Book List</h3>
      {list.map((book, i) => (
        <BookItem key={i} book={book} />
      ))}
    </div>
  );
};

export default BookList;
