import * as S from './styles';

type ButtomProps = {
  type?: string
  children?: string
  onclick?: () => void
  isActive?: boolean
  disabled?: boolean
  height?: string
  color?: string
}

const Button = ({
  children, 
  onclick, 
  isActive, 
  disabled,
  type,
  height,
  color
}: ButtomProps) => {
  return (
    <S.WrapperButton
      type={type}
      onClick={onclick}
      isActive={isActive}
      disabled={disabled}
      height={height}
      color={color}
    > 
      {children}
    </S.WrapperButton>
  );
}

export default Button;
