import React, { useState } from 'react';
import { Dresseur } from '../models/Dresseur'; // Assuming you have a type definition for Dresseur
import SubmitButton from './buttons/Submit'; // Import the SubmitButton component
import CancelButton from './buttons/Cancel'; // Import the CloseButton component
import Button from '@mui/material/Button';
import { FormLabel } from '@mui/material';


interface LoginFormProps {
    onUpdate: () => void; // Function to update the dresseurs list in the parent component
}

const LoginForm: React.FC<LoginFormProps> = ({ onUpdate  }) => {
    const [dresseur, setDresseur] = useState<Dresseur>({ name: '', age: 0, region: '', pokemons: [], id: 0 });
    const [dresseursList, setDresseursList] = useState<Dresseur[]>(() => {
        const storedDresseurs = localStorage.getItem('dresseurs');
        return storedDresseurs ? JSON.parse(storedDresseurs) : [];
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDresseur({
            ...dresseur,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newDresseur: Dresseur = {
            ...dresseur,
            id: dresseursList.length + 1, // Simple ID generation
        };
        console.log('Dresseur created:', newDresseur);
        setDresseursList([...dresseursList, newDresseur]);
        localStorage.setItem('dresseurs', JSON.stringify([...dresseursList, newDresseur]));
        onUpdate(); // Call the update function to refresh the dresseurs list in the parent component
        clearForm();

    };

    const clearForm = () => {
        setDresseur({ name: '', age: 0, region: '', pokemons: [], id: 0 });
    }

    return (
        <div>
            <Button color="inherit"  onClick={() => {
                    const modal = document.getElementById('loginFormModal');
                    if (modal) modal.style.display = 'block';
                }}
            >
                create
            </Button>

            <div id="loginFormModal" style={{ display: 'none', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', zIndex: 1000 }}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <FormLabel component="legend">Name :</FormLabel>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={dresseur.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                    <FormLabel component="legend">Age :</FormLabel>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={dresseur.age}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                    <FormLabel component="legend">Region :</FormLabel>
                        <input
                            type="text"
                            id="region"
                            name="region"
                            value={dresseur.region}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <CancelButton
                    onClick={() => {
                        const modal = document.getElementById('loginFormModal');
                        if (modal) modal.style.display = 'none';
                        clearForm();

                    }}/>
                        <SubmitButton label="Submit" />
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default LoginForm;