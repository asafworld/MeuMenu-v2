import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from '../src/Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
        <Route path='/home' element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
