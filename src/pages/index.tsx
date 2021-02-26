import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChalengesContext';

import ExperienceBar from "../components/ExperienceBar";
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';

import * as S from '../styles/stylesPages/home';

type HomeProps = {
  level: number
  currentExperience: number
  challengeCompleted: number
}

export default function Home({ 
  level,
  currentExperience,
  challengeCompleted 
}: HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengeCompleted={challengeCompleted}
    >
      <S.ContainerMain>

        <Head>
          <title>Início | Lest's move</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <S.SectionLeft>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>

            <section>
              <ChallengeBox />
            </section>
          </S.SectionLeft>
        </CountdownProvider>

      </S.ContainerMain>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengeCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted),
    }
  }
}
