import React from 'react';
import pokemon from '../data/pokemon.json';
import PokeList from './PokeList';
import '../stylesheets/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <PokeList pokemon={pokemon} />
        Hola mundo
      </div>
    );
  }
}
export default App;
