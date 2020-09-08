import styled from 'styled-components'

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 24px;
  padding: var(--verticalPadding) var(--horizontalPadding);
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
