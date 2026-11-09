import React from "react"


export default (props) => {
    return <>
        <div className=" d-f y-center gap-8px w-fit b-black b-r-100px p-y-12px p-x-20px back-main">
            {props.children}
        </div>
    </>
}