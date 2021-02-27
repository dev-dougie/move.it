import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountDownContext } from '../contexts/CountDownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengBox() {

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const {resetCountdown} = useContext(CountDownContext)

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed() {
            resetCountdown()
            resetChallenge()
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ?
                (<div className={styles.challangeActive}>
                    <header>Ganhe {activeChallenge.amount} XP </header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >Falhei
                        </button>
                        <button type="button"
                            className={styles.challengeSucceedButton}
                            onClick={handleChallengeSucceeded}
                        >Completei
                        </button>
                    </footer>
                </div>) : (<div className={styles.challengeNotActive}>
                    <span>Finalize um ciclo para receber um desafio</span>
                    <p>
                        <img src="icons/level-up.svg" alt="Level up" />
                        Avance de level completando desafios
                    </p>
                </div>)}
        </div>
    )
}