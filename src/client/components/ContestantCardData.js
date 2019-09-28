import React, { PureComponent } from "react";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';




class ContestantCardData extends PureComponent {
    openModal = () => {
      const {handleOpenModal} = this.props;
      handleOpenModal();
    };
    
    render = () => (
      <div key={this.props.contestant.id} className="contestant-information">
      <div className="contestant-content">
        <img src={this.props.contestant.image} alt={this.props.contestant.name} />
        <h2> {this.props.contestant.name}</h2>
        <p>{this.props.contestant.bio}</p>
        <a href = {this.props.contestant.link}>Link to Portfolio</a>
        <Button variant="contained" color="primary" onClick={this.openModal}>
        Please Vote Yo
      </Button>
      </div>
    </div>
    )
    }


export default ContestantCardData;
