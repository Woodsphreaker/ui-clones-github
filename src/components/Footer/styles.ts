import styled from 'styled-components'
import { Github } from '~/styles/Icons'

export const Container = styled.div`
  max-width: 1200px;
  padding: 50px 20px;
  border-top: 1px solid var(--border);
  margin: 0 auto;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (max-width: 880px) {
    flex-direction: column;

    div {
      margin-bottom: 15px;
    }
  }
`

export const LinksList = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  list-style: none;

  .link {
    color: var(--link);

    :hover {
      text-decoration: underline;
    }
  }

  > li {
    font-size: 12px;

    & + li {
      margin-left: 10px;
    }
  }
`

export const GitHubLogo = styled(Github)`
  width: 24px;
  height: 24px;
  margin: 0 80px;
  opacity: 0.5;

  transition: all 0.5s;

  > path {
    fill: var(--icon);
  }

  :hover {
    opacity: 1;
  }

  @media screen and (max-width: 880px) {
    display: none;
  }
`
