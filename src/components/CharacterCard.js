import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';

export default function CharacterCard(props) {
 console.log(props.character)

  return(
    <div className='character-card'>
      <h2>{props.character.name}</h2>
      <p>Status: {props.character.status}</p>
      <p>Species: {props.character.species}</p>
      <p>Gender: {props.character.gender}</p>

    </div>
  );
}
