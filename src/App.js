import './App.css';
import Navbar from './component/Navbar/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login/Login'; // Create this component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
