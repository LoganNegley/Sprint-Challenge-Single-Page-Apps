import React, { useState } from "react";

export default function SearchForm(props) {
 
const [searchTerm, setSearchTerm] = useState('');

const handleChanges = event => {
  console.log("Changes",  event.target.value);
}
  return (
    <section className="search-form">
      <form>
        <label htmlFor='search'>Search:</label>
        <input
        id='search' 
        type='text'
        placeholder='Search For Character'
            onChange={handleChanges}>
    
        </input>
      </form>
    </section>
  );
}
