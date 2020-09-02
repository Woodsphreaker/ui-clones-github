import React from 'react'

import ProfileData from '~/components/ProfileData'
import RepoCard from '~/components/RepoCard'

import { Container, Main, LeftSide, RightSide, RepoContainer } from './styles'

const Profile: React.FC = () => (
  <Container>
    <Main>
      <LeftSide>
        <ProfileData
          userName="Woods"
          name="Carlo Enrico"
          avatarUrl="https://avatars3.githubusercontent.com/u/22459141?s=460&u=581a6f69d9aa2cac3f7d3cf143484c97d99c82de&v=4"
          followers={887}
          following={7}
          company="WoodsMachine"
          location="São Paulo, Brazil"
          email="carlo.enrico@uol.com.br"
          blog=""
        />
      </LeftSide>
      <RightSide>
        <RepoContainer>
          <h2>RepoCard</h2>
          {Array.from({ length: 6 }, (_, element) => (
            <RepoCard
              key={element}
              userName="Woods"
              repoName="React"
              description="lorem ipsum"
              language={element % 2 === 0 ? 'javascript' : 'typescript'}
              stars={15}
              forks={10}
            />
          ))}
        </RepoContainer>
      </RightSide>
    </Main>
  </Container>
)

export default Profile
