import Modal from "@material-ui/core/Modal";
import { Auth, Hub } from 'aws-amplify';
import React, { Component } from "react";
import ContestantCardData from "./ContestantCardData";
import {FetchCall} from "../../util/FetchCall";
import Header from "./Header";

class ContestantRender extends Component {
  state = {
    contestantData: [],
    error: "",
    user: null
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
    FetchCall().then(response => response.json())
    .then(
      data => {
        console.log('data',data);
        this.setState({
          contestantData: data.data
        });
      },
      error => {
        this.setState({
          error
        });
      }
    );    

Auth.currentSession()
    .then(data => console.log('Userrrr', this.setState({
      username:data.accessToken.payload.username
    })))
    .catch(err => console.log(err));
 
 
  }

  render() {
    const { isLoggedIn, contestantData, loggedIn, loggedOut, isOpen } = this.state;
    console.log('state :', this.state)
    return (

      <>
      <Header username = {this.state.username} />
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
            Vote Here for your talent!
            <button>fsdfsdfdsf</button>
          </p>
            </div>
          </Modal>

          </div>
      </>
    );
  }
}

export default ContestantRender;
