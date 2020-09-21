import * as React from 'react'
import {
  Card,
  Image,
  ButtonGroup,
  Button,
  Display,
  Link,
} from '@geist-ui/react'
import CoverImage from 'img/cover.png'
import {
  Codesandbox,
  Github,
  Grid as GridIcon,
  Package,
} from '@geist-ui/react-icons'

export default () => (
  <Card shadow>
    <Image src={CoverImage} />
    <h2>Website is under construction</h2>
    <p>Stay tuned</p>
    <Display>
      <ButtonGroup
        style={{ overflowX: 'auto', width: 'calc(100% - 16pt)' }}
      >
        <Button icon={<Codesandbox />} auto>
          <Link
            href="https://thau.quester-app.dev/api/v1/swagger"
            target="_blank"
          >
            Swagger
              </Link>
        </Button>
        <Button icon={<Github />} auto>
          <Link href="https://github.com/thau-quester" target="_blank">
            GitHub
              </Link>
        </Button>
        <Button icon={<GridIcon />} auto>
          <Link
            href="https://hub.docker.com/repository/docker/mgrin/thau"
            target="_blank"
          >
            Docker
              </Link>
        </Button>
        <Button icon={<Package />} auto>
          <Link
            href="https://www.npmjs.com/package/thau-react"
            target="_blank"
          >
            NPM
              </Link>
        </Button>
      </ButtonGroup>
    </Display>
  </Card>
)
