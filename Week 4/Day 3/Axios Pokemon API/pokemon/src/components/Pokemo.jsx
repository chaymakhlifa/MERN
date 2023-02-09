import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Pokemo = () => {
        const [responseData, setResponseData] = useState([]);
        useEffect(()=>{
            axios.get('https://pokeapi.co/api/v2/pokemon')
                .then(response=>{setResponseData(response.data.results)})
                .catch((err)=>{console.log(err)})
        }, []); 
  return (
    <div>
    <ul>
        {responseData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Pokemo