import React, { Component } from "react";
import axios from "axios";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      registration_errors: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    console.log("form submitted");
    const { name, email, password } = this.state;
    e.preventDefault();
    axios.post(
      "http://localhost:8080/api/author/register",
      {
        name: name,
        email: email,
        password: password,
      },
      {
        headers: { 'auth-token' : `blouda` }
      }
     // { withCredentials: true }
    ).then(res => {
        console.log('Registration response', res)
    }).catch(err => {
        console.log('Registration error', err)
    });
  }
  handleChange(e) {
    console.log("handle change");
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}
export default Registration;
