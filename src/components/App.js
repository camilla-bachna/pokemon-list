import React from 'react';
import pokemon from '../data/pokemon.json';
import PokeList from './PokeList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: pokemon,
    };
  }
  render() {
    return (
      <>
        <PokeList pokemon={pokemon} />
      </>
    );
  }
}
export default App;
