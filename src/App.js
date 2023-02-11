import React from 'react';
import Services from './Component/Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Queue from './Component/Queue';
import Navbar from './Component/Navbar/Navbar';
import List from './Component/List';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/queue/:id' element={<Queue/>} />
        <Route path='/' element={<Services/>}/>
        <Route path='/listCustomer' element={<List/>} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
