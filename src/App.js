import React, { Component } from "react";
import "./styles.css";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Context from "./Context";

const url = "https://l0med.sse.codesandbox.io";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.routerRef = React.createRef();
  }

  async componentDidMount() {
    let user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : null;

    this.setState({ user });
  }

  login = async (email, password) => {
    const res = await axios
      .post(url + "/users", { email, password })
      .catch((res) => {
        return { status: 401, message: "Unauthorized" };
      });
    // console.log(res.data.accessToken);
    console.log(JSON.stringify(res));
    if (res.status === 201) {
      const { email } = jwtDecode(res.data.accessToken);
      const user = {
        email,
        token: res.data.accessToken,
        accessLevel: email === "admin@example.com" ? 0 : 1
      };

      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  };

  logout = (e) => {
    e.preventDefault();
    this.setState({ user: null });
    localStorage.removeItem("user");
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          login: this.login
        }}
      >
        <div className="App">
          <div className="container">
            <Navbar />
            <Home />
            <Login />
          </div>
          <Modal />
        </div>
      </Context.Provider>
    );
  }
}
