import styled, { css } from 'styled-components';

const buttonAppearance = {
  notIsActive: (theme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.title};

    :hover {
      background: ${theme.colors.red};
      color: ${theme.colors.white};
    }
  `,
  isActive: (theme, height, color) => css`
    background: ${color ? theme.colors[color] : theme.colors.blue};
    color: ${theme.colors.white};
    height: ${height};

    transition: ${color ? 'filter 0.2s' : 'background 0.2s'};

    :hover {
      background: ${color ? theme.colors[color] : theme.colors.blue_dark};
      filter: brightness(0.9);
    }
  `,
  disabled: (theme) => css`
  background: ${theme.colors.white};
  color: ${theme.colors.title};
  cursor: not-allowed;

  :hover {
      background: ${theme.colors.white};
    }
  `
}

export const WrapperButton = styled.button`
  ${({ theme, isActive, disabled, height, color }) => css`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color 0.2s;

    ${isActive && buttonAppearance.notIsActive(theme)};
    ${!isActive && buttonAppearance.isActive(theme, height, color)};
    ${disabled && buttonAppearance.disabled(theme)};
  `}
`
