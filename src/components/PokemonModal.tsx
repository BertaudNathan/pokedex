import React from 'react';
import { Dialog, DialogTitle, DialogContent, Grid, Typography, Chip, Avatar } from '@mui/material';
import { Pokemon } from '../models/Pokemon';


interface PokemonModalProps {
  open: boolean;
  onClose: () => void;
  pokemon: Pokemon | null;
}

const PokemonModal: React.FC<PokemonModalProps> = ({ open, onClose, pokemon }) => {
  if (!pokemon) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{pokemon.name.fr} (#{pokemon.pokedex_id})</DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={2}>
          {/* Sprites */}
          <Grid>
            <Typography variant="subtitle1">Sprites</Typography>
            <img src={pokemon.sprites.regular} alt="regular" style={{ width: '100%' }} />
            <img src={pokemon.sprites.shiny} alt="shiny" style={{ width: '100%', marginTop: 8 }} />
          </Grid>

          {/* Infos de base */}
          <Grid>
            <Typography variant="subtitle1">Infos Générales</Typography>
            <Typography>Nom anglais : {pokemon.name.en}</Typography>
            <Typography>Nom japonais : {pokemon.name.jp}</Typography>
            <Typography>Catégorie : {pokemon.category}</Typography>
            <Typography>Génération : {pokemon.generation}</Typography>
            <Typography>Taille : {pokemon.height}</Typography>
            <Typography>Poids : {pokemon.weight}</Typography>
            <Typography>Groupes d'œufs : {pokemon.egg_groups.join(', ')}</Typography>
            <Typography>Genre : ♂ {pokemon.sexe.male}% / ♀ {pokemon.sexe.female}%</Typography>
            <Typography>Catch Rate : {pokemon.catch_rate}</Typography>
            <Typography>Exp. Level 100 : {pokemon.level_100}</Typography>
          </Grid>

          {/* Types */}
          <Grid>
            <Typography variant="subtitle1">Types</Typography>
            {pokemon.types.map((type, idx) => (
              <Chip key={idx} label={type.name} avatar={<Avatar src={type.image} />} style={{ marginRight: 5 }} />
            ))}
          </Grid>

          {/* Talents */}
          <Grid>
            <Typography variant="subtitle1">Talents</Typography>
            {pokemon.talents.map((talent, idx) => (
              <Typography key={idx}>
                {talent.name} {talent.tc ? '(Talent caché)' : ''}
              </Typography>
            ))}
          </Grid>

          {/* Stats */}
          <Grid>
            <Typography variant="subtitle1">Stats</Typography>
            {Object.entries(pokemon.stats).map(([stat, value]) => (
              <Typography key={stat}>
                {stat.toUpperCase()} : {value}
              </Typography>
            ))}
          </Grid>

          {/* Résistances */}
          <Grid>
            <Typography variant="subtitle1">Résistances</Typography>
            {pokemon.resistances.map((res, idx) => (
              <Typography key={idx}>
                {res.name} : x{res.multiplier}
              </Typography>
            ))}
          </Grid>

          {/* Évolutions */}
          <Grid>
            <Typography variant="subtitle1">Évolutions</Typography>
            <Typography>Pré-évolution :</Typography>
            {pokemon.evolution.pre.map((pre, idx) => (
              <Typography key={idx}>#{pre.pokedex_id} - {pre.name} ({pre.condition})</Typography>
            ))}
            <Typography>Évolution suivante :</Typography>
            {pokemon.evolution.next.map((next, idx) => (
              <Typography key={idx}>#{next.pokedex_id} - {next.name} ({next.condition})</Typography>
            ))}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default PokemonModal;
