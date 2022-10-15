import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Profile from './pages/Home';
import './App.css';

export const routes = [
  {
    "label": "Home", 
    "href": "/"
  }, 
  {
    "label": "Profile", 
    "href": "/profile"
  }
]

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
