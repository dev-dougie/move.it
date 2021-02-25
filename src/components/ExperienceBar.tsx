import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {

    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext)
    const percentToNextLevel = Math.round((currentExperience) * 100 / experienceToNextLevel)

    //States that will control my component

    return (
        <>
            <header className= {styles.experienceBar}>
                <span>0 XP</span>
                <div>
                    {/*Controla-se o tamanho como uma variáel*/}
                    <div style={{ width: `${percentToNextLevel}%` }}/>
                    <span
                        className= {styles.currentExperience}
                        style={{ left: `${percentToNextLevel}`}} >
                        {currentExperience} XP
                    </span>
                </div>
                <span>{experienceToNextLevel} XP</span>
            </header>
        </>
    )
}