import style from "./Header.module.css"

const Header = () => {
    return (
        <>
          <header>
            <div className={style.container}>
                <div className={style.mainLogoBlock}>
                    <a href="#" className={style.mainLogo}>ROSTOVFOOD</a>
                </div>
                <div className={style.registrButtonBlock}>
                    <a href="#" className={style.registrButton}>Регистрация</a>
                </div>
            </div>
          </header>
        </>
    )
}

export default Header