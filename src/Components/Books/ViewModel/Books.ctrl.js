import React, { useState } from "react";
import { Context } from "../../../index";
import booksRepository from "../Repository/Books.repository";
import TypeOfBooks from "./Books.type";

const BooksViewModel = ({ children }) => {
  const [list, setList] = useState([]);
  const [booksType, setBooksType] = useState(TypeOfBooks.ALL);
  const [newBook, setNewBook] = useState({});

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
  }, [booksType, newBook]);

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.id]: e.target.value });
  };

  const addBook = async ({ name, author }) => {
    let book = {};
    if (name && author) {
      try {
        book = await booksRepository.addBook({ name, author });
        setNewBook(book);
      } catch (err) {
        throw new Error(err);
      }
    }
  };

  return (
    <Context.Provider
      value={{
        list,
        setBooksType,
        booksType,
        addBook,
        newBook,
        setNewBook,
        handleChange,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default BooksViewModel;
