import React from "react";
import myHOC from "./myHOC";

function Pokemon(props) {
  const pokeList = props.data.map(pokemon => {
    return (
      <div key={pokemon.id}>
        <img src={pokemon.imageUrl} />
      </div>
    );
  });
  return <div>{pokeList}</div>;
}

export default myHOC(
  Pokemon,
  "https://api.pokemontcg.io/v1/cards?setCode=base1"
);
