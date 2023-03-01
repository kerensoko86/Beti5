import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { isEmpty } from "lodash";
import "./styles.css";

import BooksViewModel from "./Components/Books/ViewModel/Books.ctrl";
import BookList from "./Components/Books/View/BookList";
import MainButton from "./Components/Common/Buttons/MainButton";

import TypeOfBooks from "./Components/Books/ViewModel/Books.type";
import AddBook from "./Components/Books/View/AddBook";
import SwitchBookTypes from "./Components/Books/View/SwitchBookTypes";

export const Context = React.createContext({});

const App = () => {
  const context = useContext(Context);

  return (
    <div>
      <SwitchBookTypes
        handleChange={context.setBooksType}
        TypeOfBooks={TypeOfBooks}
        booksType={context.booksType}
      />
      <BookList list={context.list} />
      <hr />
      <AddBook newBook={context.newBook} handleChange={context.handleChange} />
      <MainButton
        value={"Add"}
        type="submit"
        handleClick={() => context.addBook(context.newBook)}
        disabled={
          isEmpty(context.newBook.name) || isEmpty(context.newBook.author)
        }
      />
    </div>
  );
};

const ObservedApp = App;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BooksViewModel>
    <ObservedApp />
  </BooksViewModel>,
  rootElement
);
