import React from 'react';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Heading from '../components/Heading';
import ScreenTenant from '../components/ScreenTenant';

function App() {
  return (
    <div>
      <div className='mainBackground' />
      <Header />
      <main>
        <Heading />
        <ScreenTenant />
      </main>
    </div>
  );
}

export default App;

