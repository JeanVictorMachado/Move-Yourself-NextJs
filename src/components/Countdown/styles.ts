import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${theme.colors.title};
  `}

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`

export const WrapperNumbers = styled.div`
  ${({ theme }) => css`
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${theme.colors.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
  `}

  span {
    flex: 1;
  }

  span:first-child {
    border-right: 1px solid #f0f1f3;
  }

  span:last-child {
    border-left: 1px solid #f0f1f3;
  }
`

export const WrapperSeconds = styled.div``
