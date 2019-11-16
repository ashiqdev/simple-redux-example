import React, { Component } from "react";
import BookList from "./BookList";
import BookDetails from "./BookDetails";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <BookList />
        </div>
        <div className="column eight wide">
          <BookDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
