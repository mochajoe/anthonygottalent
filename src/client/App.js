import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { withAuthenticator } from 'aws-amplify-react';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Home />
        <Footer />
      </div>
    );
  }
}

export default withAuthenticator(App);
