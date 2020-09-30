import React from 'react';
import Home from '../src/Home/Home'
import {Route, BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>

      <Route to='/' component={Home}  />
    
    </BrowserRouter>
     
  );
}

export default App;
