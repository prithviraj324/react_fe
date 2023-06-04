import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({label, handleClick, size}) => {
    return (
        <div>
            <Button 
            variant="contained"
            size={size}
            color="primary"
            onClick={handleClick} 
            sx={{ 
                borderRadius: '50px',
                fontSize: '1.3rem', 
                padding: '0.8rem 2rem'  
            }}
            >
            {label}
            </Button>
        </div>
    );
}

export default CustomButton;