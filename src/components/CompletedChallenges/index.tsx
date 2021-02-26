import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChalengesContext';

import * as S from './styles';

const CompletedChallenges = () => {
  const { challengeCompleted } = useContext(ChallengesContext);

  return (
      <S.Wrapper>
        <span>Desafios completos</span>
        <span>{challengeCompleted}</span>
      </S.Wrapper>
  );
}

export default CompletedChallenges;
