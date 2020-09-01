import React from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  TopSide,
  BottomSide,
  RepoIcon,
  StarIcon,
  ForkIcon,
} from './styles'

interface Props {
  userName: string
  repoName: string
  description: string
  language: string
  stars?: number
  forks?: number
}

const languageClass = ''

const RepoCard: React.FC<Props> = ({
  userName,
  repoName,
  description,
  language,
  stars,
  forks,
}) => {
  return (
    <Container>
      <TopSide>
        <header>
          <RepoIcon />
          <Link to="/">{repoName}</Link>
        </header>

        <p>{description}</p>
      </TopSide>

      <BottomSide>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>

          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </BottomSide>
    </Container>
  )
}

export default RepoCard
