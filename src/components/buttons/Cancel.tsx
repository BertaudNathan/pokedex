import React from 'react';
import Button from '@mui/material/Button';

interface CancelButtonProps {
    onClick: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({ onClick }) => {
    return (
        <Button variant="outlined" color="error" onClick={onClick}>
            Cancel
        </Button>
    );
};

export default CancelButton;