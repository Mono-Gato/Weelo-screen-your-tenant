import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/home';
import NotFound from '../pages/NotFound';

import '../assets/styles/mediaQueries.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='Weelo-screen-your-tenant/' component={Home} />
          <Route path='Weelo-screen-your-tenant/404' component={NotFound} />
          <Redirect from='*' to='Weelo-screen-your-tenant/404' />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

