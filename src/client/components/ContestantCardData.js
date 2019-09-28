import React from "react";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

const onClicker = (cheese) => {


  <Modal open={cheese}> </Modal>
}

const ContestantCardData = ({ contestant }) => (

  <div key={contestant.id} className="contestant-information">
    <div className="contestant-content">
      <img src={contestant.image} alt={contestant.name} />
      <h2> {contestant.name}</h2>
      <p>{contestant.bio}</p>
      <a href>Link to Portfolio</a>
      <Button variant="contained" color="primary" onClick={onClicker(true)}>
        
      Please Vote Yo
    </Button>
    </div>
  </div>
);

export default ContestantCardData;
