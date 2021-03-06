import styled, { css } from 'styled-components';

export const ProfileContainer = styled.header`
  display: flex;
  align-items: center;

  > img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
  }

  > div {
    margin-left: 1.5rem;

    > strong {
      ${({ theme }) => css`
        font-size: 1.5rem;
        font-weight: 600;
        color: ${theme.colors.title}
      `}
    }

    > p {
      font-size: 1rem;
      margin-top: 0.5rem;

      > img {
        margin-right: 0.5rem;
      }
    }
  }
`
