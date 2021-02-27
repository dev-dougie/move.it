import { ReactNode, createContext, useContext, useState, useEffect } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountDownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountdown: () => void;

}

export const CountDownContext = createContext({} as CountDownContextData) ;

interface CountDownProviderProps {
    //Quando o tipo da propriedade é um componente React
    children: ReactNode;
}

let countDownTimeout: NodeJS.Timeout;

export function CountDownProvider({ children } : CountDownProviderProps) {

    const {startNewChallenge } = useContext(ChallengesContext)


    const [time, setTime] = useState(25 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60

    function startCountdown() {
        setIsActive(true)
    }

    function resetCountdown() {
        clearTimeout(countDownTimeout)
        setIsActive(false)
        setHasFinished(false)
        setTime(25 * 60)    
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge()
        }
    }, [isActive, time])


        return(
            <CountDownContext.Provider value = 
            {{
                minutes, 
                seconds,
                hasFinished,
                isActive,
                startCountdown,
                resetCountdown
            }}>
                {children}
            </CountDownContext.Provider>
        )
}

