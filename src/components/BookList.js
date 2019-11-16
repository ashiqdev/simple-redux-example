import React, { Component } from "react";
import { connect, useSelector } from "react-redux";
import { selectBook } from "../actions";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <div className="item" key={book.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectBook(book)}
            >
              Select
            </button>
          </div>
          <div className="content">{book.title}</div>
        </div>
      );
    });
  }

  render() {
    // this.props === {songs: state.songs}
    // console.log(this.props);

    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// anytime redux store changes, this method will be called
const mapStateToProps = state => {
  console.log(state);
  // whatever I returned from here, it will be available as props in this component
  return {
    books: state.books
  };
};

export default connect(mapStateToProps, { selectBook })(BookList);


// Hooks

// const BookList = () => {
//   const state = useSelector(state => state);
//   console.log(state);
//   return <div>BookList</div>;
// };

// export default BookList;
