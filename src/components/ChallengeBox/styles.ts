import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100%;

    background: ${theme.colors.white};
    border-radius: 5px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    padding: 1.5rem 2rem;

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `}
`

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  > p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 2rem;
  }

  > p img {
    margin-bottom: 1.5rem;
  }
`

export const ChallengeActive = styled.div`
  ${({ theme }) => css`
    height: 100%;

    display: flex;
    flex-direction: column;

    > header {
      color: ${theme.colors.blue};
      font-weight: 600;
      font-size: 1.25rem;
      padding: 0 2rem 1.5rem;
      border-bottom: 1px solid ${theme.colors.gray_line};
    }

    > main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > strong {
        font-size: 2rem;
        font-weight: 600;
        color: ${theme.colors.title};
        margin: 1.5rem 0 1rem;
      }

      > p {
        line-height: 1.5;
      }
    }

    > footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  `}
`