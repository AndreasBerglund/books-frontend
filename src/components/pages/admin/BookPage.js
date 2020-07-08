import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import server from "../../Server";
import { AuthContext } from "../../../context/authContext";


class BookPage extends Component {
  static contextType = AuthContext

  constructor(props) {
    super();
    let { id } = props.match.params;
    this.state = { id: id, title: "", updating: false };
  }

  componentDidMount() {
    this.getChapter();
  }

  getChapter() {
    axios.get(server.base_url + "/api/books/" + this.state.id).then((data) => {
      this.setState({
        title: data.data.title,
      });
    });
  }

  updateTitle = (e) => {
    const { token } = this.context
    console.log(token)
    this.setState({
      title: e.target.value,
      updating: true,
    });
    axios
      .patch(
        server.base_url + "/api/books/" + this.state.id,
        { title: this.state.title },
        {
          headers: { "auth-token": token  },
        }
      )
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          this.setState({
            updating: false,
          });
        }
      });
  };

  render() {
    return (
      <div className={this.state.updating ? "updating" : ""}>
        <h1>{this.state.title}</h1>
        <input
          type="text"
          value={this.state.title}
          onChange={this.updateTitle}
        ></input>
        
        <p> {this.state.id}</p>
      </div>
    );
  }
}

export default BookPage;
