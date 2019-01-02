import React, { Component } from "react";
import DisplayData from "./_components/DisplayData";
import Login from "./_components/Login";

export default class App extends Component {
  state = {
    data: [],
    "firstName": "",
    "lastName": "",
    "username": "",
    "password": "",
    "email": ""
  };

  componentDidMount = () => {
    this.getData();
  };

  onChangeHander = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  postHandler = (evt) => {
    evt.preventDefault()
    fetch(`http://71.65.239.221:5000/api/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(err => console.log(err));
  };

  deleteHandler = id => {
    fetch(`http://71.65.239.221:5000/api/users/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(err => console.log(err));
  };

  getData = () => {
    fetch(`http://71.65.239.221:5000/api/users`)
      .then(res => res.json())
      .then(data => this.setState({ data }));
  };


  loginHanlder = (evt) => {
    evt.preventDefault()
    fetch(`http://71.65.239.221:5000/api/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => this.setState({ data }))
  }



  render() {
    const { data } = this.state;
    console.log(data);

    return (
      <>
        <form onSubmit={this.postHandler}>
          <br />
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.onChangeHander}
          />
          <label>firstName</label>
          <br />
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.onChangeHander}
          />
          <label>lastName</label>
          <br />
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onChangeHander}
          />
          <label>username</label>
          <br />
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.onChangeHander}
          />
          <label>password</label>
          <br />

          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.onChangeHander}
          />
          <label>email</label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {!data
          ? null
          : data.map(item => (
            <DisplayData
              key={item._id}
              data={item}
              deleteHandler={() => this.deleteHandler(item._id)}
            />
          ))}
        <Login
          state={this.state}
          onChangeHander={this.onChangeHander}
          loginHanlder={this.loginHanlder}
        />
      </>
    );
  }
}
