import React from 'react';

const Pokemon = (props) => {
  //console.log(props.pokemonEach.id);

  const pokemonType = props.pokemonEach.types.map((pokemonType, index) => {
    return (
      <li key={index} className="list__types--type">
        {pokemonType}
      </li>
    );
  });
  return (
    <>
      <img src={props.pokemonEach.url} alt="pokemon" className="list__img" />
      <h2 className="list__title">{props.pokemonEach.name}</h2>
      <ul className="list__types">{pokemonType}</ul>
    </>
  );
};
export default Pokemon;
