import React from "react";

const BookItem = ({ book }) => {
  return (
    <div className="bookItem">
      <span className="bookAuthor">{book.author}</span>:{" "}
      <span className="bookName">{book.name}</span>
    </div>
  );
};

export default BookItem;
