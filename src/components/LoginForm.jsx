import React, { useState } from 'react';
import CustomButton from './CustomButton';
import { styled } from '@mui/material/styles';
import { TextField, Input } from '@mui/material';

const LoginForm = ({label, handleSubmit}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const CustomTextField = styled(TextField)({
      '& .MuiInputLabel-root': {
        color: 'white', // Change label color to white
      },
      '& .MuiInputBase-root': {
        color: 'white', // Change text color to white
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white', // Change border color to white
        },
        '&:hover fieldset': {
          borderColor: 'white', // Change border color on hover to white
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white', // Change border color when focused to white
        },
      },
  });

  const handleEmailChange = (event) => {
    const val = event.target.value
    setEmail(val);
  };

  const handlePasswordChange = (event) => {
    const val = event.target.value
    setPassword(val);
  };

    return (
        <div>
            <div>
              <CustomTextField
                label="Email"
                value={email}
                color="primary"
                style={{ color: 'white', width: '350px' }}
                onBlur={handleEmailChange}
                variant="outlined"               
              />
            </div>
            <br></br>
            <div>
              <CustomTextField
                label="Password"
                value={password}
                color="primary"
                style={{ color: 'white', width: '350px' }}
                onBlur={handlePasswordChange}
                variant="outlined"               
              />
            </div>
            <br></br>
            <CustomButton 
              label={label}
              handleClick={() => {handleSubmit(email, password)} }
              size="medium"
            /> 
        </div>
    );
};

export default LoginForm;
 