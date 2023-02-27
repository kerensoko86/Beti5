import React, { useState } from "react";
import { Context } from "../../../index";
import booksRepository from "../Repository/Books.repository";
import TypeOfBooks from "./Books.type";

const BooksViewModel = ({ children }) => {
  const [list, setList] = useState([]);
  const [booksType, setBooksType] = useState(TypeOfBooks.ALL);

  React.useEffect(() => {
    try {
      const load = async () => {
        let books = [];
        if (booksType === TypeOfBooks.ALL) {
          books = await booksRepository.getAllBooks();
        } else {
          books = await booksRepository.getPrivateBooks();
        }
        setList(books);
      };

      load();
    } catch (err) {
      throw new Error(err);
    }
  }, [booksType]);

  return (
    <Context.Provider value={{ list, setBooksType, booksType }}>
      {children}
    </Context.Provider>
  );
};

export default BooksViewModel;
