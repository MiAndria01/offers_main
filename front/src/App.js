import './App.css';
import React from 'react'
import Offermain from './components/Offermain';
import 'moment/locale/fr';
import AnnonceForm from './components/AnnonceForm';
import './styles/Modal.css'

function App() {
  
  return (
    <div className="App"> 
          
      <AnnonceForm/>
      <Offermain />      
      
      </div>
    
  );
}

export default App;
