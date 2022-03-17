import React, { useState } from "react";
import axios from "axios"
import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemeonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("")

  const getPokemon = async () => {
    const toArray = []
    try{

    } catch (e) {

    }
  }

  return(
    <div className="App">
      <h1>Hello</h1>
    </div>
  )
}

export default App;