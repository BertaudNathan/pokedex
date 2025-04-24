import React from 'react';
import { Dresseur } from '../models/Dresseur'; // Assuming you have a type definition for Dresseur

interface LigneDresseurProps {
 dresseur : Dresseur;
}

const LigneDresseur: React.FC<LigneDresseurProps> = ({ dresseur }) => {
    return (
        <tr>
            <td>{dresseur.name}</td>
            <td>{dresseur.age}</td>
            <td>{dresseur.region}</td>     
            <td>{dresseur.pokemons.length}</td>
        </tr>
    );
};

export default LigneDresseur;