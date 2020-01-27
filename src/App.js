import React from "react";
import Header from "./components/Header.js";
import CharacterList from "../src/components/CharacterList";
import CharacterCard from '../src/components/CharacterCard';
import WelcomePage from '../src/components/WelcomePage';
import {Route} from 'react-router-dom';



export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component = {WelcomePage}/>
      <Route exact path= '/characters' component={CharacterList}/>
   </main>
  );
}
