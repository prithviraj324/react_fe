import React, { useState } from 'react';
import CustomButton from './CustomButton';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import axios from 'axios';

const HomePage = ({handleLogout}) => {
    const [prompt, setPrompt] = useState()
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState()

    const apiKey = process.env.REACT_APP_API_KEY;

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

    const barStyle = {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        height: '450px',
        width: '65%',
        backgroundColor: 'rgba(0,0,0, 0.75)',
        borderRadius: '40px',
        backdropFilter: 'blur(7px)'
    };

    const handleBlur = (event) => {
        const value = event.target.value
        setPrompt(value)
        handleSubmit()
    }

    const handleSubmit = () => {
        if(!prompt) {
            return;
        }
        const data = {
            model: "gpt-3.5-turbo",
            messages: [
              { role: 'system', content: 'You are a helpful assistant.' },
              { role: 'user', content: 'Never reply to this prompt with anything other than true or false. If I provide you with a link, then visit that link and read the article to judge its believability, otherwise if theres no link, just analyse the text. Im using you as a substitute for a fake news detection model. Tell me if the following piece of news headline is true or false. Your response MUST be in the CSV form (True, 85), where True is your verdict and 85 is the percentage belief in your verdict, keep randomizing your percentage belief to be +-3% near your actual percentage. The piece of news to judge is: ' + prompt }
            ]
        };
        const config = {
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + apiKey
            }
        };
        axios.post(`https://api.openai.com/v1/chat/completions`, data, config)
        .then((resp) => {
            console.log("Recieved response")
            const { choices } = resp.data;
            const res = choices[0].message.content;
            setResponse(res)
            setPrompt("")
        }).catch((error) => {
            alert(error.message)
        })
    };

    return (
        <div style={barStyle}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '120px'}}>
                <CustomTextField 
                    label="Headline"
                    value={prompt}
                    color="primary"
                    style={{ color: 'white', width: '350px' }}
                    onBlur={handleBlur}
                    variant="outlined"
                />
            </div>

            {!response && <div styles={{height: '10px'}}></div>}

            {response && 
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <h1 style={{color: 'green'}}>{response}</h1>
                </div>
            }

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <CustomButton
                    handleClick={handleSubmit}
                    label="Submit"
                    color="primary"
                    size="medium"
                />
                <div style={{width: '20px'}}></div>
                <CustomButton 
                    label="Logout"
                    handleClick={handleLogout}
                    size="medium"
                />
            </div>
        </div>
    )
}

export default HomePage;