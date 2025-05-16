import React from 'react';

import {useGetPokemonById} from '../hooks/useGetPokemonById'
import { Container, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';




interface DetailedPokemonProps {
 id : number;
}



const DetailedPokemon: React.FC<DetailedPokemonProps> = ({ id }) => {
    const [expanded, setExpanded] = React.useState(false);
    const [modalOpen, setModalOpen] =  React.useState(false);
    const {pokemon,loading,error} = useGetPokemonById(id);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!pokemon) return <div>No Pokemon found</div>;
    const pkmn = pokemon;

    
  
    const handleExpandClick = () => setExpanded(!expanded);
    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
    return (
    <Container>
           <h1>{pkmn.name.en}</h1>
        <img src={pkmn.sprites.regular} alt={pkmn.name.en} />
        <p>Height: {pkmn.height}</p>
        <p>Weight: {pkmn.weight}</p>
        <p>Types: {pkmn.types.map((type) => type.name).join(', ')}</p>

    </Container>
  );
}

export default DetailedPokemon;
