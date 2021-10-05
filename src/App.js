import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './containers/Home';

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Home/>
      </div>
    </BrowserRouter>
  );

}

export default App;
