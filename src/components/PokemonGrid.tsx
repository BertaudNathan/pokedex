import React from 'react';
import { Pokemon } from '../models/Pokemon';
import Card from './Card';
import Grid from '@mui/material/Grid';

interface PokemonGrid {
  pokemons: Pokemon[];
}

const PokemonGrid: React.FC<PokemonGrid> = ({ pokemons }) => {
  return (
    <Grid container  spacing={3}>
      {pokemons.map((pkmn) => (
        <Grid key={pkmn.pokedex_id}>
          <Card pkmn={pkmn} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PokemonGrid;