import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { ChallengBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CountDownProvider } from '../contexts/CountDownContext'

import styles from '../styles/pages/Home.module.css'
import React from 'react'
import { ChallengesProvider } from '../contexts/ChallengesContext'

interface HomePros {
  level: number;
  currentExperience: number;
  challengesCompleted:number
}

export default function App(props: HomePros) {

  return (
    <ChallengesProvider 
      level = {props.level}
      currentExperience = {props.currentExperience}
      challengesCompleted = {props.challengesCompleted} >
      <div className={styles.container}>

        <Head>
          <title>Início | Move.it</title>
        </Head>


        <ExperienceBar />


        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  );
}

//Tudo que é feito nesta função executa no servidor node
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
