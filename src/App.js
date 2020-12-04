import React from 'react';
import Navbar from './components/navbar';
import Contacts from './components/contacts/contacts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
