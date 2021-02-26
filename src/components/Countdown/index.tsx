import { useState, useEffect, useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';

import * as S from './styles';

import Button from '../Button';

const Countdown = () => {
  const { 
    minutes, 
    seconds, 
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown
  } = useContext(CountdownContext);

  const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('');
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <S.Wrapper>
        <S.WrapperNumbers>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </S.WrapperNumbers>
        <span>:</span>
        <S.WrapperNumbers>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </S.WrapperNumbers>
      </S.Wrapper>

      {hasFinished ? (
        <Button
          disabled={true}
        >
          Ciclo encerrado
        </Button>
      ) : (
        <>
          { isActive ? (
            <Button
              type="button"
              isActive={isActive} 
              onclick={resetCountdown}
            >
              Abandonar ciclo
            </Button>
          ) : (
            <Button
              type="button"
              isActive={isActive}
              onclick={startCountdown}
            >
              Inciar um ciclo
            </Button>
          ) }
        </>
      )}
    </div>
  );
}

export default Countdown;
