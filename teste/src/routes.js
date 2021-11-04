import { Switch, Route } from 'react-router';
import React from 'react';

import ChooseAcai from './pages/ChooseAcai/index';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ChooseAcai} />
    </Switch>
  );
}

export default Routes;
