import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { WritePlanContainer } from '../containers';
import { LoginContainer, MainContainer } from '../containers';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login' component={LoginContainer} />
        <Route exact path='/' component={MainContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
