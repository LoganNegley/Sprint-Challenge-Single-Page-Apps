import React from "react";

export default function CharacterCard(props) {
 console.log(props.character)

  return(
    <div className='character-card'>
      <h2>{props.character.name}</h2>
    </div>
  );
}
