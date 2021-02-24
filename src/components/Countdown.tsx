import { useState, useEffect } from 'react'
import style from '../styles/components/Countdown.module.css'

let countDownTimeout = NodeJS.Timeout;

export function Countdown() {
    const [time, setTime] = useState(25 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60

    //Padstart: Preenche com zero à esquerda se o número possuir menos
    //de duas casas decimais
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    function startCountdown() {
        clearTimeout(countDownTimeout)
        setIsActive(true)
        setTime(25 * 60)
    }

    function resetCountdown() {
        setIsActive(false)
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time])


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
            { hasFinished &&
                (
                    <button
                        disabled
                        className={style.CountdownButton}
                        >
                        Ciclo encerrado
                    </button>
                )}

            { isActive ? (
                <button
                    type='button'
                    className={`${style.CountdownButton} ${style.CountdownButtonActive}`}
                    onClick={resetCountdown}>
                    Abandonar ciclo
                </button>) :
                (

                    <button
                        type='button'
                        className={style.CountdownButton}
                        onClick={startCountdown}>
                        Iniciar um ciclo
                    </button>
                )
            }

        </div >
    )
}