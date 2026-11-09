import React from "react"
import DashbosrdHeader from "../../Header/DashboardHeader"
import DashboardFooter from "../../Footer/DashboardFooter"


export default (props) => {
    return <div>
        {props.children}
        <DashboardFooter />
    </div>
}