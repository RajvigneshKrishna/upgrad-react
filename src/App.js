import './App.css';
import Navbar from './component/Navbar/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login/Login';
import AddProduct from './component/AddProduct/AddProduct';
import { PageProvider } from './common/PageContext';
import SignUp from './component/SignUp/SignUp';

function App() {
  return (
    <PageProvider>
    <div className='App'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/add-product" element={<AddProduct/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
    </div>
    </PageProvider>
  );
}

export default App;
