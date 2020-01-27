import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';

export default function CharacterCard(props) {
 console.log(props.character)

  return(

    <div className='character-wrapper'>
      <Card>
        <CardImg src={`${props.character.image}`} alt={`Picture of ${props.character.name}`} />
        <CardBody>
          <CardTitle><h2>{props.character.name}</h2></CardTitle>
          <CardSubtitle>Info about {props.character.name}</CardSubtitle>
          <CardText>
            <p>Status: {props.character.status}</p>
            <p>Species: {props.character.species}</p>
            <p>Gender: {props.character.gender}</p>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}




