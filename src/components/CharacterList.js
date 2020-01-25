import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [info, setInfo] = useState([]);



    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

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
    <Link>
      <h2>
          {info.map(character => (
          <div key={character.id} className="character">
            {character.name}
          </div>
        ))}
      </h2>
     </Link> 
    </section>
  );
}
