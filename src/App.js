//import dotenv from 'dotenv';
import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import { createGlobalStyle } from 'styled-components';
import image from './assets/news2.jpg';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300&display=swap');
  
  html, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    font-family: 'Exo 2', sans-serif;
  }
`;

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState('');

  const mainDivStyle = {
      display: 'flex',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh'
  }

  const handleLogin = (email, password) => {
    handleFormSubmit(email, password)
  };

  const handleSignup = (email, password) => {
    handleFormSubmit(email, password)
  };

  const handleFormSubmit = (email, password) => {
    // Save the login/signup details and handle authentication logic
      setUser(email)
      setLoggedIn(true);
  };

  const handleLogout = () => {
    // Handle logout logic and set loggedIn to false
    setLoggedIn(false);
  };

  return (
    <div style={mainDivStyle}>
      <GlobalStyle />
      {!loggedIn && (
        <LandingPage handleLogin={handleLogin} handleSignup={handleSignup} handleFormSubmit={handleFormSubmit}/>
      )}

      {loggedIn && <HomePage handleLogout={handleLogout} />}
    </div>
  );
}
export default App;