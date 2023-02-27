import React from "react";
import ReactDOM from "react-dom";
import BooksViewModel from "./Components/Books/ViewModel/Books.ctrl";
import "./styles.css";

import BooksMain from "./Components/Books/index";
export const Context = React.createContext({});

const App = () => {
  return (
    <div>
      <BooksMain />
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
