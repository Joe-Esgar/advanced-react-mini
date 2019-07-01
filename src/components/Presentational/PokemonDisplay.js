import React from "react";
import "../../App.css";
import PokemonContainer from "./PokemonContainer";

function PokemonDisplay(props) {
  const pokeList = props.pokemon.map(pokemon => {
    return (
      <div key={pokemon.id} className="pokemon-display">
        <img src={pokemon.imageUrl} alt="pokemon" />
      </div>
    );
  });
  return <div>{pokeList}</div>;
}

export default PokemonDisplay;
