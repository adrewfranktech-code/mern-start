import React from "react"
import css from "./index.module.css"
import DashboardHeader from "../../Header/DashboardHeader"

export default () => {
    return <>
        <div className={css.total + " back-main-light"}>
            <DashboardHeader />
            <div className={css.title + " f-f-M  t-center"}>
                <div>
                    POOPE
                    <img src="/image/Dashboard/firstPage/Poope Coin.png" />
                </div>
                <div>
                    SOLANA
                    <div className="size-24">
                        Every bathroom break becomes a bullseye moment to embrace your inner marksman. Nail that tight deadline, blast through the crypto world.
                    </div>
                </div>

            </div>
            <div>
                <img src="/image/Dashboard/firstPage/leftCloud.svg" />
                <img src="/image/Dashboard/firstPage/rightCloud.svg" />
                <img src="/image/Dashboard/firstPage/cloud.svg" />
                <img src="/image/Dashboard/firstPage/yellowStart.svg" />
                <img src="/image/Dashboard/firstPage/mouse.svg" />
            </div>
        </div>
    </>
}