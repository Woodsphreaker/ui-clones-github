import styled, { css } from 'styled-components'
import { BookmarkIcon, StartIcon, FokIcon } from '~/styles/Icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 6px;
`

export const TopSide = styled.div`
  > header {
    display: flex;
    align-items: center;
    transition: all 1s;

    > a {
      margin-left: 8px;
      font-size: 14px;
      font-weight: 600;
      color: var(--link);

      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }

  > p {
    margin: 8px 0 16px;
    font-size: 12px;
    color: var(--gray);
    letter-spacing: 0.1px;
  }
`

export const BottomSide = styled.div``

const IconStyled = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`

export const RepoIcon = styled(BookmarkIcon)`
  ${IconStyled}
`

export const StarIcon = styled(StartIcon)`
  ${IconStyled}
`

export const ForkIcon = styled(FokIcon)`
  ${IconStyled}
`
