import React, { Component } from "react";
import { Link } from "react-router-dom";

class BookLink extends Component {
  render() {
  return <div>{ this.props.title } <Link to={ '/book/' +  this.props.id } >Read</Link> </div>;
  }
}

export default BookLink;
