import { Switch, Route } from 'react-router';
import React from 'react';

import ChooseAcai from './pages/ChooseAcai/index';
import Personalize from './pages/Personalize/index';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ChooseAcai} />
      <Route exact path="/personalize" component={Personalize} />
    </Switch>
  );
}

export default Routes;
