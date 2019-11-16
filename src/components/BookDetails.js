import React from "react";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const book = useSelector(state => state.selectedBook);
  if (!book) {
    return <div>Select a book</div>;
  }

  return (
    <div>
      <h3>Details For: </h3>
      <p>
        Title: {book.title}
        <br/>
        Pages: {book.numOfPages}
      </p>
    </div>
  )
};

// const mapStateToProps = state => {
//   console.log(state);
//   return { book: state.selectedBook };
// };

// export default connect(mapStateToProps)(BookDetails);

export default BookDetails;