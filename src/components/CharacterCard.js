import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';
import styled from 'styled-components';

const CardDiv = styled.div`
width:50%;
`;

const Header = styled.h2`
text-decoration: underline;
`;

const SubTitle = styled.p`
font-size: 20px;
`;

const Span = styled.span`
font-weight:bold;
`;

export default function CharacterCard(props) {
 console.log(props.character)

  return(
    <div className='character-wrapper'>
      <CardDiv>
        <CardImg src={`${props.character.image}`} alt={`Picture of ${props.character.name}`} />
        <CardBody>
          <CardTitle><Header>{props.character.name}</Header></CardTitle>
          <CardSubtitle><SubTitle>Info about {props.character.name}</SubTitle></CardSubtitle>
          <CardText>
            <p><Span>Status:</Span> {props.character.status}</p>
            <p><Span>Species: </Span>{props.character.species}</p>
            <p><Span>Gender:</Span> {props.character.gender}</p>
          </CardText>
        </CardBody>
      </CardDiv>
    </div>
  );
}




