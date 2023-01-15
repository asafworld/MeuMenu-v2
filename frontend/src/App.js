import React from 'react';
import './App.css';
import MenuContextProvider from './ContextAPI/MenuContextProvider';
import Login from '../src/Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <MenuContextProvider>
        <Login />
      </MenuContextProvider>
    </div>
  );
}

export default App;
