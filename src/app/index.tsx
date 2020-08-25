import * as React from 'react'
import { CssBaseline, GeistProvider } from '@geist-ui/react'
import { ThauProvider } from 'thau-react'
import Landing from 'app/pages/Landing'

export default () => (
  <ThauProvider thauUrl="http://localhost:9000/api/v1">
    <GeistProvider>
      <CssBaseline />
      <Landing />
    </GeistProvider>
  </ThauProvider>
)
