
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import raw from "raw.macro"
import Markdown from 'react-markdown'

export type MarkdownPageProps = {
  name: string
}

export default ({ match: { params: { name } } }: RouteComponentProps<MarkdownPageProps>) => {
  const content = raw(`../documentation/${name}.md`)

  return (
    <Markdown
      source={content}
    />
  )
}