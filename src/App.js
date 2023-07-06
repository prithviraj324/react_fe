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
  const [users, setUsers] = useState([]);

  const initialUsers = [
    { email: 'pritvirajc.cs19@bmsce.ac.in', password: 'password1' },
    { email: 'admin@gmail.com', password: 'admin' }
  ];

  useState(() => {
    setUsers(initialUsers)
  })

  const mainDivStyle = {
      display: 'flex',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh'
  }

  const handleLogin = (email, password) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if(user) {
      alert("LOGIN SUCCESS");
      setLoggedIn(true);
    } else {
      alert("INVALID CREDENTIALS");
    }
  };

  const handleSignup = (email, password) => {
    console.log("addding new user");
    const newUser = { email: email, password: password };
    setUsers(users => [...users, newUser])
    console.log("ADDED");
    console.log(...users);
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
        <LandingPage handleLogin={handleLogin} handleSignup={handleSignup} />
      )}

      {loggedIn && <HomePage handleLogout={handleLogout} />}
    </div>
  );
}
export default App;