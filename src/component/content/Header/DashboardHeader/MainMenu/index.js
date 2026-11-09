import React from "react"
import Menu from "./Menu"
import css from "./index.module.css"


export default () => {
    return <>
        <div className={ css.total + " d-f  gap-32px"}>
            <Menu>About</Menu>
            <Menu>Tekenomics</Menu>
            <Menu>Roadmap</Menu>
            <Menu>Community</Menu>
            <Menu>FAQ</Menu>
            <Menu>
                <img src="/image/Dashboard/header/flag.png"/>
                <span className="m-y-4px">
                    EN
                </span>
                <img src="/image/Dashboard/header/blackDown.png"/>
            </Menu>
        </div>
    </>
}