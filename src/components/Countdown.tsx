import { useContext } from 'react'
import { CountDownContext } from '../contexts/CountDownContext';
import style from '../styles/components/Countdown.module.css'

export function Countdown() {

    const {minutes,
             seconds, 
             hasFinished, 
             isActive, 
             startCountdown, 
             resetCountdown} 
             = useContext(CountDownContext)

    //Padstart: Preenche com zero à esquerda se o número possuir menos
    //de duas casas decimais
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    return (
        <div>
            <div className={style.countDownCountainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            { hasFinished ?
                (
                    <button
                        disabled
                        className={style.countdownButton}
                    >
                        Ciclo encerrado ✔️
                    </button>
                ) : (
                    <>
                        { isActive ? (
                            <button
                                type='button'
                                className={`${style.countdownButton} ${style.countdownButtonActive}`}
                                onClick={resetCountdown}>
                                Abandonar ciclo 🥺
                            </button>
                            ) : (
                                <button
                                    type='button'
                                    className={style.countdownButton}
                                    onClick={startCountdown}>
                                    Iniciar um ciclo ⌛
                                </button>
                            )
                        }
                    </>
                )
            }



        </div >
    )
}