import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Login from '../src/Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
      </Routes>
    </div>
  );
}

export default App;
