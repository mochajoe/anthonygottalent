import React, { Component } from "react";
import "./App.css";
import ContestantRender from "./components/ContestantRender";
import Header from "./components/Header";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ContestantRender />
      </div>
    );
  }
}

export default App;
