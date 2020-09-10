import styled from 'styled-components'
import { BookmarkIcon } from '~/styles/Icons'

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;
  padding: var(--verticalPadding) var(--horizontalPadding);
  overflow: hidden;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const LeftSide = styled.div`
  padding: 0 var(--horizontalPadding);
  z-index: 1;

  @media screen and (min-width: 768px) {
    width: 25%;
  }
`

export const RightSide = styled.div`
  padding: 0 var(--horizontalPadding);

  @media screen and (min-width: 768px) {
    width: 75%;
  }
`

export const RepoContainer = styled.div`
  margin-top: var(--verticalPadding);

  > h2 {
    font-size: 16px;
    font-weight: normal;
  }

  > div {
    margin-top: 8px;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: repeat(1, 1fr);

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`

export const CalendarHeading = styled.span`
  font-size: 16px;
  margin: 36px 0 9px;
  display: inline-flex;
`

export const TabContent = styled.div``

export const RepoIcon = styled(BookmarkIcon)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`

export const TabContainer = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;

  ::after {
    content: '';
    border-bottom: 1px solid var(--border);
    width: 200vw;
    margin-left: -50vw;
    position: absolute;
    bottom: 0;
  }
`

export const Tab = styled.div<{ active: Boolean }>`
  background: var(--primary);
  z-index: 1;

  .content {
    display: flex;
    align-items: center;
    width: min-content;
    padding: 14px 16px;
    border-bottom: 2px solid
      ${(props) => (props.active ? 'var(--orange)' : 'var(--border)')};

    transition: all 0.5s;

    :hover {
      border-bottom: 2px solid var(--orange);
    }
  }

  .label {
    font-size: 14px;
    padding: 0 7px;
    font-weight: 600;
  }

  .number {
    font-size: 12px;
    background: var(--ticker);
    padding: 2px 6px;
    border-radius: 5px;
  }
`
