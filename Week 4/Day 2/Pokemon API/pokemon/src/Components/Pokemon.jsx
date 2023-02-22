import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
const Pokemon=(props)=>{
const [pokemon, setPokemon] = useState([]);

useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response => {
  
      return response.json()
    })
    .then(response => {
      setPokemon(response.results)
    })
    .catch((err) => {
      console.log(err);
    })
  
}, []);  

return (
  
    <ul>
      {
        pokemon.map((pokemonObj, index)=>{
          return (<li key={index}>{pokemonObj.name}</li>)
        })
      }
    </ul>
 
);
};
export default Pokemon 