import React, { useState } from 'react';
import LoginForm from './LoginForm';
import CustomButton from './CustomButton';

function LandingPage({ handleLogin, handleSignup }) {
    const [showForm, setShowForm] = useState(false)
    const [signup, setSignup] = useState(false)

    const barStyle = {
        position: 'absolute',
        display: 'flex',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        height: '450px',
        width: '65%',
        backgroundColor: 'rgba(0,0,0, 0.75)',
        borderRadius: '40px',
        backdropFilter: 'blur(7px)'
    };

    const leftDivStyle = {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        color: 'white',
        marginRight: '15px'
    } 
       
    const rightDivStyle = {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        color: 'white',
        marginLeft: '15px'
    }      

    return (
        <div>
            <div style={barStyle}>
                <div style={leftDivStyle}>
                    <div style={{fontSize: '3rem'}}>FactCheckDetect</div>
                </div>
                {!showForm ? 
                    (<div style={rightDivStyle}>
                        <div style={{ flex: 'none' }}>
                            <CustomButton 
                                label="Login"
                                handleClick={() => { 
                                    setShowForm(true);
                                    setSignup(false); 
                                }}
                                size="large"
                            />
                            <br></br>
                            <CustomButton 
                                label="Sign Up"
                                handleClick={() => { 
                                    setShowForm(true);
                                    setSignup(true);
                                }}
                                size="large"
                            />
                        </div>
                    </div>
                ) : (
                    <div style={rightDivStyle}>
                        {signup ? (
                            <LoginForm
                                label="Sign Up"
                                handleSubmit={handleSignup}
                            />
                        ) : (
                            <LoginForm
                                label="Log In"
                                handleSubmit={handleLogin}
                        />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}   

export default LandingPage;
