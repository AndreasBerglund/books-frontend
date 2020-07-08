import React, { Component } from "react";
import NewBookForm from "../../NewBookForm";
import axios from 'axios';
import ListBooks from '../../ListBooks';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books : []
    }
    this.getBooks = this.getBooks.bind(this) 
  }
  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    axios
      .get("http://localhost:8080/api/books/")
      .then((res) => {
        console.log(res);
        this.setState({ books: res.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Books</h1>
        <p>Displays all books</p>
        <NewBookForm getBooks={this.getBooks}/>
        <ListBooks  books={this.state.books}/>
      </div>
    );
  }
}

export default Books;
