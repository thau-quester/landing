import * as React from 'react'
import { Page, Grid, Image, Text, Row, Spacer } from '@geist-ui/react'
import Logo from 'img/logo-image.png'
import Thau from 'app/components/Thau'

export default () => {
  return (
    <Page.Header>
      <Spacer />
      <Grid.Container justify="space-between" alignItems="center">
        <Grid>
          <Row align="middle">
            <Image src={Logo} width={48} height={48} />
            <Spacer />
            <Text h2>Thau</Text>
          </Row>
        </Grid>
        <Grid>
          <Thau />
        </Grid>
      </Grid.Container>
    </Page.Header>
  )
}
