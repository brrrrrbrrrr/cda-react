import PokemonCard from './components/PokemonCard';
import { useState } from 'react';

const pokemonList = [
  {
    name: 'bulbasaur',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  },
  {
    name: 'charmander',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
  },
  {
    name: 'squirtle',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
  },
  {
    name: 'pikachu',
    imgSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  },
  {
    name: 'mew',
  },
];

// const pokemon = pokemonList[1];
function App() {
  const [pokemonIndex, setPokemon] = useState(0);

  return (
    <div>
      {pokemonIndex > 0 && (
        <button onClick={() => setPokemon(pokemonIndex - 1)}>Précedent</button>
      )}

      {pokemonIndex < pokemonList.length - 1 && (
        <button onClick={() => setPokemon(pokemonIndex + 1)}>Suivant</button>
      )}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
