import React, { Component } from "react";
import FacebookRender from "./FacebookRender";
import ContestantCardData from "./ContestantCardData";
import Button from '@material-ui/core/Button';
import Modal from "@material-ui/core/Modal";


const API = "http://localhost:8080/api";

class ContestantRender extends Component {
  state = {
    contestantData: [],
    loggedOut: {},
    loggedIn: {},
    error: "",
    open:false
    };

  loginHandler = isLoggedIn => {
    this.setState({ isLoggedIn });
  };

  handleOpen = () => {
    // get which button was pressed via `stationNumber`
    // open the modal and set the `stationNumber` state to that argument
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
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
                  handleOpenModal={this.handleOpen}
                />
              ))}
            </div>
            <Modal 
            open={this.state.open} 
            onClose={this.handleClose}  
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description">
            {/* display the content based on newly set state */}
            <div className = "modal">
            <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
            </div>
          </Modal>

          </div>
      </>
    );
  }
}

export default ContestantRender;
