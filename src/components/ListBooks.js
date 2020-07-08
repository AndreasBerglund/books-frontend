import React, { Component } from "react";
import BookLink from "./BookLink";

class ListBooks extends Component {
  render() {
    return (
      <div>
        {this.props.books.map(( book ) => {
          return <BookLink key={book._id} title={book.title} id={book._id} />;
        })}
      </div>
    );
  }
}

export default ListBooks;
