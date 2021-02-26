import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChalengesContext';

import * as S from './styles';

const Profile = () => {
  const { level } = useContext(ChallengesContext);

  return (
    <S.ProfileContainer>
      <img src="https://github.com/JeanVictorMachado.png" alt="Jean Machado" />
      <div>
        <strong>Jean Machado</strong>
        <p>
          <img src="icons/level.svg" />
          Level {level}
        </p>
      </div>
    </S.ProfileContainer>
  );
}

export default Profile;
