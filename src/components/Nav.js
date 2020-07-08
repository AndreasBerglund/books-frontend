import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return(
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/books">Books</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav