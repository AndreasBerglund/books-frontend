import React, { Component } from "react";
import { Link } from "react-router-dom"
import axios from "axios"; 
import { AuthContext } from "../../context/authContext";


class Login extends Component {
  static contextType = AuthContext

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    axios.post(
      "http://localhost:8080/api/author/login",
      {
        email: email,
        password: password,
      }
     // { withCredentials: true }
    ).then(res => {

       const { setLoggedIn, setUser, setToken } = this.context     
       setLoggedIn(true);
       setToken( res.data.token );
       setUser( res.data.author );
       
    }).catch(err => {
        console.log('Login error', err)
    });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
            autoComplete="user-email"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            autoComplete="current-password"
            required
          />
          <button type="submit">Login</button>
        </form>
        <Link to="/register"> Register </Link>
      </div>
    );
  }
}
export default Login;
