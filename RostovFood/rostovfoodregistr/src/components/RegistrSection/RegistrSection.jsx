import style from "./RegistrSection.module.css"
import {useRef, useState} from "react"


//TODO: классы и вынесение компонента input в компонент

const RegistrSection = () => {

    const validation = () => {

        const error = {
            "nameValidationError": [],
            "surnameValidationError": [],
            "numberValidationError": [],
            "passwordValidationError": []
        }

        if (nameField.current.value == "" && !((/d/).test(firstUpperCase(nameField.current.value)))) {
            error.nameValidationError.push("Имя не может содержать цифр")
        }

        if (surnameField.current.value !== "" && !((/d/).test(firstUpperCase(surnameField.current.value)))) {
            error.surnameValidationError.push("Фамилия не может содержать цифр")
        }

        if (numberField.current.value !== "" && /[a-zA-Z]/.test(numberField.current.value)) {
            error.numberValidationError.push("Номер телефона не может содержать буквы")
        }

        if (passwordField.current.value != secondPasswordField.current.value) {
            error.passwordValidationError.push("Пароли не совпадают")
        }
        if (passwordField.current.value.length < 8) {
            error.passwordValidationError.push("Пароль должен состоять минимум из восьми символов")
        }



        setValidationError(error)


    }

    const firstUpperCase = (field) => {
        let preField = field.toLowerCase()
        return preField.charAt(0).toUpperCase() + preField.slice(1)

    }

    const notNull = (object, arg) => {
        if (object == 0 || object[arg] == []) {
            return false
        } else {
            return object[arg]
        }
    }

    const [validationError, setValidationError] = useState(0)

    const nameField = useRef(null)
    const surnameField = useRef(null)
    const numberField = useRef(null)
    const passwordField = useRef(null)
    const secondPasswordField = useRef(null)

    console.log(validationError)

    
    //Неверная валидация и форматирование
    return (

        <>
         <div className={style.authRightSection}>

                    <div className={style.authSection}>
                        <h1 className={style.autorisationMainText}>Регистрация</h1>
                        <div className={style.loginBlock}>
                            <span className={style.littleUpText}>Имя</span>
                            <input type="text" placeholder="Введите имя" ref={nameField} className={notNull(validationError, "nameValidationError") ? style.inputWithError : style.s}/>
                            {notNull(validationError, "nameValidationError") && <span>{validationError.nameValidationError}</span>}
                        </div>
                        <div className={style.loginBlock}>
                            <span className={style.littleUpText}>Фамилия</span>
                            <input type="text" placeholder="Введите фамилию" ref={surnameField} className={notNull(validationError, "surnameValidationError") ? style.inputWithError : style.s}/>
                            {notNull(validationError, "surnameValidationError") && <span>{validationError.surnameValidationError}</span>}
                        </div>
                        <div className={style.loginBlock}>
                            <span className={style.littleUpText}>Номер телефона</span>
                            <input type="text" placeholder="Введите номер телефона" ref={numberField} className={notNull(validationError, "numberValidationError") ? style.inputWithError : style.s}/>
                            {notNull(validationError, "numberValidationError") && <span>{validationError.numberValidationError}</span>}
                        </div>
                        <div className={style.loginBlock}>
                            <span className={style.littleUpText}>Пароль</span>
                            <input type="password" placeholder="Введите пароль" ref={passwordField} className={notNull(validationError, "passwordValidationError") ? style.inputWithError : style.s}/>
                        </div>
                        <div className={style.loginBlock}>
                            <span className={style.littleUpText}>Подтверждение пароля</span>
                            <input type="password" placeholder="Подтвердите пароль" ref={secondPasswordField}/>
                            {notNull(validationError, "passwordValidationError") && <span>{validationError.passwordValidationError}</span>}
                        </div>
                        <button className={style.autoButton} onClick={() => validation()}>Зарегистрироваться</button>
                        <span className={style.authTextWithLink}>Уже есть учётная запись? <a href="#" className={style.registerLink}>Войдите в неё</a></span>
                    </div>
                </div>
        </>
    )
}

export default RegistrSection