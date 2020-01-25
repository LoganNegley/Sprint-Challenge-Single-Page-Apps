import React from "react";

export default function CharacterCard(props) {
  console.log(props)
  return(
    <div className='character-card'>
      <h1>{props.status}</h1>
    </div>
  );
}
