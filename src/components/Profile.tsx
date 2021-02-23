import style from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={style.profileContainer}>
            <img src="https://github.com/dev-dougie.png" alt="Profile Photo" />
            <div>
                <strong>Douglas Santos</strong>

                <p>
                    {/*Next já sabe o diretório */}
                    <img src="icons/level.svg" alt="" />
                    Level 1
                </p>
            </div>
        </div>
    )
}