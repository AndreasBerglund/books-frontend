import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute, PropsRoute } from "./components/routing/PropsRoute";
import "./App.css";

import Admin from "./components/pages/admin/Admin";
import Nav from "./components/Nav";
import Books from "./components/pages/admin/Books";
import BookPage from "./components/pages/admin/BookPage";
import Registration from "./components/account/Registration";

import Login from "./components/account/Login";
import AuthContextProvider from "./context/authProvider";

class App extends Component {
  render() {
    return (
      <AuthContextProvider>
        <Router>
          <Nav />

          <Route path="/" exact></Route>
          <PropsRoute path="/books" exact component={Books} />
          <PropsRoute path="/login" component={Login} />
          <PropsRoute path="/register" exact component={Registration} />
          <PropsRoute path="/book/:id" exact component={BookPage} />
          <PrivateRoute path="/admin" redirectTo="/login" component={Admin} />

        </Router>
      </AuthContextProvider>
    );
  }
}

export default App;
