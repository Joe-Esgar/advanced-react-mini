import React from "react";

function PokemonRender(props) {
  const pokeList = props.pokemon.map(pokemon => {
    return (
      <div key={pokemon.id}>
        <img src={pokemon.imageUrl} />
      </div>
    );
  });
  return <div>{pokeList}</div>;
}

export default PokemonRender;
