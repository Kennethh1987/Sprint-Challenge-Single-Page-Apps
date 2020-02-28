import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function Characters() {
  // data is grabbing the response from the request and then we map through it
  const [data, setData] = useState([]);

  // is looking at our input value and filtering what we input
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response);
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log("Rick and Morty characters", response);
        setData(characters);
      });
  }, [query]);
  // this is the function watching for what we put in our input
  const handleInputChange = event => {
    setQuery([event.target.name], event.target.value);
  };
  return(
    <div className="search">
    <section className="search-form">
     <form  onChange={handleInputChange}>
       <label htmlFor='name'>Search:</label>
       <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
       <button>Submit</button>
     </form>    
     </section>
    <div className="search">
        {data.map(data => {
         
        })}
      </div>
    </div>
  
     );
  
    }
 // return (
          //   // <div className="character-list " key={data._id}>
          //   //   <h2>
          //   //     {data.name}
          //   //   </h2>
          //   //   <h3 className="capital">Role: {data.role}</h3>
          //   //   <h3 className="capital">House: {data.house}</h3>
          //   //   <h3 className="capital">Wand: {data.wand}</h3>
          //   //   <h3 className="capital">Patronus: {data.patronus}</h3>
          //   //   <h3 className="capital">Blood Status: {data.bloodStatus}</h3>
          //   // </div>
          // );