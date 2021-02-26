import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChalengesContext';

import * as S from './styles';

const ExperienceBar = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <S.Header>
      <span>0 xp</span>
      <div>
        <S.GreenBar widthBar={percentToNextLevel} />
        <S.CurrentExperience leftBar={percentToNextLevel}>
          {currentExperience} xp
        </S.CurrentExperience>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </S.Header>
  );
}

export default ExperienceBar;
