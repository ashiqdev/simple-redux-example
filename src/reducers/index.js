import { combineReducers } from "redux";

const booksReducer = () => {
  return [
    { title: "Rich dad, poor kid", numOfPages: 887 },
    { title: "Outliner", numOfPages: 543 },
    { title: "The Alchemist", numOfPages: 89 },
    { title: "Badshah Namdar", numOfPages: 90 }
  ];
};

const selectedBookReducer = (selectedBook = null, action) => {
  if (action.type === "BOOK_SELECTED") {
    return action.payload;
  }
  return selectedBook;
};

export default combineReducers({
  books: booksReducer,
  selectedBook: selectedBookReducer
});
