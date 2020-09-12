import React from 'react'

import { Container, Content, LinksList, GitHubLogo } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <LinksList>
          <li>© 2020 GitHub, Inc.</li>
          <li className="link">Terms</li>
          <li className="link">Privacy</li>
          <li className="link">Security</li>
          <li className="link">Status</li>
          <li className="link">Help</li>
        </LinksList>
        <GitHubLogo />
        <LinksList>
          <li className="link">Contact GitHub</li>
          <li className="link">Pricing</li>
          <li className="link">API</li>
          <li className="link">Training</li>
          <li className="link">Blog</li>
          <li className="link">About</li>
        </LinksList>
      </Content>
    </Container>
  )
}

export default Footer
