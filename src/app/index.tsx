import * as React from 'react'
import { CssBaseline, GeistProvider, Page } from '@geist-ui/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThauProvider } from 'thau-react'
import Header from 'app/components/Header'
import Landing from 'app/pages/Landing'
import Documentation from 'app/pages/Documentation'

export default () => (
  <ThauProvider thauUrl="https://thau.quester-app.dev/api/v1">
    <GeistProvider>
      <CssBaseline />
      <Page render="effect-seo" dotBackdrop>
        <Header />
        <Page.Content>
          <Router>
            <Switch>
              <Route path="/docs/:name" render={Documentation} />
              <Route path="/" component={Landing} />
            </Switch>
          </Router>
        </Page.Content>
      </Page>
    </GeistProvider>
  </ThauProvider>
)
