import { Switch, Route } from 'react-router'
import React from 'react'

import Tarefas from '../pages/Tarefas'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Tarefas} />
    </Switch>
  )
}

export default Routes
