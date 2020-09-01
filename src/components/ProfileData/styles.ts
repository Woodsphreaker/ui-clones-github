import styled, { css } from 'styled-components'
import {
  BuildIcon,
  GroupIcon,
  LinkIcon,
  MailIcon,
  PinIcon,
} from '~/styles/Icons'

export const Container = styled.div`
  /* display: flex;
  flex-direction: column; */
`

export const Flex = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 24px;

    > h1 {
      font-size: 26px;
      line-height: 1.25;
      color: var(--gray-dark);
      font-weight: 300;
    }

    > h2 {
      font-size: 20px;
      color: var(--username);
      font-weight: 300;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`

export const Avatar = styled.img`
  width: 16%;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const Row = styled.ul`
  display: flex;
  align-items: baseline;
  list-style: none;
  flex-wrap: wrap;
  margin: 20px 0;

  > li {
    display: flex;
    align-items: baseline;

    > span {
      font-size: 14px;
      color: var(--gray);
    }

    > * {
      margin-left: 5px;
    }
  }
`

const IconsStyles = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`

export const CompanyIcon = styled(BuildIcon)`
  ${IconsStyles}
`

export const PeopleIcon = styled(GroupIcon)`
  ${IconsStyles}
`

export const LocationIcon = styled(PinIcon)`
  ${IconsStyles}
`

export const EmailIcon = styled(MailIcon)`
  ${IconsStyles}
`

export const BlogIcon = styled(LinkIcon)`
  ${IconsStyles}
`

export const Column = styled.ul`
  list-style: none;

  > li {
    display: flex;
    align-items: center;
    font-size: 14px;

    & + li {
      margin-top: 10px;
    }

    > span {
      margin-left: 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`
