import Header from "../../../components/header/header"
import style from "./Authentication.module.css"
import AuthSection from "../../../components/AuthSection/AuthSection"
import RegistrSection from "../../../components/RegistrSection/RegistrSection"

const AuthenticationPage = () => {

    return (
        <>
         <Header/>
         <section>
            <div className={style.container}>
                <div className={style.leftSection}>

                </div>
                {/* <RegistrSection/> */}
                <AuthSection/>
            </div>
         </section>
        </>
    )
}

export default AuthenticationPage