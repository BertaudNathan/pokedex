import React from 'react';
import { Pokemon } from '../models/Pokemon';

interface Card {
 pkmn : Pokemon;
}

const LigneDresseur: React.FC<Card> = ({ pkmn }) => {
    return (
    <div>
        <h2>{pkmn.name.en}</h2>
        <img src={pkmn.sprites.regular} alt={pkmn.name.en} />
        <p>Type: {pkmn.types?.join(", ")}</p>
        <p>Height: {pkmn.height}</p>
        <p>Weight: {pkmn.weight}</p>
    </div>     
    );
};
export default LigneDresseur;