import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import style from '../styles/components/Profile.module.css'

export function Profile() {

    const {level} = useContext(ChallengesContext)


    return (
        <div className={style.profileContainer}>
       
            <div>
             

                <p>
                    {/*Next já sabe o diretório */}
                    <img src="icons/level.svg" alt="" />
                    Level  {level} 
                </p>
            </div>
        </div>
    )
}