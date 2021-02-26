import styled, { css } from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    ${({ theme }) => css`
      flex: 1;
      height: 4px;
      border-radius: 4px;
      background: ${theme.colors.gray_line};
      margin: 0 1.5rem;
      position: relative;
    `}
  }
`

type GreenBarProps = {
  widthBar: string
}

export const GreenBar = styled.div<GreenBarProps>`
  ${({ theme, widthBar }) => css`
    width: ${widthBar}%;
    height: 4px;
    border-radius: 4px;
    background: ${theme.colors.green};
  `}
`

type CurrentExperienceProps = {
  leftBar: string
}

export const CurrentExperience = styled.span<CurrentExperienceProps>`
  ${({ leftBar }) => css`
    left: ${leftBar}%;
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
  `}
`