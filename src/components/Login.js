import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import withContext from "../withContext";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (e) =>
    this.setState({ [e.target.name]: e.target.value, error: "" });

  login = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    if (!username || !password) {
      return this.setState({ error: "Fill all fields!" });
    }
    this.props.context.login(username, password).then((loggedIn) => {
      if (!loggedIn) {
        this.setState({ error: "Invalid Credentails" });
      }
    });
  };
  render() {
    return !this.props.context.user ? (
      <>
        <div className="row ">
          <form className="col-6 offset-3 " onSubmit={this.login}>
            <img
              className="mb-4"
              src="./img/logo.svg"
              alt=""
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="visually-hidden">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control mb-1"
              placeholder="Email address"
              required=""
              autoFocus=""
              name="username"
              onChange={this.handleChange}
            />
            <label htmlFor="inputPassword" className="visually-hidden">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control mb-2"
              placeholder="Password"
              required=""
              name="password"
              onChange={this.handleChange}
            />
            {this.state.error && (
              <div className="has-text-danger">{this.state.error}</div>
            )}
            <button className="w-100 btn btn-lg btn-info" type="submit">
              {" "}
              Sign in{" "}
            </button>
          </form>
        </div>
      </>
    ) : (
      <Redirect to="UserLogged" />
    );
  }
}
export default withContext(Login);
