import { createContext, useState, ReactNode } from 'react'
import challenges from '../../challenges.json'

interface Challange {
    type: 'body' | 'eye';
    description: string;
    amount: 100;
}

interface ChallengesContextData{
    level: number;
    currentExperience: number;
    challengesCompleted: number; 
    startNewChallenge: () => void;
    activeChallenge:  Challange;
    levelUp: () => void;
    resetChallenge: () => void;
    experienceToNextLevel: number
}

interface ChallengesProviderProps{
    //Quando o tipo da propriedade é um componente React
    children: ReactNode
}

export const ChallengesContext = createContext({} as ChallengesContextData)


export function ChallengesProvider({ children }: ChallengesProviderProps) {

    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrenteExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenge, setactiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)


    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]
        setactiveChallenge(challenge)
    }
     function resetChallenge() {
         setactiveChallenge(null)
     }

    return(
        <ChallengesContext.Provider 
        value={{
        level,
        currentExperience, 
        challengesCompleted, 
        startNewChallenge,
        levelUp,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel}}>
            {children}
        </ChallengesContext.Provider>
    )

}