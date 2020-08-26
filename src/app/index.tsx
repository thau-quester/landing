import * as React from 'react'
import { CssBaseline, GeistProvider } from '@geist-ui/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThauProvider } from 'thau-react'
import Landing from 'app/pages/Landing'

export default () => (
  <ThauProvider thauUrl="https://thau.quester-app.dev/api/v1">
    <GeistProvider>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </GeistProvider>
  </ThauProvider>
)
