import style from "./AuthSection.module.css"
import { useRef} from "react"
import { useState } from "react"


const AuthSection = () => {

    const autoValidation = () => {
        setValidationError(true)
        loginField.current.value = ""
        passField.current.value = ""
    }

    const [validationError, setValidationError] = useState(null)

    const loginField = useRef(null)
    const passField = useRef(null)

    return (
        <>
         <div className={style.authRightSection}>

                    <div className={style.authSection}>
                        <h1 className={style.autorisationMainText}>Авторизация</h1>
                        <div className={style.loginBlock}>
                            <span className={style.littleUpText}>Логин</span>
                            <input type="text" placeholder="Введите логин" ref={loginField} className={validationError && style.inputWithError}/>
                        </div>
                        <div className={style.passBlock}>
                            <span className={style.littleUpText}>Пароль</span>
                            <input type="password" placeholder="Введите Пароль" ref={passField} className={validationError && style.inputWithError}/>
                        </div>
                        {validationError && <span className={style.validationTextError}>Неправильный логин или пароль</span>}
                        <button className={style.autoButton} onClick={() => autoValidation()}>Войти</button>
                        <span className={style.authTextWithLink}>Нет учётной записи? <a href="#" className={style.registerLink}>Создайте её!</a></span>
                    </div>
                </div>
        </>
    )
}

export default AuthSection