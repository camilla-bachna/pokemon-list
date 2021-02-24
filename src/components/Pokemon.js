import React from 'react';

const Pokemon = (props) => {
  console.log(props.pokemonEach.id);

  const pokemonType = props.pokemonEach.types.map((pokemonType, index) => {
    return (
      <li key={index} className="type">
        {pokemonType}
      </li>
    );
  });
  return (
    <>
      <img src={props.pokemonEach.url} alt="pokemon" className="img" />
      <h2 className="title">{props.pokemonEach.name}</h2>
      <ul className="types">{pokemonType}</ul>
    </>
  );
};
export default Pokemon;
