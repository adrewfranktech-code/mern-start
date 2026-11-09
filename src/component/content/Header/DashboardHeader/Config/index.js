import Moon from "./Moon"
import Connect from "./Connect"
import css from "./index.module.css"


export default () => {
    return <>
        <div className="d-f gap-16px">

            <Moon />
        <Connect>
            <img className={css.firstImage} src="/image/Dashboard/header/bag.svg" />
            <img className={css.secondImage} src="/image/Dashboard/header/Menu Hamburger.png" />
            <div className="">
                CONNECT
            </div>
        </Connect>
        </div>
    </>
}