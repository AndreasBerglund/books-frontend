import React, { Component } from "react";
import { BrowserRouter as Route } from "react-router-dom";

class Admin extends Component {

  render() {
    const { match } = this.props;
    return (
      <div>
        {match.url}
        <h1>Admin</h1>
        {/* admin routes */}
        <Route exact path={`${match.path}/mybooks/`}>
          mybooks
        </Route>
    
      </div>
    );
  }
}

export default Admin;
