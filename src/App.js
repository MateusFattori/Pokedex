import React, { useEffect, useState } from "react";
import axios from "axios"
import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemeonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("")

  const getPokemon = async () => {
    const toArray = []
    try{
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.grt(url);
      toArray.push(res.date)
      setPokemonType(res.date.type[0].type.name)
      setPokemonData(toArray)
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getPokemon()
  }

  useEffect(() => {
    getPokemon();
  }, [])

  return(
    <div className="App">
      <form onSubmit={handleSubmit}> 
        <label>
          <input type="text" onChange={handleChange} placehoder="Enter Pokemon Name"/>
        </label>
      </form>
      {pokemeonData.map((data) => {
        return(
          <div className="container">
            <img />
            <div className="divTable">
              <div className="divTableBody"></div>
              <div className="divTableRow">
                <div className="divTableCell">Type</div>
                <div className="divTableCell">{pokemonType}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Height</div>
                <div className="divTableCell">{pokemonType}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Type</div>
                <div className="divTableCell">{pokemonType}</div>
              </div>
              <div className="divTableRow">
                <div className="divTableCell">Type</div>
                <div className="divTableCell">{pokemonType}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default App;