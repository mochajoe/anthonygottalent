import React from "react";

const ContestantCardData = ({ contestant }) => (
  <div key={contestant.id} className="contestant-information">
    <div className="contestant-content">
      <img src={contestant.image} alt={contestant.name} />
      <h2> {contestant.name} This is where I put my talents</h2>
      <p>{contestant.bio} This is where I put description of talent</p>
      <a href>Link to Portfolio</a>
      <button>Vote Here Please Mother Pucker</button>
    </div>
  </div>
);

export default ContestantCardData;
