import React, { useState } from 'react';
import Logo from '/images/logo.png';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Feed from './components/feed';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <div className="app">
        <Router>
          <div className="header">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>

            <div className="spacer"></div>
            <div className="loginRegister">
              <Link to="/login">
                <button>Login</button>
              </Link>
              <Link to="/register">
                <button>Register</button>
              </Link>
            </div>
          </div>
          <div className="menu">
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/charities">
              <button>Charities</button>
            </Link>
            <Link to="/about-us">
              <button>About Us</button>
            </Link>
          </div>

          <div className="searchBar">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <Feed />
        </Router>
      </div>
    </>
  );
}

export default App;
