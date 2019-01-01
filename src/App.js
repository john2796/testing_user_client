import React, { Component } from "react";

export default class App extends Component {
  state = {
    data: [],
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: ""
  };

  render() {
    return (
      <form>
        <br />
        <input type="text" name="firstName" />
        <label>firstName</label>
        <br />
        <input type="text" name="lastName" />
        <label>lastName</label>
        <br />
        <input type="text" name="username" />
        <label>username</label>
        <br />
        <input type="text" name="password" />
        <label>password</label>
        <br />

        <input type="text" name="email" />
        <label>email</label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
