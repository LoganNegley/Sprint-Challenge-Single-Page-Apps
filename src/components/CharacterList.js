import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';

export default function CharacterList() {
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
      console.log(info)


  return (
    <section className="character-list">
    <h2>The Characters of Rick and Morty</h2>
          {info.map(character => (
          <div key={character.id} className="character">
            <CharacterCard/>
          </div>
        ))}
 
    </section>
  );
}