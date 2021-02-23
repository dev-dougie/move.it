import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {

    //States that will control my component

    return (
        <>
            <header className= {styles.experienceBar}>
                <span>0 XP</span>
                <div>
                    {/*Controla-se o tamanho como uma variáel*/}
                    <div style={{ width: `15%` }} />
                    <span
                        className= {styles.currentExperience}
                        style={{ left: '15%' }} >
                        {600 * 0.15} XP
                    </span>
                </div>
                <span>600 XP</span>
            </header>
        </>
    )
}