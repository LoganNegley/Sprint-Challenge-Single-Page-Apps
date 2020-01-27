import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';


const Button = styled.button`
background-color:#A9D3E9;
font-size: 25px;
margin-top:20px;
color:#D78A79;
`;





export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
        <Link to='/characters'>
          <Button color='danger'>Checkout the Characters</Button>
        </Link>
    </section>
  );
}
