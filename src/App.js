import React from 'react';
import './App.css';
import Titulo from './titulo.js';
import Juego from './Juego.js';  


function App() {
  return (
    <div className="App">
      <Titulo/>
      <Juego limite='10'/>
    </div>
  );
}

export default App;
