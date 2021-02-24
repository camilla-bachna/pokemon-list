import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/App.css';

const PokeList = (props) => {
  const eachPokemon = props.pokemon.map((pokemonEach) => {
    return (
      <li key={pokemonEach.id} className="listItem">
        <Pokemon pokemonEach={pokemonEach} />
      </li>
    );
  });
  return (
    <>
      <h1>Mi lista de pokemon</h1>
      <ul className="list">{eachPokemon}</ul>
    </>
  );
};
export default PokeList;
