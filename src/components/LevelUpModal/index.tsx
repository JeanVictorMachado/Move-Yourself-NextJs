import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChalengesContext';

import * as S from './styles';

const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <S.Overlay>
      <S.Wrapper>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </S.Wrapper>
    </S.Overlay>
  );
}

export default LevelUpModal;