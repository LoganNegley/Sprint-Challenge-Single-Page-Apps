import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
      <form>
        <label htmlFor='search'>Search:</label>
        <input
        id='search' 
        type='text'
        placeholder='Search For Character'>

        </input>
      </form>
    </section>
  );
}
