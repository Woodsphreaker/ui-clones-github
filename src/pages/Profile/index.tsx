import React, { useState, FormEvent } from 'react'

import ProfileData from '~/components/ProfileData'
import RepoCard from '~/components/RepoCard'
import RandomCalendar from '~/components/RandomCalendar'

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  RepoContainer,
  CalendarHeading,
  RepoIcon,
  TabContainer,
  Tab,
} from './styles'

const mockLanguage = (element: number) => {
  if (element % 2 === 0) {
    return 'javascript'
  }

  if (element % 3 === 0) {
    return 'typescript'
  }

  return 'other'
}

const Profile: React.FC = () => {
  const [tabActive, setTabActive] = useState('overview')

  const handleTabClick = (tabName: string) => {
    setTabActive(tabName)
  }

  return (
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
          <TabContainer>
            <Tab
              active={tabActive === 'overview'}
              onClick={() => handleTabClick('overview')}
            >
              <div className="content">
                <RepoIcon />
                <span className="label">Overview</span>
              </div>
            </Tab>

            <Tab
              active={tabActive === 'repositories'}
              onClick={() => handleTabClick('repositories')}
            >
              <div className="content">
                <RepoIcon />
                <span className="label">Repositories</span>
                <span className="number">75</span>
              </div>
            </Tab>

            <Tab
              active={tabActive === 'projects'}
              onClick={() => handleTabClick('projects')}
            >
              <div className="content">
                <RepoIcon />
                <span className="label">Projects</span>
              </div>
            </Tab>

            <Tab
              active={tabActive === 'packages'}
              onClick={() => handleTabClick('packages')}
            >
              <div className="content">
                <RepoIcon />
                <span className="label">Packages</span>
              </div>
            </Tab>
          </TabContainer>

          <RepoContainer>
            <div>
              {Array.from({ length: 10 }, (_, element) => (
                <RepoCard
                  key={element}
                  userName="Woods"
                  repoName="React"
                  description="lorem ipsum"
                  language={mockLanguage(element)}
                  stars={15}
                  forks={10}
                />
              ))}
            </div>
          </RepoContainer>

          <CalendarHeading>
            Random Calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile
