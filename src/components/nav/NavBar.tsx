import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LoginForm from '../LoginForm';

interface NavBarProps {
    onUpdate: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ onUpdate }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Pokedex
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">About</Button>
                    <LoginForm onUpdate={onUpdate} />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;