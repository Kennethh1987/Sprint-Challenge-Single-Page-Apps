import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import {Link} from 'react-router-dom';
import Form from "./SearchForm";



const CharacterList = () => {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
      .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data.results)
        setCharacters(response.data.results)
      })
      .catch(error => [
        console.log(error => [console.log("Error, error!", error)])
      ])
  }, []);

  return (
    console.log(characters),
    <section className="character-list">
      <h2>Character List</h2>
      <Link to={'/'}>Home</Link>
      <Form  characters={characters}/>

      {characters.map(characters => <CharacterCard key={characters.id} character={characters}/>)}
    </section>
  );
}
export default CharacterList;

