import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import challenges from '../../challenges.json';
import LevelUpModal from '../components/LevelUpModal';

type Challenge = {
  type: 'body' | 'eye'
  description: string
  amount: number
}

type ChallengesContextData = {
  level: number
  setLevel: Dispatch<SetStateAction<number>>
  currentExperience: number
  setCurrentExperience: Dispatch<SetStateAction<number>>
  challengeCompleted: number
  setChallengeCompleted: Dispatch<SetStateAction<number>>
  levelUp: () => void
  startNewChallenge: () => void
  activeChallenge: Challenge
  resetChallenge: () => void
  experienceToNextLevel: number
  completeChallenge: () => void
  closeLevelUpModal: () => void
}

type ChallengesProviderProps = {
  children: ReactNode
  level: number
  currentExperience: number
  challengeCompleted: number
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider = ({ children, ...rest }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengeCompleted, setChallengeCompleted] = useState(rest.challengeCompleted ?? 0);
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set('level', String(level));
    Cookies.set('currentExperience', String(currentExperience));
    Cookies.set('challengeCompleted', String(challengeCompleted));
  }, [level, currentExperience, challengeCompleted]);

  const levelUp = () => {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  const closeLevelUpModal = () => {
    setIsLevelUpModalOpen(false);
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        body: `Valendo ${challenge.amount}xp!`
      })
    }
  }

  const resetChallenge = () => {
    setActiveChallenge(null);
  }

  const completeChallenge = () => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengeCompleted(challengeCompleted + 1);
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      setLevel,
      currentExperience,
      setCurrentExperience,
      challengeCompleted,
      setChallengeCompleted,
      levelUp,
      startNewChallenge,
      activeChallenge,
      resetChallenge,
      experienceToNextLevel,
      completeChallenge,
      closeLevelUpModal
    }} >
      { children }

      { isLevelUpModalOpen && <LevelUpModal /> }
    </ChallengesContext.Provider>
  )
}
