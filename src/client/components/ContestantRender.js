import React, { Component } from "react";
import FacebookRender from "./FacebookRender";
import ContestantCardData from "./ContestantCardData";

//const API = "http://stateapi-test.votenow.tv/widgets/get?wid=";
const API = "http://localhost:8080/api";

const QUERY = "31204006f9270601";

class ContestantRender extends Component {
  state = {
    contestantData: [],
    loggedOut: {},
    loggedIn: {},
    error: ""
    };

  loginHandler = isLoggedIn => {
    this.setState({ isLoggedIn });
  };

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(
        data => {
          console.log('data',data);
          this.setState({
            contestantData: data.data,
            // loggedOut: data.text.logged_out,
            // loggedIn: data.text.logged_in
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
  }

  render() {
    const { isLoggedIn, contestantData, loggedIn, loggedOut } = this.state;
    return (
      <>
          <div className="vote-grid">
            <header className="headline">
              <h2>VOTE FOR ANTHONY'S BEST TALENT //Place Holder</h2>
            </header>
            <div className="contestant-card-information">
              {contestantData.map(contestant => (
                <ContestantCardData
                  key={contestant.id}
                  contestant={contestant}
                />
              ))}
            </div>
          </div>
      </>
    );
  }
}

export default ContestantRender;
