import { Switch, Route } from 'react-router';
import React from 'react';

import Escolher from './pages/Escolher/index';
import Personalizar from './pages/Personalizar/index';
import PedidoFinal from './pages/PedidoFinal/index';


function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Escolher} />
      <Route exact path="/personalizar" component={Personalizar} />
      <Route exact path="/pedido" component={PedidoFinal} />
    </Switch>
  );
}

export default Routes;
