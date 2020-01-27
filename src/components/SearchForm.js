import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
console.log('Props for Search Form', ...props.info)

const characterList = props.info
console.log(characterList)
//  States
const [searchTerm, setSearchTerm] = useState('');
const [searchResults, setSearchResults] = useState([]);

// Functions
const handleChanges = event => {
  setSearchTerm(event.target.value)
};
console.log(searchTerm);


// useEffect Search Functionality
useEffect(() => {
const results = characterList.filter(char => 
char.includes(searchTerm)
);
setSearchResults(results);
},[searchTerm]);

// Form
  return (
    <section className="search-form">
      <form>
        <label htmlFor='search'>Search:</label>
        <input
        id='search' 
        type='text'
        placeholder='Search For Character'
        value={searchTerm}
        onChange={handleChanges}>
    
        </input>
      </form>
    </section>
  );
}
