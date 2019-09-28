import React, { Component } from "react";
import FacebookRender from "./FacebookRender";
import ContestantCardData from "./ContestantCardData";
import Modal from '@material-ui/core/Modal';
//const API = "http://stateapi-test.votenow.tv/widgets/get?wid=";
const API = "http://localhost:8080/api";

const QUERY = "31204006f9270601";

class ContestantRender extends Component {
  state = {
    contestantData: [],
    loggedOut: {},
    loggedIn: {},
    error: "",
    isOpen: true
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
    const { isLoggedIn, contestantData, loggedIn, loggedOut, isOpen } = this.state;
    return (
      <>
          <div className="vote-grid">
          
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
