import React from "react"
import css from "./index.module.css"
import MainTitle from "./MainTitle"
import MainButton from "./MainButton"


export default () => {
    return <>
        <div className={css.total}>
            <div  className="d-f j-s-b">
                <div className={css.left + " w-fit d-f f-column gap-50px x-center"}>
                    <MainTitle title1="About" color="var(--main-text-heavy-color)" title2=" POOPCOIN" order />
                    <div className="size-24px">
                        $POO isn't just a Poope. An open-source peer-to-peer digital currency, favoured on Solana Network worldwide.
                        <br />
                        <br />
                        At its heart, POOPECOIN is the accidental crypto movement that makes people smile and its amazing, vibrant community made up of friendly folks just like you! Together, we will flush to a 1 billion market cap. Plup down, flush up!
                    </div>
                    <div className="d-f gap-16px">
                        <MainButton bColor="var(--main-black-color)" backColor="var(--main-text-heavy-color)">
                            <div className="d-f w-fit m-a gap-16px y-center">
                                <div>
                                    BUY POOPECOIN
                                </div>
                                <div>
                                    <img src="/image/Dashboard/secondPage/down2.svg" />
                                </div>
                            </div>
                        </MainButton>
                        <MainButton bColor="var(--main-black-color)" backColor="var(--main-white-color)">
                            <div className="d-f w-fit m-a gap-16px y-center">
                                <div>
                                    READ MORE
                                </div>
                                <div>
                                    <img src="/image/Dashboard/secondPage/Down 1.svg" />
                                </div>
                            </div>
                        </MainButton>
                    </div>
                </div>
                <div className={css.right+"  w-fit"}>
                    <img src="/image/Dashboard/secondPage/toilet.svg"/>
                </div>
            </div>
        </div>
    </>
}