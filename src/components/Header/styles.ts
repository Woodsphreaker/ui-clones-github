import styled from 'styled-components';
import { Github } from '~/styles/Icons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`;

export const GithubLogo = styled(Github)`
  height: 32px;
  width: 32px;
  flex-shrink: 0;
  
  > path {
    fill: var(--logo)
  }
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;

  > input {
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;
    transition: width 0.4s ease-out, color 0.2s ease-out;

    :hover {
      width: 318px;
    }
  }

`;
