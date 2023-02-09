import React from 'react';
import Services from './Component/Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Services/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
