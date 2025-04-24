import React from 'react';
import LigneDresseur from './LigneDresseur';
import { Dresseur } from '../models/Dresseur'; // Assuming you have a type definition for Dresseur
import { Table, TableContainer } from '@mui/material';


interface TableauDresseursProps {
    dresseurs: Dresseur[];
}

const TableauDresseurs: React.FC<TableauDresseursProps> = ({ dresseurs }) => {
    return (
        <TableContainer>

        
        <Table  sx={{ minWidth: 650, }} aria-label="simple table">
            <thead color='primary'>
                <tr >
                    <th>Nom</th>
                    <th>Âge</th>
                    <th>Région</th>
                    <th>Nombre de Pokémons</th>
                </tr>
            </thead>
            <tbody>
                {dresseurs.map((dresseur) => (
                    <LigneDresseur key={dresseur.id} dresseur={dresseur} />
                ))}
            </tbody>
        </Table> 
         </TableContainer>    
    );
};

export default TableauDresseurs;