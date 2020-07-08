import React, { Component } from "react";
import { AuthContext } from "./authContext";
import axios from "axios";

export default class AuthContextProvider extends Component {
  state = {
    user: "",
    logged_in: false,
    token: "",
  };

  setToken = (data) => {
    localStorage.setItem("blouda-token", data);
    this.setState({ token: data });
  };

  getToken = () => {
    const token = localStorage.getItem("blouda-token");
    if (token) {
      this.setState({ token });
      this.setState({ logged_in: true });
    }
  };

  setLoggedIn = (logged_in) => {
    this.setState({
      logged_in,
    });
  };

  setUser = (user_data) => {
    this.setState({
      user: user_data,
    });
  };

  getAuthor = () => {
    //token
    const token = localStorage.getItem("blouda-token");
    if (token) {
      //user is signed in
      axios
        .get("http://localhost:8080/api/author/current", {
          headers: { "auth-token": localStorage.getItem("blouda-token") },
        })
        .then((result) => {
          console.log(result);
          this.setState({ user: result.data });
        });
    } else {
      this.setState({ logged_in: false });
    }
  };

  componentWillMount() {
    this.getToken();
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          user: this.state.user,
          loggedIn: this.state.logged_in,
          token: this.state.token,
          setLoggedIn: this.setLoggedIn,
          setUser: this.setUser,
          setToken: this.setToken,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
