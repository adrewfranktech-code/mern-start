import React from "react"
import css from "./index.module.css"
import Mark from "./Mark"
import MainMenu from "./MainMenu"
import Config from "./Config"


export default () => {
    return <>
        <div className={css.preHeader + " d-f p-l-32px p-r-16px j-s-b"}>
            <div>
                9:41
            </div>
            <div className=" d-f gap-4px">
                <div><img src="/image/Dashboard/firstPage/battery.svg"/></div>
                <div><img src="/image/Dashboard/firstPage/net.svg"/></div>
                <div><img src="/image/Dashboard/firstPage/wifi.svg"/></div>
            </div>
        </div>
        <div className={css.total + " d-f p-x-100px j-s-b y-center"}>
            <Mark />
            <MainMenu />
            <Config/>
        </div>
    </>
}