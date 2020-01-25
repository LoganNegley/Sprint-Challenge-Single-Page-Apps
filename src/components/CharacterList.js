import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';

function CharacterList() {
  const [info, setInfo] = useState([]);

    useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setInfo(response.data.results);
   
    })
    .catch(error => {
      console.error('Server Error', error);
    });
    },[]);
      console.log(info);


  return (
    <section className="character-list">
          {info.map(character => (
          <div key={character.id} className="character">
            <Link to='/character/id'>    
              <CharacterCard/>    
            </Link> 
          </div>
        ))}
 
    </section>
  );
}

function CharcterDetails({character}){
  console.log(character)
  const {name, status,species,gender} = character;
  return(
    <CharacterCard name={name} status={status} species={species} gender={gender}/>
  );
}
export default CharacterList;