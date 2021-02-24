import React from 'react';
import Pokemon from './Pokemon';
import '../stylesheets/App.scss';

const PokeList = (props) => {
  const eachPokemon = props.pokemon.map((pokemonEach) => {
    return (
      <li key={pokemonEach.id} className="list__item">
        <Pokemon pokemonEach={pokemonEach} />
      </li>
    );
  });
  return (
    <>
      <h1 className="heading">Mi lista de pokemon</h1>
      <ul className="list">{eachPokemon}</ul>
    </>
  );
};
export default PokeList;
