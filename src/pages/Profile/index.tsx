import React from 'react'

import ProfileData from '~/components/ProfileData'

import { Container, Main, LeftSide, RightSide } from './styles'

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
      <RightSide>Right Side</RightSide>
    </Main>
  </Container>
)

export default Profile
