import React, { Component } from "react";
import Login from "./_components/Login";
import CreateAccount from './_components/CreateAccount';
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from 'react-router-dom';





const HomePage = () => <h1>HomePage</h1>

export default class App extends Component {
  state = {
    data: [],
    "firstName": "",
    "lastName": "",
    "username": "",
    "password": "",
    "email": "",
    currentUser: []
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
      .then(data => this.setState({ currentUser: data }))


    if (this.state.data.length === 0) {
      return <Redirect to="/" />
    } else {
      return <Redirect to="/dashboard" />
    }
  }



  render() {
    return (
      <Router>
        <>


          <Route exact path="/" render={() => <Login
            state={this.state}
            onChangeHander={this.onChangeHander}
            loginHanlder={this.loginHanlder}
          />} />
          <Route path="/register" render={() => <CreateAccount
            state={this.state}
            onChangeHander={this.onChangeHander}
            postHandler={this.postHandler}
          />} />


          <Route path="/dashboard" render={() => <HomePage />
          } />
        </>
      </Router>
    );
  }
}
