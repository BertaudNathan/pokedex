import React from 'react';
import Button from '@mui/material/Button';

interface SubmitButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    label?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick = undefined, disabled = false, label = 'Submit' }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            disabled={disabled}
            type='submit'
        >
            {label}
        </Button>
    );
};

export default SubmitButton;