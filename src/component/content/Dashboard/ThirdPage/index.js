
import MainTitle from "../SecondPage/MainTitle"
import css from "./index.module.css"
import MainButton from "../SecondPage/MainButton"

export default () => {
    return <>
        <div className={css.total}>
            <div>

                <div className={css.left}>
                    <img src="/image/Dashboard/thirdPage/Toilet_open.png"/>
                </div>
                <div className={css.right + " w-fit d-f f-column gap-50px x-center"}>
                    <MainTitle title1="OMIC" color="var(--main-text-color)" title2=" TOKEN" backColor="var(--main-text-color)"  />
                    <div className="size-24px">
                        POOPIE is
                        <ul>
                            <li>100% community owned. No dev holding supply.</li>
                            <li>LP 100% burnt.</li>
                            <li>989 million $sc supply 100% released in circulation.</li>
                        </ul>
                        </div>
                    <div className="d-f gap-16px">
                        <MainButton bColor="var(--main-black-color)" backColor="var(--main-text-color)">
                            <div className="d-f w-fit m-a gap-16px y-center">
                                <div>
                                    BUY POOPECOIN
                                </div>
                                <div>
                                    <img src="/image/Dashboard/secondPage/down2.svg" />
                                </div>
                            </div>
                        </MainButton>
                    </div>
                </div>

            </div>
        </div>
    </>
}