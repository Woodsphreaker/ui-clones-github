import React from 'react'

import {
  Container,
  Flex,
  Avatar,
  Row,
  PeopleIcon,
  Column,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  BlogIcon,
} from './styles'

interface Props {
  userName: string
  name: string
  avatarUrl: string
  followers: number
  following: number
  company?: string
  location?: string
  email?: string
  blog?: string
}

const ProfileData: React.FC<Props> = ({
  userName,
  name,
  avatarUrl,
  followers,
  following,
  company,
  location,
  email,
  blog,
}) => (
  <Container>
    <Flex>
      <Avatar src={avatarUrl} alt="user name" />
      <div>
        <h1>{name}</h1>
        <h2>{userName}</h2>
      </div>
    </Flex>

    <Row>
      <li>
        <PeopleIcon />
        <b>{followers}</b>
        <span>followers</span>
        <span>·</span>
      </li>

      <li>
        <b>{following}</b>
        <span>following</span>
      </li>
    </Row>

    <Column>
      <li>
        <CompanyIcon />
        <span>Company Name</span>
      </li>
      <li>
        <LocationIcon />
        <span>Location Name</span>
      </li>
      <li>
        <EmailIcon />
        <span>Email Name</span>
      </li>
      <li>
        <LocationIcon />
        <span>Location Name</span>
      </li>
      <li>
        <BlogIcon />
        <span>Blog Name</span>
      </li>
    </Column>
  </Container>
)

export default ProfileData
