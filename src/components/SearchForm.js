import React, { useState } from "react";

export default function SearchForm(props) {
console.log('Props for Search Form', props.info)

//  States
const [searchTerm, setSearchTerm] = useState('');


// Functions
const handleChanges = event => {
  setSearchTerm(event.target.value)
};
console.log(searchTerm);

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
