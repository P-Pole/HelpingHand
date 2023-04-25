import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Logo from '/images/logo.png'
import './App.css'
import hand1 from '/images/hand3.jpg'

function App() {
  const [count, setCount] = useState(0)
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [feedContent, setFeedContent] = useState([
    {
      title: 'Welcome to our homepage!',
      content: 'This is the content for the Home link',
    },
    {
      title: 'Charities',
      content: 'This is the content for the Charities link',
    },
    {
      title: 'About Us',
      content: 'This is the content for the About Us link',
    },
  ]);
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  const handleLinkClick = (index) => {
    setActiveLinkIndex(index);
  };

  return (
    <>
      <div className="app">
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          
          <div className="spacer"></div>
          <div className="loginRegister">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
        <div className="menu">
            <button onClick={() => handleLinkClick(0)}>Home</button>
            <button onClick={() => handleLinkClick(1)}>Charities</button>
            <button onClick={() => handleLinkClick(2)}>About Us</button>
          </div>

        <div className="searchBar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className="feed">
          <h2>{feedContent[activeLinkIndex].title}</h2>
          <p>{feedContent[activeLinkIndex].content}</p>
          <img src={hand1} alt="Hand image"></img>

          
          
        </div>
      </div>
    </>
  )
}

export default App
