import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBook } from "../actions";

// useDispatch + useSelector is alternative of 'connect + mapStateFromProps'

const BookList = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { books } = state;
  console.log(books);

  const renderList = () => {
    return books.map(book => {
      return (
        <div className="item" key={book.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => dispatch(selectBook(book))}
            >Select</button>
          </div>
          <div className="content">{book.title}</div>
        </div>
      );
    });
  };

  return <div className="ui rendered list">{renderList()}</div>;
};

export default BookList;
