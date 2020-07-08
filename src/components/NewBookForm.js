import React, { Component } from "react";
import axios from "axios";

class NewBookForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("handle change");
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    console.log("submitted new book");
    e.preventDefault();
    const { title } = this.state;
    axios
      .post(
        "http://localhost:8080/api/books/", { title },
        { 
          headers: { 'auth-token': localStorage.getItem("blouda-token") }
        }

        // { withCredentials: true }
      )
      .then((res) => {
        this.props.getBooks();
        console.log("new book response", res);
      })
      .catch((err) => {
        console.log("new book error", err);
      });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
            placeholder="Titel"
            required
          ></input>
          <button type="submit">Skriv ny bog</button>
        </form>
      </div>
    );
  }
}

export default NewBookForm;
