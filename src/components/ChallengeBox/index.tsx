import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChalengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import Button from '../Button';

import * as S from './styles';

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountdown();
  }

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  }

  return (
    <S.Wrapper>
      { activeChallenge ? (
        <S.ChallengeActive>
          <header>{`Ganhe ${activeChallenge.amount} xp`}</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <Button
              height="3rem"
              color="red"
              onclick={handleChallengeFailed}
            >
              Falhei
            </Button>

            <Button
              height="3rem"
              color="green"
              onclick={handleChallengeSucceeded}
            >
              Completei
            </Button>
          </footer>
        </S.ChallengeActive>
      ) : (
        <S.ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </S.ChallengeNotActive>
      ) }
    </S.Wrapper>
  );
}

export default ChallengeBox;
