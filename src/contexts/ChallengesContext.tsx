import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookie from 'js-cookie'
import challenges from '../../challenges.json'
import LevelUpModal from '../components/LevelUpModal'


interface Challange {
    type: 'body' | 'eye';
    description: string;
    amount: 100;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    startNewChallenge: () => void;
    activeChallenge: Challange;
    levelUp: () => void;
    resetChallenge: () => void;
    experienceToNextLevel: number;
    completeChallenge: () => void
    closeLevelUpModal: () => void
}

interface ChallengesProviderProps {
    //Quando o tipo da propriedade é um componente React
    children: ReactNode
    level: number;
    currentExperience: number;
    challengesCompleted: number
}

export const ChallengesContext = createContext({} as ChallengesContextData)


export function ChallengesProvider(
    { children,
        ...rest }: ChallengesProviderProps) {


    const [level, setLevel] = useState(rest.level ?? 1)
    const [currentExperience, setCurrenteExperience] = useState(rest.currentExperience ?? 0)
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)
    const [activeChallenge, setactiveChallenge] = useState(null)
    const [isLevelUpModalOpen, setIsLevelOpenModalOpen] = useState(false)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {
        Cookie.set('level', String(level));
        Cookie.set('currentExperience', String(currentExperience));
        Cookie.set('challengesCompleted', String(challengesCompleted));
    }, [level, currentExperience, challengesCompleted])

    //Quando o usuário chega na experiência necessária
    function levelUp() {
        setLevel(level + 1)
        setIsLevelOpenModalOpen(true)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]
        setactiveChallenge(challenge)

        new Audio('/notification.mp3').play()

        if (Notification.permission === "granted") {
            new Notification('Novo desafio 💪', {
                body: `Valendo ${challenge.amount} XP!`,

            })
        }
    }

    function resetChallenge() {
        setactiveChallenge(null)
    }

    function completeChallenge() {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp();
        }

        setCurrenteExperience(finalExperience);
        setactiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }

    function closeLevelUpModal() {
        setIsLevelOpenModalOpen(false)
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                startNewChallenge,
                levelUp,
                activeChallenge,
                resetChallenge,
                experienceToNextLevel,
                completeChallenge,
                closeLevelUpModal
            }}>
            {children}
            {isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    )

}